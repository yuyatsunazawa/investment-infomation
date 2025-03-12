
export default function StrategyCard({ strategy, onSelect }: { strategy: string; onSelect: (s: string) => void }) {
  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md text-center cursor-pointer hover:bg-gray-100"
      onClick={() => onSelect(strategy)}
    >
      {strategy}
    </div>
  );
}
