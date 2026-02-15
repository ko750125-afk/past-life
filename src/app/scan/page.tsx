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
            <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center text-white p-6">
                <div className="relative w-32 h-32 mb-8">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-purple-500 rounded-full"
                    />
                    <div className="absolute inset-4 border-b-2 border-indigo-500 rounded-full animate-reverse-spin" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Zap className="w-8 h-8 text-purple-400 animate-pulse" />
                    </div>
                </div>
                <h2 className="text-2xl font-black tracking-tight mb-2">시간의 균열 탐색 중</h2>
                <p className="text-white/40 text-sm font-mono animate-pulse uppercase">Extracting Temporal Data...</p>
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
                                <div className="absolute inset-0">
                                    <video
                                        ref={videoRef}
                                        autoPlay playsInline muted
                                        className="w-full h-full object-cover transform scale-x-[-1]"
                                    />

                                    {/* Face Guide Oval */}
                                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                        <div className="w-[240px] h-[320px] border-2 border-dashed border-white/50 rounded-[120px/160px] shadow-[0_0_0_9999px_rgba(3,3,3,0.6)]">
                                            {/* Corner accents inside the oval zone */}
                                            <div className="absolute inset-0 animate-pulse">
                                                <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white/70 uppercase tracking-widest">Align Face</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Scanning Line VFX */}
                                    <motion.div
                                        animate={{ top: ['0%', '100%', '0%'] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-[2px] bg-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.8)] z-30"
                                    />
                                </div>
                            )}

                            {/* HUD Static Corners */}
                            <div className="absolute inset-8 border border-white/10 pointer-events-none z-10">
                                <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-purple-500" />
                                <div className="absolute -top-1 -right-1 w-8 h-8 border-t-2 border-r-2 border-purple-500" />
                                <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-2 border-l-2 border-purple-500" />
                                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-purple-500" />
                            </div>
                        </div>
                    )}
                </AnimatePresence>

                <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Controls */}
            <div className="bg-[#030303] p-10 pb-16 relative">
                <div className="max-w-md mx-auto">
                    {capturedImage ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                            className="flex w-full items-center gap-6"
                        >
                            <button
                                onClick={retake}
                                className="flex flex-col items-center gap-3 text-white/50 hover:text-white transition-colors group"
                            >
                                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
                                    <RefreshCw className="w-7 h-7" />
                                </div>
                                <span className="text-[11px] font-black uppercase tracking-widest">Retake</span>
                            </button>

                            <button
                                onClick={analyze}
                                className="flex-1 py-6 bg-white text-black rounded-3xl font-black text-2xl shadow-xl hover:bg-purple-50 active:scale-95 transition-all"
                            >
                                분석 개시
                            </button>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-3 items-end w-full">
                            {/* Photo Upload */}
                            <div className="flex flex-col items-center gap-3 group relative cursor-pointer">
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
                                <div className="p-5 bg-white/5 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all">
                                    <Smartphone className="w-8 h-8 text-white/50 group-hover:text-white transition-colors" />
                                </div>
                                <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">사진 업로드</span>
                            </div>

                            {/* Center Capture Button */}
                            <div className="flex flex-col items-center gap-4">
                                <button
                                    onClick={captureImage}
                                    disabled={!!error && !navigator.mediaDevices?.getUserMedia}
                                    className="w-24 h-24 rounded-full border-4 border-white/30 p-1.5 bg-white/5 active:scale-90 transition-all disabled:opacity-20 flex items-center justify-center group"
                                >
                                    <div className="w-full h-full rounded-full bg-white group-hover:scale-95 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.4)]"></div>
                                </button>
                                <span className="text-[12px] font-black text-white uppercase tracking-widest">카메라</span>
                            </div>

                            {/* Balanced Spacer for Grid alignment */}
                            <div className="w-full h-full"></div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
