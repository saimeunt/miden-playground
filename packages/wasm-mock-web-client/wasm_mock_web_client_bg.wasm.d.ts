/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const __wbg_note_free: (a: number, b: number) => void;
export const note_new: (a: number, b: number, c: number) => number;
export const note_id: (a: number) => number;
export const note_metadata: (a: number) => number;
export const note_recipient: (a: number) => number;
export const note_assets: (a: number) => number;
export const note_createP2IDNote: (a: number, b: number, c: number, d: number, e: number, f: number) => number;
export const note_createP2IDRNote: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => number;
export const __wbg_notesarray_free: (a: number, b: number) => void;
export const notesarray_new: (a: number, b: number) => number;
export const notesarray_push: (a: number, b: number) => void;
export const __wbg_noteexecutionhint_free: (a: number, b: number) => void;
export const noteexecutionhint_none: () => number;
export const noteexecutionhint_always: () => number;
export const noteexecutionhint_afterBlock: (a: number) => number;
export const noteexecutionhint_onBlockSlot: (a: number, b: number, c: number) => number;
export const noteexecutionhint_fromParts: (a: number, b: number) => number;
export const noteexecutionhint_canBeConsumed: (a: number, b: number) => number;
export const __wbg_notemetadata_free: (a: number, b: number) => void;
export const notemetadata_new: (a: number, b: number, c: number, d: number, e: number) => number;
export const notemetadata_sender: (a: number) => number;
export const notemetadata_tag: (a: number) => number;
export const notemetadata_noteType: (a: number) => number;
export const __wbg_noterecipient_free: (a: number, b: number) => void;
export const noterecipient_new: (a: number, b: number, c: number) => number;
export const noterecipient_digest: (a: number) => number;
export const noterecipient_serialNum: (a: number) => number;
export const noterecipient_script: (a: number) => number;
export const noterecipient_inputs: (a: number) => number;
export const __wbg_notetag_free: (a: number, b: number) => void;
export const notetag_fromAccountId: (a: number, b: number) => number;
export const notetag_forPublicUseCase: (a: number, b: number, c: number) => number;
export const notetag_forLocalUseCase: (a: number, b: number) => number;
export const notetag_isSingleTarget: (a: number) => number;
export const notetag_executionMode: (a: number) => number;
export const __wbg_noteidandargs_free: (a: number, b: number) => void;
export const noteidandargs_new: (a: number, b: number) => number;
export const __wbg_noteidandargsarray_free: (a: number, b: number) => void;
export const noteidandargsarray_new: (a: number, b: number) => number;
export const noteidandargsarray_push: (a: number, b: number) => void;
export const __wbg_transactionrequestbuilder_free: (a: number, b: number) => void;
export const transactionrequestbuilder_new: () => number;
export const transactionrequestbuilder_withUnauthenticatedInputNotes: (a: number, b: number) => number;
export const transactionrequestbuilder_withAuthenticatedInputNotes: (a: number, b: number) => number;
export const transactionrequestbuilder_withOwnOutputNotes: (a: number, b: number) => number;
export const transactionrequestbuilder_withCustomScript: (a: number, b: number) => number;
export const transactionrequestbuilder_withExpectedOutputNotes: (a: number, b: number) => number;
export const transactionrequestbuilder_withExpectedFutureNotes: (a: number, b: number) => number;
export const transactionrequestbuilder_extendAdviceMap: (a: number, b: number) => number;
export const transactionrequestbuilder_build: (a: number) => number;
export const mockwebclient_newTransaction: (a: number, b: number, c: number) => any;
export const mockwebclient_submitTransaction: (a: number, b: number, c: number) => any;
export const mockwebclient_newMintTransactionRequest: (a: number, b: number, c: number, d: number, e: bigint) => [number, number, number];
export const mockwebclient_newSendTransactionRequest: (a: number, b: number, c: number, d: number, e: number, f: bigint, g: number) => [number, number, number];
export const mockwebclient_newConsumeTransactionRequest: (a: number, b: number, c: number) => [number, number, number];
export const __wbg_mockwebclient_free: (a: number, b: number) => void;
export const mockwebclient_new: () => number;
export const mockwebclient_createClient: (a: number, b: number, c: number, d: number, e: number) => any;
export const __wbg_fungibleassetdeltaitem_free: (a: number, b: number) => void;
export const fungibleassetdeltaitem_faucetId: (a: number) => number;
export const fungibleassetdeltaitem_amount: (a: number) => bigint;
export const __wbg_fungibleassetdelta_free: (a: number, b: number) => void;
export const fungibleassetdelta_numAssets: (a: number) => number;
export const fungibleassetdelta_isEmpty: (a: number) => number;
export const fungibleassetdelta_iter: (a: number) => [number, number];
export const __wbg_inputnote_free: (a: number, b: number) => void;
export const inputnote_id: (a: number) => number;
export const inputnote_note: (a: number) => number;
export const inputnote_proof: (a: number) => number;
export const inputnote_location: (a: number) => number;
export const __wbg_noteheader_free: (a: number, b: number) => void;
export const noteheader_id: (a: number) => number;
export const noteheader_metadata: (a: number) => number;
export const noteheader_commitment: (a: number) => number;
export const __wbg_noteinclusionproof_free: (a: number, b: number) => void;
export const noteinclusionproof_location: (a: number) => number;
export const noteinclusionproof_notePath: (a: number) => number;
export const __wbg_outputnote_free: (a: number, b: number) => void;
export const outputnote_full: (a: number) => number;
export const outputnote_partial: (a: number) => number;
export const outputnote_header: (a: number) => number;
export const outputnote_assets: (a: number) => number;
export const outputnote_id: (a: number) => number;
export const outputnote_recipientDigest: (a: number) => number;
export const outputnote_metadata: (a: number) => number;
export const outputnote_shrink: (a: number) => number;
export const outputnote_intoFull: (a: number) => number;
export const __wbg_outputnotesarray_free: (a: number, b: number) => void;
export const outputnotesarray_new: (a: number, b: number) => number;
export const outputnotesarray_append: (a: number, b: number) => void;
export const __wbg_partialnote_free: (a: number, b: number) => void;
export const partialnote_id: (a: number) => number;
export const partialnote_recipientDigest: (a: number) => number;
export const partialnote_assets: (a: number) => number;
export const __wbg_noteandargs_free: (a: number, b: number) => void;
export const noteandargs_new: (a: number, b: number) => number;
export const __wbg_noteandargsarray_free: (a: number, b: number) => void;
export const noteandargsarray_new: (a: number, b: number) => number;
export const noteandargsarray_push: (a: number, b: number) => void;
export const partialnote_metadata: (a: number) => number;
export const __wbg_accountcode_free: (a: number, b: number) => void;
export const accountcode_commitment: (a: number) => number;
export const __wbg_notescript_free: (a: number, b: number) => void;
export const notescript_p2id: () => number;
export const notescript_p2idr: () => number;
export const notescript_swap: () => number;
export const notescript_root: (a: number) => number;
export const mockwebclient_exportNote: (a: number, b: number, c: number, d: number, e: number) => any;
export const mockwebclient_exportStore: (a: number) => any;
export const mockwebclient_importAccount: (a: number, b: any) => any;
export const mockwebclient_importPublicAccountFromSeed: (a: number, b: number, c: number, d: number) => any;
export const mockwebclient_importAccountById: (a: number, b: number) => any;
export const mockwebclient_importNote: (a: number, b: any) => any;
export const mockwebclient_forceImportStore: (a: number, b: any) => any;
export const __wbg_transactionprover_free: (a: number, b: number) => void;
export const transactionprover_newLocalProver: () => number;
export const transactionprover_newRemoteProver: (a: number, b: number) => number;
export const transactionprover_serialize: (a: number) => [number, number];
export const transactionprover_deserialize: (a: number, b: number, c: number, d: number) => [number, number, number];
export const transactionprover_endpoint: (a: number) => [number, number];
export const __wbg_transactionstatus_free: (a: number, b: number) => void;
export const transactionstatus_pending: () => number;
export const transactionstatus_committed: (a: number) => number;
export const transactionstatus_discarded: (a: number, b: number) => number;
export const transactionstatus_isPending: (a: number) => number;
export const transactionstatus_isCommitted: (a: number) => number;
export const transactionstatus_isDiscarded: (a: number) => number;
export const transactionstatus_getBlockNum: (a: number) => number;
export const __wbg_accountid_free: (a: number, b: number) => void;
export const accountid_fromHex: (a: number, b: number) => number;
export const accountid_isFaucet: (a: number) => number;
export const accountid_isRegularAccount: (a: number) => number;
export const accountid_toString: (a: number) => [number, number];
export const accountid_prefix: (a: number) => number;
export const accountid_suffix: (a: number) => number;
export const accountid_toBech32: (a: number, b: number) => [number, number];
export const __wbg_accountstoragemode_free: (a: number, b: number) => void;
export const accountstoragemode_private: () => number;
export const accountstoragemode_public: () => number;
export const accountstoragemode_network: () => number;
export const accountstoragemode_tryFromStr: (a: number, b: number) => [number, number, number];
export const accountstoragemode_asStr: (a: number) => [number, number];
export const __wbg_assembler_free: (a: number, b: number) => void;
export const assembler_withLibrary: (a: number, b: number) => [number, number, number];
export const assembler_withDebugMode: (a: number, b: number) => number;
export const assembler_compileNoteScript: (a: number, b: number, c: number) => [number, number, number];
export const __wbg_consumablenoterecord_free: (a: number, b: number) => void;
export const __wbg_noteconsumability_free: (a: number, b: number) => void;
export const noteconsumability_accountId: (a: number) => number;
export const noteconsumability_consumableAfterBlock: (a: number) => number;
export const consumablenoterecord_new: (a: number, b: number, c: number) => number;
export const consumablenoterecord_inputNoteRecord: (a: number) => number;
export const consumablenoterecord_noteConsumability: (a: number) => [number, number];
export const __wbg_felt_free: (a: number, b: number) => void;
export const felt_new: (a: bigint) => number;
export const felt_asInt: (a: number) => bigint;
export const felt_toString: (a: number) => [number, number];
export const __wbg_feltarray_free: (a: number, b: number) => void;
export const feltarray_new: (a: number, b: number) => number;
export const feltarray_append: (a: number, b: number) => void;
export const __wbg_inputnoterecord_free: (a: number, b: number) => void;
export const inputnoterecord_id: (a: number) => number;
export const inputnoterecord_state: (a: number) => number;
export const inputnoterecord_details: (a: number) => number;
export const inputnoterecord_metadata: (a: number) => number;
export const inputnoterecord_inclusionProof: (a: number) => number;
export const inputnoterecord_consumerTransactionId: (a: number) => [number, number];
export const inputnoterecord_nullifier: (a: number) => [number, number];
export const inputnoterecord_isAuthenticated: (a: number) => number;
export const inputnoterecord_isConsumed: (a: number) => number;
export const inputnoterecord_isProcessing: (a: number) => number;
export const inputnoterecord_serialize: (a: number) => any;
export const inputnoterecord_deserialize: (a: any) => [number, number, number];
export const __wbg_networkid_free: (a: number, b: number) => void;
export const networkid_new: (a: number, b: number) => number;
export const networkid_mainnet: () => number;
export const networkid_testnet: () => number;
export const networkid_devnet: () => number;
export const networkid_tryFromStr: (a: number, b: number) => [number, number, number];
export const networkid_asStr: (a: number) => [number, number];
export const __wbg_assemblerutils_free: (a: number, b: number) => void;
export const assemblerutils_createAccountComponentLibrary: (a: number, b: number, c: number, d: number, e: number) => [number, number, number];
export const __wbg_account_free: (a: number, b: number) => void;
export const account_id: (a: number) => number;
export const account_commitment: (a: number) => number;
export const account_nonce: (a: number) => number;
export const account_vault: (a: number) => number;
export const account_storage: (a: number) => number;
export const account_code: (a: number) => number;
export const account_isFaucet: (a: number) => number;
export const account_isRegularAccount: (a: number) => number;
export const account_isUpdatable: (a: number) => number;
export const account_isPublic: (a: number) => number;
export const account_isNew: (a: number) => number;
export const account_serialize: (a: number) => any;
export const account_deserialize: (a: any) => [number, number, number];
export const __wbg_merklepath_free: (a: number, b: number) => void;
export const merklepath_depth: (a: number) => number;
export const merklepath_nodes: (a: number) => [number, number];
export const merklepath_computeRoot: (a: number, b: bigint, c: number) => number;
export const merklepath_verify: (a: number, b: bigint, c: number, d: number) => number;
export const __wbg_notefilter_free: (a: number, b: number) => void;
export const notefilter_new: (a: number, b: number, c: number) => number;
export const __wbg_noteid_free: (a: number, b: number) => void;
export const noteid_new: (a: number, b: number) => number;
export const noteid_toString: (a: number) => [number, number];
export const __wbg_syncsummary_free: (a: number, b: number) => void;
export const syncsummary_blockNum: (a: number) => number;
export const syncsummary_committedNotes: (a: number) => [number, number];
export const syncsummary_consumedNotes: (a: number) => [number, number];
export const syncsummary_updatedAccounts: (a: number) => [number, number];
export const syncsummary_committedTransactions: (a: number) => [number, number];
export const syncsummary_serialize: (a: number) => any;
export const syncsummary_deserialize: (a: any) => [number, number, number];
export const __wbg_transactionargs_free: (a: number, b: number) => void;
export const transactionargs_txScript: (a: number) => number;
export const transactionargs_getNoteArgs: (a: number, b: number) => number;
export const transactionargs_adviceInputs: (a: number) => number;
export const __wbg_transactionrequest_free: (a: number, b: number) => void;
export const transactionrequest_serialize: (a: number) => any;
export const transactionrequest_deserialize: (a: any) => [number, number, number];
export const __wbg_transactionresult_free: (a: number, b: number) => void;
export const transactionresult_executedTransaction: (a: number) => number;
export const transactionresult_createdNotes: (a: number) => number;
export const transactionresult_blockNum: (a: number) => number;
export const transactionresult_transactionArguments: (a: number) => number;
export const transactionresult_accountDelta: (a: number) => number;
export const transactionresult_consumedNotes: (a: number) => number;
export const transactionresult_serialize: (a: number) => any;
export const transactionresult_deserialize: (a: any) => [number, number, number];
export const mockwebclient_getTransactions: (a: number, b: number) => any;
export const mockwebclient_compileTxScript: (a: number, b: number, c: number) => [number, number, number];
export const mockwebclient_getAccounts: (a: number) => any;
export const mockwebclient_getAccount: (a: number, b: number) => any;
export const __wbg_accountheader_free: (a: number, b: number) => void;
export const accountheader_commitment: (a: number) => number;
export const accountheader_id: (a: number) => number;
export const accountheader_nonce: (a: number) => number;
export const accountheader_vaultCommitment: (a: number) => number;
export const accountheader_storageCommitment: (a: number) => number;
export const accountheader_codeCommitment: (a: number) => number;
export const __wbg_assetvault_free: (a: number, b: number) => void;
export const assetvault_getBalance: (a: number, b: number) => bigint;
export const assetvault_fungibleAssets: (a: number) => [number, number];
export const __wbg_fungibleasset_free: (a: number, b: number) => void;
export const fungibleasset_new: (a: number, b: bigint) => number;
export const fungibleasset_faucetId: (a: number) => number;
export const fungibleasset_amount: (a: number) => bigint;
export const fungibleasset_intoWord: (a: number) => number;
export const __wbg_noteassets_free: (a: number, b: number) => void;
export const noteassets_new: (a: number, b: number) => number;
export const noteassets_push: (a: number, b: number) => void;
export const noteassets_fungibleAssets: (a: number) => [number, number];
export const __wbg_notedetails_free: (a: number, b: number) => void;
export const notedetails_new: (a: number, b: number) => number;
export const notedetails_assets: (a: number) => number;
export const notedetails_recipient: (a: number) => number;
export const __wbg_notedetailsarray_free: (a: number, b: number) => void;
export const notedetailsarray_new: (a: number, b: number) => number;
export const notedetailsarray_push: (a: number, b: number) => void;
export const __wbg_noteinputs_free: (a: number, b: number) => void;
export const noteinputs_new: (a: number) => number;
export const noteinputs_values: (a: number) => [number, number];
export const mockwebclient_newWallet: (a: number, b: number, c: number, d: number, e: number) => any;
export const mockwebclient_newFaucet: (a: number, b: number, c: number, d: number, e: number, f: number, g: bigint) => any;
export const mockwebclient_newAccount: (a: number, b: number, c: number, d: number) => any;
export const assetvault_root: (a: number) => number;
export const __wbg_accountstoragedelta_free: (a: number, b: number) => void;
export const accountstoragedelta_isEmpty: (a: number) => number;
export const accountstoragedelta_values: (a: number) => [number, number];
export const __wbg_adviceinputs_free: (a: number, b: number) => void;
export const adviceinputs_stack: (a: number) => [number, number];
export const adviceinputs_mappedValues: (a: number, b: number) => [number, number];
export const __wbg_advicemap_free: (a: number, b: number) => void;
export const advicemap_new: () => number;
export const advicemap_insert: (a: number, b: number, c: number) => [number, number];
export const __wbg_rpodigest_free: (a: number, b: number) => void;
export const rpodigest_new: (a: number, b: number) => number;
export const rpodigest_toWord: (a: number) => number;
export const rpodigest_toHex: (a: number) => [number, number];
export const __wbg_transactionfilter_free: (a: number, b: number) => void;
export const transactionfilter_all: () => number;
export const transactionfilter_ids: (a: number, b: number) => number;
export const transactionfilter_uncommitted: () => number;
export const __wbg_transactionscriptinputpair_free: (a: number, b: number) => void;
export const transactionscriptinputpair_new: (a: number, b: number, c: number) => number;
export const transactionscriptinputpair_felts: (a: number) => [number, number];
export const __wbg_transactionscriptinputpairarray_free: (a: number, b: number) => void;
export const transactionscriptinputpairarray_new: (a: number, b: number) => number;
export const transactionscriptinputpairarray_push: (a: number, b: number) => void;
export const __wbg_word_free: (a: number, b: number) => void;
export const word_newFromU64s: (a: number, b: number) => number;
export const word_newFromFelts: (a: number, b: number) => number;
export const word_toHex: (a: number) => [number, number];
export const mockwebclient_syncState: (a: number) => any;
export const mockwebclient_getSyncHeight: (a: number) => any;
export const mockwebclient_getLatestEpochBlock: (a: number) => any;
export const transactionscriptinputpair_word: (a: number) => number;
export const __wbg_accountdelta_free: (a: number, b: number) => void;
export const accountdelta_isEmpty: (a: number) => number;
export const accountdelta_storage: (a: number) => number;
export const accountdelta_vault: (a: number) => number;
export const accountdelta_nonce: (a: number) => number;
export const __wbg_accountvaultdelta_free: (a: number, b: number) => void;
export const accountvaultdelta_isEmpty: (a: number) => number;
export const accountvaultdelta_fungible: (a: number) => number;
export const __wbg_executedtransaction_free: (a: number, b: number) => void;
export const executedtransaction_id: (a: number) => number;
export const executedtransaction_accountId: (a: number) => number;
export const executedtransaction_initialAccount: (a: number) => number;
export const executedtransaction_finalAccount: (a: number) => number;
export const executedtransaction_inputNotes: (a: number) => number;
export const executedtransaction_outputNotes: (a: number) => number;
export const executedtransaction_txArgs: (a: number) => number;
export const executedtransaction_blockHeader: (a: number) => number;
export const executedtransaction_accountDelta: (a: number) => number;
export const __wbg_inputnotes_free: (a: number, b: number) => void;
export const inputnotes_commitment: (a: number) => number;
export const inputnotes_numNotes: (a: number) => number;
export const inputnotes_isEmpty: (a: number) => number;
export const inputnotes_getNote: (a: number, b: number) => number;
export const inputnotes_notes: (a: number) => [number, number];
export const __wbg_library_free: (a: number, b: number) => void;
export const __wbg_transactionid_free: (a: number, b: number) => void;
export const transactionid_asElements: (a: number) => [number, number];
export const transactionid_asBytes: (a: number) => [number, number];
export const transactionid_toHex: (a: number) => [number, number];
export const __wbg_notedetailsandtag_free: (a: number, b: number) => void;
export const notedetailsandtag_new: (a: number, b: number) => number;
export const __wbg_notedetailsandtagarray_free: (a: number, b: number) => void;
export const notedetailsandtagarray_new: (a: number, b: number) => number;
export const notedetailsandtagarray_push: (a: number, b: number) => void;
export const transactionid_inner: (a: number) => number;
export const __wbg_accountstorage_free: (a: number, b: number) => void;
export const accountstorage_commitment: (a: number) => number;
export const accountstorage_getItem: (a: number, b: number) => number;
export const __wbg_blockheader_free: (a: number, b: number) => void;
export const blockheader_version: (a: number) => number;
export const blockheader_commitment: (a: number) => number;
export const blockheader_subCommitment: (a: number) => number;
export const blockheader_prevBlockCommitment: (a: number) => number;
export const blockheader_blockNum: (a: number) => number;
export const blockheader_chainCommitment: (a: number) => number;
export const blockheader_accountRoot: (a: number) => number;
export const blockheader_nullifierRoot: (a: number) => number;
export const blockheader_noteRoot: (a: number) => number;
export const blockheader_txCommitment: (a: number) => number;
export const blockheader_txKernelCommitment: (a: number) => number;
export const blockheader_proofCommitment: (a: number) => number;
export const blockheader_timestamp: (a: number) => number;
export const __wbg_noteexecutionmode_free: (a: number, b: number) => void;
export const noteexecutionmode_newLocal: () => number;
export const noteexecutionmode_newNetwork: () => number;
export const noteexecutionmode_toString: (a: number) => [number, number];
export const __wbg_notelocation_free: (a: number, b: number) => void;
export const notelocation_blockNum: (a: number) => number;
export const notelocation_nodeIndexInBlock: (a: number) => number;
export const __wbg_outputnotes_free: (a: number, b: number) => void;
export const outputnotes_numNotes: (a: number) => number;
export const outputnotes_isEmpty: (a: number) => number;
export const outputnotes_getNote: (a: number, b: number) => number;
export const outputnotes_notes: (a: number) => [number, number];
export const __wbg_transactionrecord_free: (a: number, b: number) => void;
export const transactionrecord_id: (a: number) => number;
export const transactionrecord_accountId: (a: number) => number;
export const transactionrecord_initAccountState: (a: number) => number;
export const transactionrecord_finalAccountState: (a: number) => number;
export const transactionrecord_inputNoteNullifiers: (a: number) => [number, number];
export const transactionrecord_outputNotes: (a: number) => number;
export const transactionrecord_blockNum: (a: number) => number;
export const transactionrecord_transactionStatus: (a: number) => number;
export const transactionrecord_serialize: (a: number) => any;
export const transactionrecord_deserialize: (a: any) => [number, number, number];
export const __wbg_transactionscript_free: (a: number, b: number) => void;
export const transactionscript_root: (a: number) => number;
export const transactionscript_compile: (a: number, b: number, c: number, d: number) => [number, number, number];
export const mockwebclient_getInputNotes: (a: number, b: number) => any;
export const mockwebclient_getInputNote: (a: number, b: number, c: number) => any;
export const mockwebclient_getOutputNotes: (a: number, b: number) => any;
export const mockwebclient_getOutputNote: (a: number, b: number, c: number) => any;
export const mockwebclient_compileNoteScript: (a: number, b: number, c: number) => [number, number, number];
export const mockwebclient_getConsumableNotes: (a: number, b: number) => any;
export const outputnotes_commitment: (a: number) => number;
export const __wbg_flattenedu8vec_free: (a: number, b: number) => void;
export const flattenedu8vec_data: (a: number) => [number, number];
export const flattenedu8vec_lengths: (a: number) => [number, number];
export const flattenedu8vec_num_inner_vecs: (a: number) => number;
export const __wbg_intounderlyingsink_free: (a: number, b: number) => void;
export const intounderlyingsink_write: (a: number, b: any) => any;
export const intounderlyingsink_close: (a: number) => any;
export const intounderlyingsink_abort: (a: number, b: any) => any;
export const __wbg_intounderlyingsource_free: (a: number, b: number) => void;
export const intounderlyingsource_pull: (a: number, b: any) => any;
export const intounderlyingsource_cancel: (a: number) => void;
export const __wbg_intounderlyingbytesource_free: (a: number, b: number) => void;
export const intounderlyingbytesource_type: (a: number) => number;
export const intounderlyingbytesource_autoAllocateChunkSize: (a: number) => number;
export const intounderlyingbytesource_start: (a: number, b: any) => void;
export const intounderlyingbytesource_pull: (a: number, b: any) => any;
export const intounderlyingbytesource_cancel: (a: number) => void;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_exn_store: (a: number) => void;
export const __externref_table_alloc: () => number;
export const __wbindgen_export_5: WebAssembly.Table;
export const __externref_drop_slice: (a: number, b: number) => void;
export const __wbindgen_export_7: WebAssembly.Table;
export const __externref_table_dealloc: (a: number) => void;
export const closure2267_externref_shim: (a: number, b: number, c: any) => void;
export const closure2289_externref_shim: (a: number, b: number, c: any, d: any) => void;
export const __wbindgen_start: () => void;
