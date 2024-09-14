import { Contract, ethers } from 'ethers';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';       

// Props
interface BuyProps {
  contract: Contract | null;
  account: string;
}

export default function Buy({ contract, account }: BuyProps) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [amount, setAmount] = useState('');  // Input for ether amount
  const [loading, setLoading] = useState(false);

  const buyChai = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (!name || !message || !amount) {
      toast.error("Please fill out all fields, including the amount!");
      return;
    }

    try {
      setLoading(true);
      
      // Parse user-inputted Ether amount
      const ethAmount = ethers.parseEther(amount);
      
      // Call contract's buyChai method with name, message, and amount
      const transaction = await contract?.buyChai(name, message, { value: ethAmount });
      await transaction.wait(); // Wait for the transaction to complete

      setLoading(false);
      toast.success("Chai bought successfully!");
    } catch (error: any) {
      console.error("Error buying chai:", error);
      setLoading(false);

      if (error?.code === 'INSUFFICIENT_FUNDS') {
        toast.error("Insufficient funds. Please check your balance and try again.");
      } else if (error?.code === 'ACTION_REJECTED') {
        toast.error("Transaction rejected. Please try again.");
      } else if (error?.reason) {
        toast.error(`Transaction failed: ${error.reason}`);
      } else if (error?.data?.message) {
        toast.error(`Error: ${error.data.message}`);
      } else {
        toast.error("Error buying chai. Please try again.");
      }
    }
  };

  return (
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Buy Chai</h1>
        <p className="text-center text-gray-600 mb-4">Account: {account}</p>
        <form onSubmit={buyChai} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 mb-2">Name</label>
            <input
              id="name"
              type="text"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 mb-2">Message</label>
            <input
              id="message"
              type="text"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="amount" className="text-gray-700 mb-2">Amount (in Ether)</label>
            <input
              id="amount"
              type="text"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              placeholder="Enter amount (e.g. 0.1)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 mt-4 rounded-lg text-white font-bold transition-all 
              ${loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-600 hover:bg-gray-700'}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Buy Chai'}
          </button>
        </form>
        <ToastContainer />
      </div>
  );
}
