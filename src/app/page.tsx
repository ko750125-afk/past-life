"use client";

import Link from "next/link";
import { Sparkles, Ghost, History, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-[#030303] overflow-hidden relative">
      {/* Temporal Background Elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />

        {/* Rotating accent */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border-t border-purple-500/20 rounded-full"
        />
      </div>

      <div className="z-10 flex flex-col items-center max-w-lg w-full gap-16">
        {/* Time Machine Core */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "backOut" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-500/40 rounded-full blur-[60px] animate-pulse" />
          <div className="relative bg-black border-4 border-white/30 p-12 rounded-full shadow-[0_0_60px_rgba(168,85,247,0.4)] group">
            <Clock className="w-24 h-24 text-white group-hover:rotate-180 transition-transform duration-1000" />

            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)]" />
            </div>
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-white mb-4">
              나의 전생 찾기
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/70 text-lg md:text-xl max-w-sm mx-auto leading-relaxed font-medium word-keep-all"
          >
            당신의 얼굴에 새겨진 시간의 흔적을 추적하여<br />
            수백 년 전 잊혀진 과거로 시간 여행을 떠납니다.
          </motion.p>
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, type: "spring" }}
          className="w-full"
        >
          <Link
            href="/scan"
            className="w-full py-10 px-8 bg-yellow-400 text-black hover:bg-yellow-300 rounded-[2.5rem] font-black text-4xl md:text-5xl shadow-[0_20px_80px_rgba(250,204,21,0.3)] transition-all duration-300 flex flex-col items-center justify-center gap-4 active:scale-95 group relative overflow-hidden border-b-8 border-yellow-600 active:border-b-0 active:translate-y-2"
          >
            <Zap className="w-12 h-12 fill-black mb-2 animate-bounce" />
            타임머신 가동
          </Link>
        </motion.div>

        {/* Status Items */}
        <div className="flex justify-between w-full pt-8 border-t border-white/10 opacity-60">
          {[
            { icon: Ghost, label: "IDENTITY" },
            { icon: History, label: "ERA" },
            { icon: Sparkles, label: "STATS" }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <f.icon className="w-5 h-5" />
              <span className="text-[10px] font-bold tracking-[0.2em]">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/20 rounded-full blur-[120px]" />
    </main>
  );
}
