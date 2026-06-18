import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 雲端專題介紹生成器 - 龔孟謙",
  description:
    "國立勤益科技大學智慧自動化工程系期末作業，使用 Next.js、TypeScript 與 Tailwind CSS 製作的 AI 雲端專題介紹生成器。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
