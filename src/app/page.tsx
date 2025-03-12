
import MarketData from "../components/MarketData";
import StrategyList from "../components/StrategyList";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-xl font-bold">投資戦略 UI</h1>
      <MarketData />
      <StrategyList />
    </main>
  );
}
