import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
import "./App.css";

//components imported
import { Airdrop } from "./components/Airdrop";
import { WalletButtons } from "./components/WalletButtons";
import { Card } from "./components/Card";

function App() {
  // create own alchemy url
  return (
    <>
      <ConnectionProvider endpoint={"https://api.devenet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div className="app-container">
              <Card>
                <div>
                  <Airdrop />
                </div>
                <WalletButtons />
              </Card>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </>
  );
}

export default App;
