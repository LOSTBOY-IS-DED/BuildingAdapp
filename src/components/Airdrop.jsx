import { useConnection, useWallet } from "@solana/wallet-adapter-react";

export function Airdrop() {
  // the useWallet hook provides the wallet variable inside the Airdrop Component because i wrapped the airdrop component inside the wallet provider

  const wallet = useWallet();
  const { connection } = useConnection();

  function sendAirdropToUser() {
    connection.requestAirdrop(wallet.publicKey, 10);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <input
          className="px-10 py-5 border border-black-600 rounded-lg w-[400px]"
          type="text"
          placeholder="Amount"
        />
        <button
          onClick={sendAirdropToUser}
          className="px-8 py-4 bg-black hover:bg-slate-900 cursor-pointer text-white rounded-lg w-[300px] ml-[50px]"
        >
          {" "}
          Send Airdrop{" "}
        </button>
      </div>
    </>
  );
}
