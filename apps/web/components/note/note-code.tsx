import Editor from "@monaco-editor/react";

const P2ID_SCRIPT = `use.miden::account
use.miden::note
use.miden::contracts::wallets::basic->wallet

# ERRORS
# =================================================================================================

const.ERR_P2ID_WRONG_NUMBER_OF_INPUTS="P2ID script expects exactly 2 note inputs"

const.ERR_P2ID_TARGET_ACCT_MISMATCH="P2ID's target account address and transaction address do not match"

#! Helper procedure to add all assets of a note to an account.
#!
#! Inputs:  []
#! Outputs: []
proc.add_note_assets_to_account
    push.0 exec.note::get_assets
    # => [num_of_assets, 0 = ptr, ...]

    # compute the pointer at which we should stop iterating
    mul.4 dup.1 add
    # => [end_ptr, ptr, ...]

    # pad the stack and move the pointer to the top
    padw movup.5
    # => [ptr, 0, 0, 0, 0, end_ptr, ...]

    # compute the loop latch
    dup dup.6 neq
    # => [latch, ptr, 0, 0, 0, 0, end_ptr, ...]

    while.true
        # => [ptr, 0, 0, 0, 0, end_ptr, ...]

        # save the pointer so that we can use it later
        dup movdn.5
        # => [ptr, 0, 0, 0, 0, ptr, end_ptr, ...]

        # load the asset
        mem_loadw
        # => [ASSET, ptr, end_ptr, ...]

        # pad the stack before call
        padw swapw padw padw swapdw
        # => [ASSET, pad(12), ptr, end_ptr, ...]

        # add asset to the account
        call.wallet::receive_asset
        # => [pad(16), ptr, end_ptr, ...]

        # clean the stack after call
        dropw dropw dropw
        # => [0, 0, 0, 0, ptr, end_ptr, ...]

        # increment the pointer and compare it to the end_ptr
        movup.4 add.4 dup dup.6 neq
        # => [latch, ptr+4, ASSET, end_ptr, ...]
    end

    # clear the stack
    drop dropw drop
end

#! Pay-to-ID script: adds all assets from the note to the account, assuming ID of the account
#! matches target account ID specified by the note inputs.
#!
#! Requires that the account exposes:
#! - miden::contracts::wallets::basic::receive_asset procedure.
#!
#! Inputs:  []
#! Outputs: []
#!
#! Note inputs are assumed to be as follows:
#! - target_account_id is the ID of the account for which the note is intended.
#!
#! Panics if:
#! - Account does not expose miden::contracts::wallets::basic::receive_asset procedure.
#! - Account ID of executing account is not equal to the Account ID specified via note inputs.
#! - The same non-fungible asset already exists in the account.
#! - Adding a fungible asset would result in amount overflow, i.e., the total amount would be
#!   greater than 2^63.
begin
    # store the note inputs to memory starting at address 0
    push.0 exec.note::get_inputs
    # => [num_inputs, inputs_ptr]

    # make sure the number of inputs is 2
    eq.2 assert.err=ERR_P2ID_WRONG_NUMBER_OF_INPUTS
    # => [inputs_ptr]

    # read the target account ID from the note inputs
    padw movup.4 mem_loadw drop drop
    # => [target_account_id_prefix, target_account_id_suffix]

    exec.account::get_id
    # => [account_id_prefix, account_id_suffix, target_account_id_prefix, target_account_id_suffix, ...]

    # ensure account_id = target_account_id, fails otherwise
    exec.account::is_id_equal assert.err=ERR_P2ID_TARGET_ACCT_MISMATCH
    # => []

    exec.add_note_assets_to_account
    # => []
end
`;

const NoteCode = () => {
  return (
    <div className="h-full relative">
      <Editor
        height="85vh"
        onMount={(editor, monaco) => {
          monaco.editor.defineTheme("miden", {
            base: "vs-dark",
            inherit: true,
            rules: [],
            colors: {
              "editor.background": "#040113",
              "editor.foreground": "#4E8CC0",
              "editorLineNumber.foreground": "#4E8CC0",
              "editorLineNumber.activeForeground": "#83afd4",
            },
          });
          monaco.editor.setTheme("miden");
          // setTimeout(() => editor.layout(), 0);
        }}
        options={{
          overviewRulerLanes: 0,
          minimap: { enabled: false },
          wordBreak: "keepAll",
          wordWrap: "on",
          smoothScrolling: true,
          /* scrollbar: {
            verticalSliderSize: 5,
            verticalScrollbarSize: 5,
          }, */
          theme: "miden",
          readOnly: true,
          scrollBeyondLastLine: false,
        }}
        defaultLanguage="javascript"
        defaultValue={P2ID_SCRIPT}
      />
    </div>
  );
};

export default NoteCode;
