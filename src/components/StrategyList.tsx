"use client";

import { useState } from "react";
import StrategyCard from "./StrategyCard";

const strategies = [
  "当日5%下落した銘柄を買い",
  "ゴールデンクロスの銘柄を買い",
  "RSIが10以下の銘柄を買い",
];

export default function StrategyList() {
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">戦略を選択</h2>
      <div className="grid grid-cols-3 gap-4">
        {strategies.map((strategy) => (
          <StrategyCard 
            key={strategy} 
            strategy={strategy} 
            isSelected={strategy === selectedStrategy}
            onSelect={setSelectedStrategy} 
          />
        ))}
      </div>
      {selectedStrategy && (
        <p className="mt-4 text-center text-blue-600 font-semibold">
          選択した戦略: {selectedStrategy}
        </p>
      )}
    </div>
  );
}
