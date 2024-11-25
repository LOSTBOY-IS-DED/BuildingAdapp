import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export function WalletButtons() {
  return (
    <div className="flex gap-4 mt-[20px]">
      <WalletMultiButton />
      <WalletDisconnectButton />
    </div>
  );
}
