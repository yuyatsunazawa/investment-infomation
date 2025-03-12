"use client";

import { useEffect, useState } from "react";
import fetchMarketData from "../lib/fetchMarketData";

export default function MarketData() {
  const [marketData, setMarketData] = useState<any>(null);

  useEffect(() => {
    fetchMarketData().then(setMarketData);
  }, []);

  if (!marketData) return <p>データを取得中...</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-lg shadow-md">
      {marketData.map((item: any) => (
        <div key={item.name} className="text-center">
          <strong>{item.name}</strong>
          <p>{item.value} ({item.change})</p>
        </div>
      ))}
    </div>
  );
}

