import { motion } from "framer-motion";

export default function StrategyCard({ strategy, isSelected, onSelect }: { 
  strategy: string; 
  isSelected: boolean; 
  onSelect: (s: string) => void; 
}) {
  return (
    <motion.div
      className={`p-6 rounded-xl shadow-md text-center cursor-pointer transition-all
        ${isSelected ? "bg-blue-500 text-white scale-105" : "bg-white hover:bg-gray-100"}`}
      onClick={() => onSelect(strategy)}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-semibold">{strategy}</h3>
    </motion.div>
  );
}
