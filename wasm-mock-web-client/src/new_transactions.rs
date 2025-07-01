use miden_client::{
    note::BlockNumber,
    transaction::{
        PaymentTransactionData, // SwapTransactionData,
        TransactionRequestBuilder as NativeTransactionRequestBuilder,
        TransactionResult as NativeTransactionResult,
    },
};
// use miden_lib::note::utils::build_swap_tag;
use miden_objects::{
    /* account::AccountId as NativeAccountId, */ asset::FungibleAsset,
    note::NoteId as NativeNoteId,
};
use wasm_bindgen::prelude::*;

use crate::{
    MockWebClient, js_error_with_context,
    models::{
        account_id::AccountId,
        note_type::NoteType,
        provers::TransactionProver,
        transaction_request::TransactionRequest,
        transaction_result::TransactionResult,
        //transactions::NewSwapTransactionResult,
    },
};

#[wasm_bindgen]
impl MockWebClient {
    #[wasm_bindgen(js_name = "newTransaction")]
    pub async fn new_transaction(
        &mut self,
        account_id: &AccountId,
        transaction_request: &TransactionRequest,
    ) -> Result<TransactionResult, JsValue> {
        self.fetch_and_cache_account_auth_by_account_id(account_id)
            .await?;

        if let Some(client) = self.get_mut_inner() {
            let native_transaction_execution_result: NativeTransactionResult = client
                .new_transaction(account_id.into(), transaction_request.into())
                .await
                .map_err(|err| js_error_with_context(err, "failed to create new transaction"))?;

            Ok(native_transaction_execution_result.into())
        } else {
            Err(JsValue::from_str("Client not initialized"))
        }
    }

    #[wasm_bindgen(js_name = "submitTransaction")]
    pub async fn submit_transaction(
        &mut self,
        transaction_result: &TransactionResult,
        prover: Option<TransactionProver>,
    ) -> Result<(), JsValue> {
        let native_transaction_result: NativeTransactionResult = transaction_result.into();

        if let Some(client) = self.get_mut_inner() {
            match prover {
                Some(p) => {
                    client
                        .submit_transaction_with_prover(native_transaction_result, p.get_prover())
                        .await
                        .map_err(|err| {
                            js_error_with_context(err, "failed to submit transaction with prover")
                        })?;
                }
                None => {
                    client
                        .submit_transaction(native_transaction_result)
                        .await
                        .map_err(|err| {
                            js_error_with_context(err, "failed to submit transaction")
                        })?;
                }
            }
            Ok(())
        } else {
            Err(JsValue::from_str("Client not initialized"))
        }
    }

    #[wasm_bindgen(js_name = "newMintTransactionRequest")]
    pub fn new_mint_transaction_request(
        &mut self,
        target_account_id: &AccountId,
        faucet_id: &AccountId,
        note_type: NoteType,
        amount: u64,
    ) -> Result<TransactionRequest, JsValue> {
        let fungible_asset = FungibleAsset::new(faucet_id.into(), amount)
            .map_err(|err| js_error_with_context(err, "failed to create fungible asset"))?;

        let mint_transaction_request = {
            let client = self.get_mut_inner().ok_or_else(|| {
                JsValue::from_str("Client not initialized while generating transaction request")
            })?;

            NativeTransactionRequestBuilder::new()
                .build_mint_fungible_asset(
                    fungible_asset,
                    target_account_id.into(),
                    note_type.into(),
                    client.rng(),
                )
                .map_err(|err| {
                    js_error_with_context(err, "failed to create mint transaction request")
                })?
        };

        Ok(mint_transaction_request.into())
    }

    #[wasm_bindgen(js_name = "newSendTransactionRequest")]
    pub fn new_send_transaction_request(
        &mut self,
        sender_account_id: &AccountId,
        target_account_id: &AccountId,
        faucet_id: &AccountId,
        note_type: NoteType,
        amount: u64,
        recall_height: Option<u32>,
    ) -> Result<TransactionRequest, JsValue> {
        let fungible_asset = FungibleAsset::new(faucet_id.into(), amount)
            .map_err(|err| js_error_with_context(err, "failed to create fungible asset"))?;

        let payment_transaction = PaymentTransactionData::new(
            vec![fungible_asset.into()],
            sender_account_id.into(),
            target_account_id.into(),
        );

        let send_transaction_request = {
            let client = self.get_mut_inner().ok_or_else(|| {
                JsValue::from_str("Client not initialized while generating transaction request")
            })?;

            if let Some(recall_height) = recall_height {
                NativeTransactionRequestBuilder::new()
                    .build_pay_to_id(
                        payment_transaction,
                        Some(BlockNumber::from(recall_height)),
                        note_type.into(),
                        client.rng(),
                    )
                    .map_err(|err| {
                        js_error_with_context(
                            err,
                            "failed to create send transaction request with recall height",
                        )
                    })?
            } else {
                NativeTransactionRequestBuilder::new()
                    .build_pay_to_id(payment_transaction, None, note_type.into(), client.rng())
                    .map_err(|err| {
                        js_error_with_context(err, "failed to create send transaction request")
                    })?
            }
        };

        Ok(send_transaction_request.into())
    }

    #[wasm_bindgen(js_name = "newConsumeTransactionRequest")]
    pub fn new_consume_transaction_request(
        &mut self,
        list_of_note_ids: Vec<String>,
    ) -> Result<TransactionRequest, JsValue> {
        let consume_transaction_request = {
            let native_note_ids = list_of_note_ids
                .into_iter()
                .map(|note_id| NativeNoteId::try_from_hex(note_id.as_str()))
                .collect::<Result<Vec<_>, _>>()
                .map_err(|err| {
                    JsValue::from_str(&format!(
                        "Failed to convert note id to native note id: {err}"
                    ))
                })?;

            NativeTransactionRequestBuilder::new()
                .build_consume_notes(native_note_ids)
                .map_err(|err| {
                    JsValue::from_str(&format!(
                        "Failed to create Consume Transaction Request: {err}"
                    ))
                })?
        };

        Ok(consume_transaction_request.into())
    }
}
