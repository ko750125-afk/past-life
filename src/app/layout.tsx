import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Past Life Analyzer | 시간을 거슬러 당신을 만나세요",
  description: "AI 얼굴 분석 기술로 당신의 잊혀진 전생을 밝혀내는 신비로운 경험을 시작해보세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
