import { motion } from 'framer-motion';

interface MemoCardProps {
  memo: {
    message: string;
    name: string;
    timestamp: number;
    amount: number;
    from: string;
  };
}

const MemoCard = ({ memo }: MemoCardProps) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-6 mx-2 w-full max-w-md"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <h2 className="text-2xl font-semibold mb-3 text-indigo-600">{memo.name}</h2>
      <p className="text-gray-800 mb-2">{memo.message}</p>
      <p className="text-green-600 mb-2">Amount: {memo.amount} ETH</p>
      <p className="text-gray-600 mb-2">From: {memo.from}</p>
      <p className="text-gray-500 text-sm">{new Date(memo.timestamp * 1000).toLocaleString()}</p>
    </motion.div>
  );
};

export default MemoCard;
