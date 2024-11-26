import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Airdrop() {
  // the useWallet hook provides the wallet variable inside the Airdrop Component because i wrapped the airdrop component inside the wallet provider

  const wallet = useWallet();
  const { connection } = useConnection();

  // async function sendAirdropToUser() {
  //   const response = await connection.requestAirdrop(
  //     wallet.publicKey,
  //     1000000000
  //   );
  //   console.log(response);
  //   alert("airdropped sol");
  // }

  async function RequestAirdrop() {
    try {
      const amount = document.getElementById("amount").value;
      await connection.requestAirdrop(
        wallet.publicKey,
        amount * LAMPORTS_PER_SOL
      );
      alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
    } catch (error) {
      // Check if error contains the correct message
      if (error && error.error && error.error.message) {
        const errorMessage = error.error.message;
        console.log("Error:", errorMessage); // Log the actual message
        alert(errorMessage); // Alert the specific message
      } else {
        console.log("Unexpected error:", error);
        alert("Unexpected error occurred.");
      }
    }
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <input
          className="px-8 py-4 w-[400px] rounded-lg"
          type="number"
          id="amount"
          placeholder="Enter amount"
        />

        <button
          onClick={RequestAirdrop}
          className="px-8 py-4 bg-black hover:bg-slate-900 cursor-pointer text-white rounded-lg w-[300px] ml-[50px]"
        >
          {" "}
          Send Airdrop{" "}
        </button>
      </div>
    </>
  );
}
