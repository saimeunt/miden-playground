"use client";
import { useIsClient } from "usehooks-ts";
import useAccounts from "@/hooks/use-accounts";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import AccountInformation from "@/components/account/account-information";
import AccountCode from "@/components/account/account-code";
import CreateTransactionDialog from "@/components/transactions/create-transaction-dialog";
import CreateTransactionDropdownMenu from "@/components/account/create-transaction-dropdown-menu";

const Account = ({ address }: { address: string }) => {
  const isClient = useIsClient();
  const { accounts } = useAccounts();
  const account = accounts.find((account) => account.address === address);
  if (!isClient || !account) {
    return null;
  }
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <Tabs defaultValue="information">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="information">Information</TabsTrigger>
            {/*<TabsTrigger value="code">Code</TabsTrigger>*/}
          </TabsList>
          <CreateTransactionDropdownMenu account={account} />
        </div>
        <TabsContent value="information">
          <AccountInformation account={account} />
        </TabsContent>
        <TabsContent value="code">
          <AccountCode />
        </TabsContent>
      </Tabs>
      <CreateTransactionDialog />
    </div>
  );
};

export default Account;
