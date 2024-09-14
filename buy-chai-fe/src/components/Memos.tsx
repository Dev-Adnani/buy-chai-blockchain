import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MemoCard from './MemoCard';
import { AnimatePresence } from 'framer-motion';

interface MemosProps {
  contract: any | null;
}

interface Memo {
  message: string;
  name: string;
  timestamp: number;
  amount: number;
  from: string;
}

export default function Memos({ contract }: MemosProps) {
  const [memos, setMemos] = useState<Memo[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchMemos = async () => {
      if (!contract) return;
      try {
        const memos = await contract.getMemos();
        const parsedMemos = memos.map((memo: any) => ({
          message: memo.message,
          name: memo.name,
          timestamp: memo.timestamp.toNumber ? memo.timestamp.toNumber() : Number(memo.timestamp),
          amount: memo.amount.toNumber ? memo.amount.toNumber() : Number(memo.amount),
          from: memo.from,
        }));
        setMemos(parsedMemos);
      } catch (error) {
        console.error("Error fetching memos:", error);
        toast.error("Error fetching memos. Please try again.");
      }
    };

    fetchMemos();
  }, [contract]);

  useEffect(() => {
    if (memos.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % memos.length);
      }, 5000); // Change card every 5 seconds

      return () => clearInterval(interval);
    }
  }, [memos.length]);

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">People who bought chai</h1>
      <div className="relative w-full max-w-3xl">
        <AnimatePresence>
          {memos.length > 0 && (
            <MemoCard
              key={currentIndex}
              memo={memos[currentIndex]}
            />
          )}
        </AnimatePresence>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} />
    </div>
  );
}
