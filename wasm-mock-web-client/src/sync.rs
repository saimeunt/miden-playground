use wasm_bindgen::prelude::*;

use crate::{
    MockWebClient, js_error_with_context,
    models::{block_header::BlockHeader, sync_summary::SyncSummary},
};

#[wasm_bindgen]
impl MockWebClient {
    #[wasm_bindgen(js_name = "syncState")]
    pub async fn sync_state(&mut self) -> Result<SyncSummary, JsValue> {
        if let Some(client) = self.get_mut_inner() {
            let sync_summary = client
                .sync_state()
                .await
                .map_err(|err| js_error_with_context(err, "failed to sync state"))?;

            Ok(sync_summary.into())
        } else {
            Err(JsValue::from_str("Client not initialized"))
        }
    }

    #[wasm_bindgen(js_name = "getSyncHeight")]
    pub async fn get_sync_height(&mut self) -> Result<u32, JsValue> {
        if let Some(client) = self.get_mut_inner() {
            let sync_height = client
                .get_sync_height()
                .await
                .map_err(|err| js_error_with_context(err, "failed to get sync height"))?;

            Ok(sync_height.as_u32())
        } else {
            Err(JsValue::from_str("Client not initialized"))
        }
    }

    #[wasm_bindgen(js_name = "getLatestEpochBlock")]
    pub async fn get_latest_epoch_block(&mut self) -> Result<BlockHeader, JsValue> {
        if let Some(client) = self.get_mut_inner() {
            let block_header = client
                .get_latest_epoch_block()
                .await
                .map_err(|err| js_error_with_context(err, "failed to get latest epoch block"))?;

            Ok(block_header.into())
        } else {
            Err(JsValue::from_str("Client not initialized"))
        }
    }
}
