import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-indigo-950 via-purple-900 to-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="z-10 flex flex-col items-center gap-8 max-w-md w-full">
        <div className="animate-pulse bg-white/10 p-4 rounded-full">
          <Sparkles className="w-12 h-12 text-yellow-300" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 drop-shadow-lg">
          당신은 전생에<br />무엇이었을까요?
        </h1>

        <p className="text-purple-200/80 text-lg">
          얼굴 분석을 통해 당신의 전생을 확인해보세요.
        </p>

        <Link
          href="/scan"
          className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          시작하기
        </Link>
      </div>

      {/* Ambient background effects */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
    </main>
  );
}
