import { type Dispatch, type SetStateAction } from "react";
import {
  type CreateTransactionDialogStep,
  type TransactionType,
} from "@/lib/types";
import { Label } from "@workspace/ui/components/label";
import { type ConsumableNoteRecord } from "@workspace/mock-web-client";
import { mockWebClient } from "@/lib/mock-web-client";
import SelectAccountDropdownMenu from "@/components/transactions/select-account-dropdown-menu";
import SelectTransactionTypeDropdownMenu from "@/components/transactions/select-transaction-type-dropdown-menu";
import useAccounts from "@/hooks/use-accounts";
// import useTransactions from "@/hooks/use-transactions";

const CreateTransactionDialogSelectForm = ({
  executingAccountId,
  setExecutingAccountId,
  transactionType,
  setTransactionType,
  setLoading,
  setConsumableNotes,
  setStep,
}: {
  executingAccountId: string;
  setExecutingAccountId: Dispatch<SetStateAction<string>>;
  transactionType: TransactionType;
  setTransactionType: Dispatch<SetStateAction<TransactionType>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setConsumableNotes: Dispatch<SetStateAction<ConsumableNoteRecord[]>>;
  setStep: Dispatch<SetStateAction<CreateTransactionDialogStep>>;
}) => {
  const { accounts } = useAccounts();
  const executingAccount = accounts.find(({ id }) => id === executingAccountId);
  // const { createTransactionDialogConsumableNotes } = useTransactions();
  return (
    <form
      id="create-transaction-select-form"
      onSubmit={async (event) => {
        event.preventDefault();
        if (
          transactionType === "consume" &&
          executingAccount /* &&
          createTransactionDialogConsumableNotes.length === 0*/
        ) {
          setLoading(true);
          const client = await mockWebClient();
          const consumableNotes = await client.getConsumableNotes(
            executingAccount.account.id()
          );
          setLoading(false);
          setConsumableNotes(consumableNotes);
        }
        setStep("configure");
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-3 col-span-2">
          <Label>Executing account</Label>
          <SelectAccountDropdownMenu
            value={executingAccountId}
            onValueChange={(value) => {
              setExecutingAccountId(value);
              const account = accounts.find(({ id }) => id === value);
              setTransactionType(
                account?.account.isFaucet() ? "mint" : "consume"
              );
            }}
          />
        </div>
        <div className="grid gap-3 col-span-2">
          <Label>Transaction type</Label>
          <SelectTransactionTypeDropdownMenu
            value={transactionType}
            onValueChange={setTransactionType}
            selectTypes={
              executingAccount?.account.isFaucet()
                ? ["mint", "consume"]
                : ["consume", "send"]
            }
          />
        </div>
      </div>
    </form>
  );
};

export default CreateTransactionDialogSelectForm;
