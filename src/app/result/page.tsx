"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { Share2, RotateCcw, Sparkles, PawPrint, User, Zap, Crown, Eye, Heart, Anchor, Star, Clock, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { generateSessionVariations, SessionResult } from "@/lib/past-life";
import ResultCard from "./ResultCard";
import { motion } from "framer-motion";

// Helper to get emoji for entity
const getEntityEmoji = (name: string) => {
    const emojiMap: Record<string, string> = {
        // Animals
        "호랑이": "🐯", "곰": "🐻", "독수리": "🦅", "거북이": "🐢", "여우": "🦊",
        "늑대": "🐺", "사슴": "🦌", "올빼미": "🦉", "고양이": "🐱", "강아지": "🐶",
        "토끼": "🐰", "다람쥐": "🐿️", "판다": "🐼", "해태": "🦁", "용": "🐲",
        // Human Jobs
        "왕족": "👑", "장군": "⚔️", "철학자": "📜", "예술가": "🎨", "상인": "💰",
        "농부": "👩‍🌾", "의사": "🩺", "학자": "📚", "대장장이": "⚒️", "탐험가": "🧭",
        "시인": "🖋️", "건축가": "🏛️", "요리사": "👨‍🍳", "무녀": "🔮", "어부": "🎣",
        "도공": "🏺", "궁수": "🏹", "악사": "🎵", "승려": "🙏", "역관": "🗣️",
        "화원": "🖌️", "재상": "💂", "천문학자": "🔭", "서예가": "🖌️", "사냥꾼": "🏹",
        "목수": "🔨", "약제사": "🌿", "주막 주인": "🍶", "뱃사공": "🛶", "광대": "🤡"
    };

    for (const [key, val] of Object.entries(emojiMap)) {
        if (name.includes(key)) return val;
    }
    return "✨";
};

// Helper to get stat icon/color
const getStatConfig = (key: string) => {
    switch (key) {
        case 'appearance': return { icon: Sparkles, label: '외모', color: 'text-pink-400' };
        case 'personality': return { icon: Heart, label: '성격', color: 'text-orange-400' };
        case 'money': return { icon: Crown, label: '돈', color: 'text-yellow-400' };
        case 'stamina': return { icon: Zap, label: '체력', color: 'text-red-400' };
        case 'lifespan': return { icon: Clock, label: '수명', color: 'text-blue-400' };
        case 'descendants': return { icon: User, label: '후손', color: 'text-purple-400' };
        default: return { icon: Star, label: key, color: 'text-white' };
    }
};

const RadarChart = ({ stats, isHuman }: { stats: any, isHuman: boolean }) => {
    const size = 200;
    const center = size / 2;
    const radius = 80;
    const keys = ['appearance', 'personality', 'money', 'stamina', 'lifespan', 'descendants'];

    // Calculate points
    const points = keys.map((key, i) => {
        const val = stats[key] || 0;
        const angle = (Math.PI * 2 * i) / keys.length - Math.PI / 2;
        const r = (val / 100) * radius;
        const x = center + r * Math.cos(angle);
        const y = center + r * Math.sin(angle);
        return `${x},${y}`;
    }).join(" ");

    // Background webs
    const webs = [1, 0.75, 0.5, 0.25].map(scale => {
        return keys.map((_, i) => {
            const angle = (Math.PI * 2 * i) / keys.length - Math.PI / 2;
            const r = radius * scale;
            const x = center + r * Math.cos(angle);
            const y = center + r * Math.sin(angle);
            return `${x},${y}`;
        }).join(" ");
    });

    return (
        <div className="flex justify-center my-4">
            <svg width={size} height={size} className="overflow-visible">
                {/* Webs */}
                {webs.map((points, i) => (
                    <polygon key={i} points={points} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                ))}
                {/* Axis lines */}
                {keys.map((_, i) => {
                    const angle = (Math.PI * 2 * i) / keys.length - Math.PI / 2;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    return <line key={i} x1={center} y1={center} x2={x} y2={y} stroke="rgba(255,255,255,0.1)" />;
                })}
                {/* Data */}
                <polygon
                    points={points}
                    fill={isHuman ? "rgba(168, 85, 247, 0.4)" : "rgba(34, 197, 94, 0.4)"}
                    stroke={isHuman ? "#a855f7" : "#22c55e"}
                    strokeWidth="2"
                />
                {/* Labels */}
                {keys.map((key, i) => {
                    const { label } = getStatConfig(key);
                    const angle = (Math.PI * 2 * i) / keys.length - Math.PI / 2;
                    const x = center + (radius + 20) * Math.cos(angle);
                    const y = center + (radius + 15) * Math.sin(angle);
                    return (
                        <text
                            key={i}
                            x={x}
                            y={y}
                            textAnchor="middle"
                            alignmentBaseline="middle"
                            fill="white"
                            fontSize="10"
                            className="drop-shadow-md font-bold"
                        >
                            {label}
                        </text>
                    );
                })}
            </svg>
        </div>
    );
};

const Timeline = ({ birth, death, era }: { birth: number, death: number, era: string }) => {
    return (
        <div className="relative pt-6 pb-2 px-2">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-y-1/2" />

            <div className="flex justify-between items-center relative">
                {/* Birth */}
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 mb-1">출생</span>
                    <div className="w-3 h-3 rounded-full bg-white relative z-10 shadow-[0_0_10px_white]" />
                    <span className="text-xs font-mono mt-1 text-white">{birth < 0 ? `기원전 ${Math.abs(birth)}` : birth}</span>
                </div>

                {/* Era Label Center */}
                <div className="bg-black/80 px-3 py-1 rounded-full border border-white/10 text-xs text-purple-200 z-10">
                    {era}
                </div>

                {/* Death */}
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 mb-1">사망</span>
                    <div className="w-3 h-3 rounded-full bg-gray-500 relative z-10" />
                    <span className="text-xs font-mono mt-1 text-gray-300">{death < 0 ? `기원전 ${Math.abs(death)}` : death}</span>
                </div>
            </div>
        </div>
    );
};

function ResultContent() {
    const searchParams = useSearchParams();
    const [result, setResult] = useState<SessionResult | null>(null);

    useEffect(() => {
        const seedParam = searchParams.get("seed");
        if (!seedParam) return;

        const seed = parseInt(seedParam, 10);
        if (isNaN(seed)) return;

        // Fixed session for consistent result per refresh if needed, or simple random
        const sessionId = "past-life-session-123";
        const sessionResult = generateSessionVariations(seed, sessionId);
        setResult(sessionResult);
    }, [searchParams]);

    if (!result) return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
    );

    const isHuman = result.type === "human";

    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${isHuman ? 'bg-purple-600/20' : 'bg-green-600/20'} rounded-full blur-[100px]`} />
                <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 ${isHuman ? 'bg-blue-600/20' : 'bg-emerald-600/20'} rounded-full blur-[100px]`} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="z-10 max-w-md w-full flex flex-col items-center gap-6 pb-10"
            >
                <div className="text-center space-y-2">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-purple-300 font-medium tracking-widest text-sm uppercase"
                    >
                        전생 분석 완료
                    </motion.p>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-white uppercase tracking-tighter">
                        CHRONO REPORT
                    </h1>
                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 shadow-2xl relative group hover:border-white/20 transition-all"
                >
                    {/* Badge for Rare (Human) */}
                    {isHuman && (
                        <div className="absolute top-4 right-4 bg-yellow-500/20 border border-yellow-500/50 text-yellow-300 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-[0_0_10px_rgba(234,179,8,0.2)] animate-pulse">
                            <Sparkles className="w-3 h-3" />
                            RARE
                        </div>
                    )}

                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r ${isHuman ? 'from-purple-600 to-indigo-600' : 'from-green-600 to-emerald-600'} p-4 rounded-full shadow-lg shadow-purple-500/40 z-20`}>
                        {isHuman ? <User className="w-8 h-8 text-white" /> : <PawPrint className="w-8 h-8 text-white" />}
                    </div>

                    <div className="mt-12 text-center space-y-6">
                        {/* Past Life Avatar Image */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="relative w-40 h-40 mx-auto"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${isHuman ? 'from-purple-500/20 to-indigo-500/20' : 'from-green-500/20 to-emerald-500/20'} rounded-full blur-3xl animate-pulse`} />
                            <div className="relative w-full h-full bg-white/5 rounded-full border border-white/10 flex items-center justify-center text-8xl shadow-inner">
                                {getEntityEmoji(result.entityName)}
                            </div>
                        </motion.div>

                        <div>
                            <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-black text-purple-200 mb-2 uppercase tracking-widest">
                                {result.nickname.split(' ')[0]}
                            </span>
                            <h2 className="text-4xl font-black text-white mb-2">{result.entityName}</h2>
                        </div>

                        {/* Timeline UI */}
                        <Timeline birth={result.birthYear} death={result.deathYear} era={result.era.name} />

                        <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto" />

                        {/* Story Section */}
                        <div className="text-left bg-black/40 p-5 rounded-2xl border border-white/5 mt-4">
                            <h3 className="text-white font-black mb-3 flex items-center gap-2 text-xs uppercase tracking-widest opacity-60">
                                <Sparkles className="w-3 h-3 text-purple-400" />
                                Memory Log
                            </h3>
                            <div className="space-y-4 text-white/80 text-[15px] leading-relaxed word-keep-all font-medium">
                                {result.story.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Stats Section with Radar Chart and Compatibility Animal Section */}
                <div className="grid grid-cols-1 gap-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/5"
                    >
                        <h3 className="text-sm font-black text-white/40 mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <Zap className="w-4 h-4 text-purple-500" />
                            Temporal Stats
                        </h3>
                        <RadarChart stats={result.stats} isHuman={isHuman} />
                    </motion.div>

                    {/* Compatibility Animal Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="w-full bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/5"
                    >
                        <h3 className="text-sm font-black text-white/40 mb-4 flex items-center gap-2 uppercase tracking-widest">
                            <Heart className="w-4 h-4 text-pink-500" />
                            Best Companion
                        </h3>
                        <div className="bg-black/40 rounded-2xl p-6 text-center border border-white/5 flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center shadow-inner relative overflow-hidden">
                                <div className="absolute inset-0 bg-pink-500/10 animate-pulse" />
                                <span className="text-3xl relative z-10">{getEntityEmoji(result.compatibilityAnimal)}</span>
                            </div>
                            <div className="space-y-1">
                                <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">나와 좋은 궁합 동물</div>
                                <div className="text-2xl font-black text-white">{result.compatibilityAnimal}</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Result Card Generation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="w-full"
                >
                    {result && <ResultCard result={result} />}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="flex w-full gap-4 pt-4"
                >
                    <Link
                        href="/"
                        className="flex-1 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all active:scale-95"
                    >
                        처음으로
                    </Link>
                    <button
                        onClick={() => {
                            if (navigator.share) {
                                navigator.share({
                                    title: '나의 전생 리포트',
                                    text: `나의 전생은 ${result.nickname} ${result.entityName}였습니다! 당신의 전생도 확인해보세요.`,
                                    url: window.location.href,
                                }).catch(() => {
                                    navigator.clipboard.writeText(window.location.href);
                                    alert('링크가 복사되었습니다. 카카오톡 등 원하는 곳에 붙여넣어 공유하세요!');
                                });
                            } else {
                                navigator.clipboard.writeText(window.location.href);
                                alert('링크가 복사되었습니다. 카카오톡 등 원하는 곳에 붙여넣어 공유하세요!');
                            }
                        }}
                        className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-white flex items-center justify-center gap-2 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all active:scale-95"
                    >
                        <Share2 className="w-5 h-5" />
                        공유하기
                    </button>
                </motion.div>
            </motion.div>
        </main>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
        }>
            <ResultContent />
        </Suspense>
    );
}
