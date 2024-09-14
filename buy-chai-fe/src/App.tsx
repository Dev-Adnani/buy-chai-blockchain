import { BrowserProvider, JsonRpcSigner, Contract } from "ethers";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { abi } from "./contractJson/Chai.json";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [, setProvider] = useState<BrowserProvider | null>(null);
  const [, setSigner] = useState<JsonRpcSigner | null>(null);
  const [contract, setContract] = useState<Contract | null>(null); 
  const [account, setAccount] = useState("Not Connected");

  useEffect(() => {
    const initializeEthereum = async () => {
      const contractAddress = "0x5d8B81F43e563104Cc011fa015854D6DEA38Ab14";
      const contractABI = abi;

      try {
        const { ethereum } = window as any;

        if (!ethereum) {
          toast.error("Please install Wallet!", { toastId: 'installWallet' });
          return;
        }

        // Request Wallet accounts
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]); // Initially set the first account as selected
        } else {
          toast.error("No accounts found", { toastId: 'noAccounts' });
          return;
        }

        const provider = new ethers.BrowserProvider(ethereum);
        setProvider(provider);
        const signer = await provider.getSigner(accounts[0]); // Pass the first account initially
        setSigner(signer);

        // Create contract instance
        const mContract = new Contract(contractAddress, contractABI, signer); // Explicitly typing it as Contract
        setContract(mContract); // Now the contract should match the type

        // Listen for account changes in Wallet
        ethereum.on("accountsChanged", async (newAccounts: string[]) => {
          if (newAccounts.length > 0) {
            setAccount(newAccounts[0]); 
            const newSigner = await provider.getSigner(newAccounts[0]);
            setSigner(newSigner);
            const updatedContract = mContract.connect(newSigner) as Contract;
            setContract(updatedContract);
          } else {
            setAccount("Not Connected");
            setSigner(null); 
            setContract(null);
            toast.warning("Disconnected from account", { toastId: 'accountDisconnected' });
          }
          toast.warning("Account changed", { toastId: 'accountChanged' });
        });

        console.log("Contract:", mContract);
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred", { toastId: 'genericError' });
      }
    };

    initializeEthereum();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full bg-gradient-to-r from-green-300 via-cyan-400 to-cyan-500 p-4">
      <div className="my-8" />
      <Buy account={account} contract={contract}/>
      <div className="my-2" />
      <Memos contract={contract} />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} />
    </div>
  );
}
