"use client";

import { useEffect, useRef, useState } from "react";
import { Camera, RefreshCw, Smartphone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
            setError("안전하지 않은 연결(HTTP)에서는 카메라를 사용할 수 없습니다. 'chrome://flags' 설정이 필요하거나 HTTPS 연결이 필요합니다.");
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
        if (!canvasRef.current || !capturedImage) {
            console.error("Missing canvas or image");
            return;
        }

        setLoading(true);

        try {
            const canvas = canvasRef.current;
            const context = canvas.getContext("2d");

            if (!context) {
                throw new Error("Could not get canvas context");
            }

            // Perform analysis synchronously (it's fast)
            const { seed } = analyzeImage(context, canvas.width, canvas.height);

            // Short delay only for visual effect
            setTimeout(() => {
                router.push(`/result?seed=${seed}`);
            }, 1000);

        } catch (err) {
            console.error("Analysis failed:", err);
            setError("이미지 분석 중 오류가 발생했습니다. 다시 시도해주세요.");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-purple-500 mb-4"></div>
                <p className="text-xl font-light animate-pulse">전생의 기록을 탐색 중입니다...</p>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-black text-white relative flex flex-col">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 z-20 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
                <Link href="/" className="text-white/80 hover:text-white">
                    ← 뒤로가기
                </Link>
                <span className="font-semibold text-purple-200">얼굴 인식</span>
                <div className="w-16"></div> {/* Spacer */}
            </div>

            <div className="flex-1 flex flex-col items-center justify-center relative bg-gray-900 overflow-hidden">
                {error && !capturedImage ? (
                    <div className="p-6 text-center max-w-xs transition-all animate-in fade-in zoom-in">
                        <Smartphone className="w-12 h-12 mx-auto mb-4 text-gray-500" />
                        <p className="text-red-400 mb-4">{error}</p>
                        <button
                            onClick={() => startCamera()}
                            className="px-6 py-2 bg-purple-600/20 border border-purple-500/50 rounded-lg text-purple-200 hover:bg-purple-600/40 transition-colors"
                        >
                            카메라 다시 시도
                        </button>
                    </div>
                ) : (
                    <>
                        {capturedImage ? (
                            <img
                                src={capturedImage}
                                alt="Captured"
                                className="w-full h-full object-cover animate-in fade-in duration-500"
                            />
                        ) : (
                            <div className="relative w-full h-full">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className="w-full h-full object-cover transform scale-x-[-1]" // Mirror effect
                                />

                                {/* Face Overlay Guide */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                                    <div className="w-64 h-80 border-2 border-white/30 rounded-[50%] box-border shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] relative">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/70 text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                                            얼굴을 맞춰주세요
                                        </div>
                                        {/* Corner accents */}
                                        <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-500 rounded-tl-3xl"></div>
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-500 rounded-tr-3xl"></div>
                                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-500 rounded-bl-3xl"></div>
                                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-500 rounded-br-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
                {/* Always render canvas so ref is always available */}
                <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Controls */}
            <div className="bg-black/80 p-8 pb-12 backdrop-blur-md">
                <div className="flex items-center justify-center gap-8">
                    {capturedImage ? (
                        <>
                            <button
                                onClick={retake}
                                className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
                            >
                                <div className="p-3 bg-gray-800 rounded-full">
                                    <RefreshCw className="w-6 h-6" />
                                </div>
                                <span className="text-sm">재촬영</span>
                            </button>

                            <button
                                onClick={analyze}
                                className="flex-1 max-w-[200px] py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 active:scale-95 transition-all"
                            >
                                분석하기
                            </button>
                        </>
                    ) : (
                        <>
                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                id="file-upload"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        setError(""); // Clear any camera error when uploading
                                        const reader = new FileReader();
                                        reader.onload = (event) => {
                                            const dataUrl = event.target?.result as string;
                                            setCapturedImage(dataUrl);

                                            // Ensure canvas captures the uploaded image
                                            const img = new Image();
                                            img.onload = () => {
                                                if (canvasRef.current) {
                                                    const canvas = canvasRef.current;
                                                    const ctx = canvas.getContext("2d");
                                                    if (ctx) {
                                                        canvas.width = img.width;
                                                        canvas.height = img.height;
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
                            <label
                                htmlFor="file-upload"
                                className="flex flex-col items-center gap-2 text-white/70 hover:text-white cursor-pointer transition-colors"
                            >
                                <div className="p-4 bg-gray-800 rounded-full">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <span className="text-sm">사진 업로드</span>
                            </label>

                            <button
                                onClick={captureImage}
                                disabled={!!error && !navigator.mediaDevices?.getUserMedia}
                                className="w-20 h-20 rounded-full border-4 border-white/30 bg-white/10 flex items-center justify-center active:scale-90 transition-transform disabled:opacity-50 disabled:cursor-not-allowed group"
                            >
                                <div className="w-16 h-16 rounded-full bg-white group-active:scale-90 transition-transform"></div>
                            </button>

                            <div className="w-16"></div> {/* balance spacer */}
                        </>
                    )}
                </div>
            </div>
        </main>
    );
}
