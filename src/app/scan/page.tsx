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
            <div className="min-h-screen bg-[#000] flex flex-col items-center justify-center text-white p-6 overflow-hidden relative">
                {/* Cinematic Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-indigo-900/20" />

                {/* Warp Tunnel Animation */}
                <div className="relative w-80 h-80 mb-12 flex items-center justify-center">
                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0.1, opacity: 0 }}
                            animate={{
                                rotate: i % 2 === 0 ? 720 : -720,
                                scale: [0.1, 1.5, 3],
                                opacity: [0, 0.5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.15,
                                ease: "easeOut"
                            }}
                            className="absolute border rounded-full"
                            style={{
                                width: '100%',
                                height: '100%',
                                borderWidth: '2px',
                                borderColor: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#3b82f6' : '#ec4899',
                                boxShadow: `0 0 20px ${i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#3b82f6' : '#ec4899'}`,
                            }}
                        />
                    ))}

                    {/* Central Singularity */}
                    <motion.div
                        animate={{
                            scale: [1, 2, 0.8, 1.5, 1],
                            opacity: [0.5, 1, 0.5, 1, 0.5],
                            boxShadow: [
                                "0 0 40px #fff",
                                "0 0 100px #a855f7",
                                "0 0 60px #fff",
                                "0 0 120px #3b82f6",
                                "0 0 40px #fff"
                            ]
                        }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-4 h-4 bg-white rounded-full z-10"
                    />
                </div>

                <div className="relative">
                    <motion.h2
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="text-4xl font-black tracking-tight mb-4 relative z-10"
                    >
                        과거로 타임슬립 중
                    </motion.h2>
                    <motion.h2
                        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 0.5, repeat: Infinity }}
                        className="text-4xl font-black tracking-tight mb-4 absolute top-0 left-0 text-purple-500 blur-sm -z-10"
                    >
                        과거로 타임슬립 중
                    </motion.h2>
                </div>

                <div className="flex gap-4">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            animate={{
                                scale: [1, 2, 1],
                                backgroundColor: ["#a855f7", "#3b82f6", "#ec4899", "#a855f7"]
                            }}
                            transition={{ delay: i * 0.1, duration: 1, repeat: Infinity }}
                            className="w-3 h-3 rounded-full"
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

            {/* Scanning Area / Main Capture Zone */}
            <div
                className="flex-1 relative flex flex-col items-center justify-center bg-black overflow-hidden border-y border-white/10 cursor-pointer"
                onClick={!capturedImage ? captureImage : undefined}
            >
                <AnimatePresence mode="wait">
                    {error && !capturedImage ? (
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="p-8 text-center max-w-xs z-10"
                        >
                            <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-white/20" />
                            <p className="text-red-400 font-bold mb-6 word-keep-all">{error}</p>
                            <button
                                onClick={(e) => { e.stopPropagation(); startCamera(); }}
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

                                    {/* Face Guide Oval - Centered */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                                        <div className="w-[260px] h-[360px] border-4 border-dashed border-white/20 rounded-[130px/180px] shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] relative mb-24">
                                            {/* No text here anymore */}
                                        </div>

                                        {/* Tap to capture hint - Moved under oval and made larger */}
                                        <motion.div
                                            animate={{ opacity: [0.4, 1, 0.4] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="text-white text-2xl font-black uppercase tracking-[0.2em] drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                        >
                                            화면을 터치하여 촬영
                                        </motion.div>
                                    </div>

                                    {/* Scanning Line VFX */}
                                    <motion.div
                                        animate={{ top: ['10%', '90%', '10%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[2px] bg-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.5)] z-30"
                                    />
                                </div>
                            )}

                            {/* HUD Static Corners Removed as per request */}
                        </div>
                    )}
                </AnimatePresence>

                <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Controls - Moved up and made much larger */}
            <div className="bg-[#030303] px-6 relative z-40">
                <div className="max-w-2xl mx-auto">
                    {capturedImage ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col w-full items-center -mt-32 pb-20"
                        >
                            <button
                                onClick={analyze}
                                className="w-full py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-[4rem] font-black text-6xl shadow-[0_30px_100px_rgba(168,85,247,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-8 group border-b-[12px] border-purple-800"
                            >
                                <Zap className="w-16 h-16 fill-white group-hover:animate-bounce" />
                                분석 시작
                            </button>
                        </motion.div>
                    ) : (
                        <div className="h-20" /> /* Empty space where footer used to be */
                    )}
                </div>
            </div>
        </main>
    );
}
