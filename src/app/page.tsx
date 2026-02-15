"use client";

import Link from "next/link";
import { Sparkles, Camera, Ghost, History } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-[#050505] overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none" />
      </div>

      <div className="z-10 flex flex-col items-center max-w-lg w-full gap-12">
        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative bg-white/5 border border-white/10 p-8 rounded-full backdrop-blur-sm shadow-2xl">
            <History className="w-16 h-16 text-purple-300" />
          </div>
          {/* Floating Orbs around the center */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-4 -right-2 p-3 bg-indigo-500/20 rounded-full border border-indigo-500/30 backdrop-blur-md"
          >
            <Sparkles className="w-6 h-6 text-indigo-300" />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              <span className="block text-white/60 text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-4">
                Past Life Finder
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-purple-100 to-purple-300 drop-shadow-sm">
                시간을 거슬러<br />당신을 찾으세요
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-purple-200/60 text-base md:text-lg max-w-sm mx-auto leading-relaxed font-light"
          >
            얼굴의 미세한 특징을 분석하여 잊혀진 과거의<br />
            시간 속에 잠든 전생의 신비를 밝혀냅니다.
          </motion.p>
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full space-y-4"
        >
          <Link
            href="/scan"
            className="w-full py-5 px-8 bg-white text-black rounded-2xl font-bold text-xl shadow-2xl hover:bg-purple-50 transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 group"
          >
            <Camera className="w-6 h-6 group-hover:scale-110 transition-transform" />
            분석 시작하기
          </Link>

          <p className="text-white/20 text-xs font-medium tracking-widest uppercase py-2">
            100% Deterministic AI Analysis
          </p>
        </motion.div>

        {/* Features Row */}
        <div className="grid grid-cols-3 gap-8 pt-4 w-full border-t border-white/5">
          {[
            { icon: Ghost, label: "전생의 직업" },
            { icon: History, label: "활동 시대" },
            { icon: Sparkles, label: "전생 능력치" }
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + (i * 0.1) }}
              className="flex flex-col items-center gap-2"
            >
              <f.icon className="w-5 h-5 text-purple-400 opacity-50" />
              <span className="text-[10px] text-white/30 font-bold uppercase tracking-tighter">{f.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle light lines/glairs */}
      <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-10 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />
    </main>
  );
}
