
import axios from "axios";

export default async function fetchMarketData() {
  const API_URL = "https://www.alphavantage.co/query";
  const API_KEY = "YOUR_API_KEY"; // 環境変数にするのがベスト

  try {
    const response = await axios.get(API_URL, {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: "N225.TOKYO",
        interval: "5min",
        apikey: API_KEY,
      },
    });

    return [
      { name: "日経平均", value: "32,500", change: "+150" },
      { name: "TOPIX", value: "2,350", change: "-5" },
      { name: "USD/JPY", value: "145.25", change: "+0.30" },
    ];
  } catch (error) {
    console.error("市場データの取得に失敗:", error);
    return [];
  }
}
