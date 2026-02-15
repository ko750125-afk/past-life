"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, RefreshCw, Smartphone, ArrowLeft, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { analyzeImage } from "@/lib/image-analysis";

export default function ScanPage() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        startCamera();
        return () => stopCamera();
    }, []);

    const startCamera = async () => {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            setError("안전하지 않은 연결(HTTP)에서는 카메라를 사용할 수 없습니다.");
            return;
        }

        try {
            const mediaStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: "user" },
                audio: false,
            });
            setStream(mediaStream);
            if (videoRef.current) {
                videoRef.current.srcObject = mediaStream;
            }
            setError("");
        } catch (err) {
            console.error("Camera error:", err);
            setError("카메라 권한이 거부되었거나 사용 중입니다.");
        }
    };

    const stopCamera = () => {
        if (stream) {
            stream.getTracks().forEach((track) => track.stop());
            setStream(null);
        }
    };

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            if (context) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                const dataUrl = canvas.toDataURL("image/png");
                setCapturedImage(dataUrl);
            }
        }
    };

    const retake = () => {
        setCapturedImage(null);
        if (!stream) {
            startCamera();
        }
    };

    const analyze = () => {
        if (!canvasRef.current || !capturedImage) return;

        setLoading(true);

        try {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");
            if (!context) throw new Error("Could not get canvas context");

            const { seed } = analyzeImage(context, canvas.width, canvas.height);

            setTimeout(() => {
                router.push(`/result?seed=${seed}`);
            }, 2000);

        } catch (err) {
            console.error("Analysis failed:", err);
            setError("데이터 해석 중 오류가 발생했습니다.");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white p-6 overflow-hidden">
                {/* Vortex / Blackhole Animation */}
                <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                rotate: i % 2 === 0 ? 360 : -360,
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute border border-purple-500/30 rounded-full"
                            style={{
                                width: `${(i + 1) * 40}px`,
                                height: `${(i + 1) * 40}px`,
                                borderWidth: i === 0 ? '4px' : '1px',
                                borderColor: i === 0 ? '#a855f7' : 'rgba(168, 85, 247, 0.2)'
                            }}
                        />
                    ))}
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-8 h-8 bg-white rounded-full blur-md shadow-[0_0_50px_white]"
                    />
                </div>

                <h2 className="text-3xl font-black tracking-tight mb-4 animate-pulse">과거로 타임슬립 중</h2>
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ y: [0, -10, 0] }}
                            transition={{ delay: i * 0.2, repeat: Infinity }}
                            className="w-2 h-2 bg-purple-500 rounded-full"
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-[#030303] text-white relative flex flex-col font-sans overflow-hidden">
            {/* Header / HUD */}
            <div className="absolute top-0 left-0 right-0 p-6 z-30 flex justify-between items-center pointer-events-none">
                <Link href="/" className="pointer-events-auto bg-white/10 p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all">
                    <ArrowLeft className="w-5 h-5 text-white" />
                </Link>
                <div className="flex flex-col items-center">
                    <h1 className="text-xl font-black tracking-widest text-white">TEMPORAL SCAN</h1>
                </div>
                <div className="w-11"></div>
            </div>

            {/* Scanning Area */}
            <div className="flex-1 relative flex flex-col items-center justify-center bg-black overflow-hidden border-y border-white/10">
                <AnimatePresence mode="wait">
                    {error && !capturedImage ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="p-8 text-center max-w-xs z-10"
                        >
                            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-white/20" />
                            <p className="text-red-400 font-bold mb-6 word-keep-all">{error}</p>
                            <button
                                onClick={() => startCamera()}
                                className="w-full py-4 bg-white/10 border border-white/20 rounded-2xl text-white font-bold hover:bg-white/20 transition-colors"
                            >
                                시스템 리부팅
                            </button>
                        </motion.div>
                    ) : (
                        <div className="relative w-full h-full flex flex-col items-center justify-center">
                            {capturedImage ? (
                                <motion.img
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    src={capturedImage}
                                    alt="Captured"
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <video
                                        ref={videoRef}
                                        autoPlay playsInline muted
                                        className="w-full h-full object-cover transform scale-x-[-1]"
                                    />

                                    {/* Face Guide Oval */}
                                    <div className="absolute inset-x-0 top-0 bottom-[15%] flex items-center justify-center z-20 pointer-events-none">
                                        <div className="w-[260px] h-[360px] border-4 border-dashed border-white/30 rounded-[130px/180px] shadow-[0_0_0_9999px_rgba(0,0,0,0.6)] relative">
                                            {/* Text moved to bottom */}
                                            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-max text-[14px] font-black text-white uppercase tracking-[0.3em] bg-purple-600/80 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-white/20">
                                                얼굴을 맞춰주세요
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning Line VFX */}
                                    <motion.div
                                        animate={{ top: ['10%', '90%', '10%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[2px] bg-purple-400 shadow-[0_0_20px_rgba(168,85,247,1)] z-30"
                                    />
                                </div>
                            )}

                            {/* HUD Static Corners */}
                            <div className="absolute inset-4 sm:inset-10 border border-white/10 pointer-events-none z-10">
                                <div className="absolute -top-1 -left-1 w-10 h-10 border-t-4 border-l-4 border-purple-500" />
                                <div className="absolute -top-1 -right-1 w-10 h-10 border-t-4 border-r-4 border-purple-500" />
                                <div className="absolute -bottom-1 -left-1 w-10 h-10 border-b-4 border-l-4 border-purple-500" />
                                <div className="absolute -bottom-1 -right-1 w-10 h-10 border-b-4 border-r-4 border-purple-500" />
                            </div>
                        </div>
                    )}
                </AnimatePresence>

                <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Controls */}
            <div className="bg-[#030303] pt-8 pb-16 px-6 relative z-40 border-t border-white/5">
                <div className="max-w-md mx-auto">
                    {capturedImage ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col w-full items-center gap-6"
                        >
                            <button
                                onClick={analyze}
                                className="w-full py-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-[2.5rem] font-black text-4xl shadow-[0_20px_80px_rgba(168,85,247,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 group"
                            >
                                <Zap className="w-8 h-8 fill-white group-hover:animate-bounce" />
                                분석 시작
                            </button>
                        </motion.div>
                    ) : (
                        <div className="flex items-center justify-center gap-10 md:gap-16">
                            {/* Photo Upload */}
                            <div className="flex flex-col items-center gap-4 group relative cursor-pointer">
                                <input
                                    type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer z-10" id="file-upload"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            setError("");
                                            const reader = new FileReader();
                                            reader.onload = (event) => {
                                                const dataUrl = event.target?.result as string;
                                                setCapturedImage(dataUrl);
                                                const img = new Image();
                                                img.onload = () => {
                                                    if (canvasRef.current) {
                                                        const canvas = canvasRef.current;
                                                        const ctx = canvas.getContext("2d");
                                                        if (ctx) {
                                                            canvas.width = img.width; canvas.height = img.height;
                                                            ctx.drawImage(img, 0, 0);
                                                        }
                                                    }
                                                };
                                                img.src = dataUrl;
                                            };
                                            reader.readAsDataURL(file);
                                        }
                                    }}
                                />
                                <div className="p-5 bg-white/5 rounded-3xl border border-white/10 group-hover:border-white/20 group-hover:bg-white/10 transition-all">
                                    <Smartphone className="w-8 h-8 text-white/40 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-[11px] font-black text-white/30 uppercase tracking-widest">사진 업로드</span>
                            </div>

                            {/* Center Capture Button */}
                            <div className="flex flex-col items-center gap-5">
                                <button
                                    onClick={captureImage}
                                    disabled={!!error && !navigator.mediaDevices?.getUserMedia}
                                    className="w-28 h-28 rounded-full border-4 border-white/20 p-2 bg-white/5 active:scale-90 transition-all disabled:opacity-20 flex items-center justify-center group"
                                >
                                    <div className="w-full h-full rounded-full bg-white group-hover:scale-95 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.5)]"></div>
                                </button>
                                <span className="text-[13px] font-black text-white uppercase tracking-widest">카메라</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
