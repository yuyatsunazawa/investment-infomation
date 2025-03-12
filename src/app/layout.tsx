
import "./styles.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="p-4 bg-gray-50">{children}</body>
    </html>
  );
}
