use miden_objects::asset::AssetVault as NativeAssetVault;
use wasm_bindgen::prelude::*;

use super::{account_id::AccountId, fungible_asset::FungibleAsset, rpo_digest::RpoDigest};

#[derive(Clone)]
#[wasm_bindgen]
pub struct AssetVault(NativeAssetVault);

#[wasm_bindgen]
impl AssetVault {
    pub fn root(&self) -> RpoDigest {
        self.0.root().into()
    }

    #[wasm_bindgen(js_name = "getBalance")]
    pub fn get_balance(&self, faucet_id: &AccountId) -> u64 {
        self.0.get_balance(faucet_id.into()).unwrap()
    }

    #[wasm_bindgen(js_name = "fungibleAssets")]
    pub fn fungible_assets(&self) -> Vec<FungibleAsset> {
        self.0
            .assets()
            .filter_map(|asset| {
                if asset.is_fungible() {
                    Some(asset.unwrap_fungible().into())
                } else {
                    None // TODO: Support non fungible assets
                }
            })
            .collect()
    }
}

// CONVERSIONS
// ================================================================================================

impl From<NativeAssetVault> for AssetVault {
    fn from(native_asset_vault: NativeAssetVault) -> Self {
        AssetVault(native_asset_vault)
    }
}

impl From<&NativeAssetVault> for AssetVault {
    fn from(native_asset_vault: &NativeAssetVault) -> Self {
        AssetVault(native_asset_vault.clone())
    }
}
