import { partition } from "lodash";
import { AccountStorageMode, NetworkId } from "@workspace/mock-web-client";
import { mockWebClient } from "@/lib/mock-web-client";
import useGlobalContext from "@/components/global-context/hook";

const useAccounts = () => {
  const {
    networkId,
    createWalletDialogOpen,
    createFaucetDialogOpen,
    accounts,
    dispatch,
  } = useGlobalContext();
  const [faucets, wallets] = partition(accounts, (account) =>
    account.account.isFaucet()
  );
  const newWallet = async ({
    name,
    storageMode,
  }: {
    name: string;
    storageMode: AccountStorageMode;
  }) => {
    const client = await mockWebClient();
    const wallet = await client.newWallet(storageMode, true);
    const syncSummary = await client.syncState();
    // const blockHeader = await client.getLatestEpochBlock();
    // console.log("commitment:", blockHeader.commitment().toHex());
    // console.log("chainCommitment:", blockHeader.chainCommitment().toHex());
    const account = {
      account: wallet,
      name,
      id: wallet.id().toString(),
      address: wallet.id().toBech32(NetworkId.tryFromStr(networkId)),
      consumableNoteIds: [],
      updatedAt: syncSummary.blockNum(),
    };
    dispatch({
      type: "NEW_ACCOUNT",
      payload: { account, syncSummary },
    });
    return account;
  };
  const newFaucet = async ({
    name,
    storageMode,
    tokenSymbol,
    decimals,
    maxSupply,
  }: {
    name: string;
    storageMode: AccountStorageMode;
    tokenSymbol: string;
    decimals: number;
    maxSupply: bigint;
  }) => {
    const client = await mockWebClient();
    const faucet = await client.newFaucet(
      storageMode,
      false,
      tokenSymbol,
      decimals,
      maxSupply
    );
    const syncSummary = await client.syncState();
    const blockHeader = await client.getLatestEpochBlock();
    // console.log("commitment:", blockHeader.commitment().toHex());
    // console.log("chainCommitment:", blockHeader.chainCommitment().toHex());
    const account = {
      account: faucet,
      name,
      id: faucet.id().toString(),
      address: faucet.id().toBech32(NetworkId.tryFromStr(networkId)),
      consumableNoteIds: [],
      tokenSymbol,
      updatedAt: syncSummary.blockNum(),
    };
    dispatch({
      type: "NEW_ACCOUNT",
      payload: { account, syncSummary },
    });
    return account;
  };
  const openCreateWalletDialog = () =>
    dispatch({
      type: "OPEN_CREATE_WALLET_DIALOG",
    });
  const closeCreateWalletDialog = () =>
    dispatch({
      type: "CLOSE_CREATE_WALLET_DIALOG",
    });
  const openCreateFaucetDialog = () =>
    dispatch({
      type: "OPEN_CREATE_FAUCET_DIALOG",
    });
  const closeCreateFaucetDialog = () =>
    dispatch({
      type: "CLOSE_CREATE_FAUCET_DIALOG",
    });
  return {
    createWalletDialogOpen,
    createFaucetDialogOpen,
    accounts,
    wallets,
    faucets,
    newWallet,
    newFaucet,
    openCreateFaucetDialog,
    closeCreateFaucetDialog,
    openCreateWalletDialog,
    closeCreateWalletDialog,
  };
};

export default useAccounts;
