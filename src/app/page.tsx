"use client";

import Link from "next/link";
import { Sparkles, Camera, Ghost, History, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center bg-[#030303] overflow-hidden relative">
      {/* Temporal Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />

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
          <div className="absolute inset-0 bg-purple-500/30 rounded-full blur-[60px] animate-pulse" />
          <div className="relative bg-black border-4 border-white/20 p-10 rounded-full shadow-[0_0_50px_rgba(168,85,247,0.3)] group">
            <Clock className="w-20 h-20 text-white group-hover:rotate-180 transition-transform duration-1000" />

            {/* Orbiting particles */}
            <div className="absolute inset-0 animate-spin-slow">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full shadow-[0_0_15px_rgba(168,85,247,1)]" />
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
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
              <span className="block text-purple-400 text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-4 drop-shadow-[0_0_10px_purple]">
                Chrono Analyzer V2.0
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-purple-400">
                나의 전생 찾기
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-white/50 text-base md:text-lg max-w-sm mx-auto leading-relaxed font-light word-keep-all"
          >
            당신의 얼굴에 새겨진 시간의 흔적을 추적하여<br />
            수백 년 전 잊혀진 과거로 시간 여행을 떠납니다.
          </motion.p>
        </div>

        {/* Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="w-full space-y-6"
        >
          <Link
            href="/scan"
            className="w-full py-6 px-8 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 bg-[length:200%_auto] hover:bg-right rounded-2xl font-black text-2xl shadow-2xl text-white transition-all duration-500 flex items-center justify-center gap-4 active:scale-95 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 group-hover:translate-x-full transition-transform duration-500 skew-x-12 -translate-x-full" />
            <Zap className="w-6 h-6 fill-white" />
            타임머신 가동
          </Link>

          <div className="flex justify-center gap-4">
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40 font-mono">ENCRYPTION: AES-256</div>
            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/40 font-mono">STATUS: READY</div>
          </div>
        </motion.div>

        {/* Status Items */}
        <div className="flex justify-between w-full pt-8 border-t border-white/10 opacity-40">
          {[
            { icon: Ghost, label: "IDENTITY" },
            { icon: History, label: "ERA" },
            { icon: Sparkles, label: "STATS" }
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <f.icon className="w-4 h-4" />
              <span className="text-[9px] font-mono tracking-widest">{f.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px]" />
    </main>
  );
}
