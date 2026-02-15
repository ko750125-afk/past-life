"use client";

import { useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import { SessionResult } from "@/lib/past-life";

interface ResultCardProps {
    result: SessionResult;
}

export default function ResultCard({ result }: ResultCardProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // 1. Setup Canvas
        const WIDTH = 600;
        const HEIGHT = 800;
        canvas.width = WIDTH;
        canvas.height = HEIGHT;

        // 2. Draw Background (Era based color/gradient)
        // In a real app, I'd load an image here. For now, procedurally generate "Old Paper" look + Era tint.
        const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT);

        // Era specific hues
        let hue = 30; // Default brown/sepia
        if (result.era.name.includes("고조선") || result.era.name.includes("선사")) hue = 40;
        else if (result.era.name.includes("삼국")) hue = 200; // Blueish
        else if (result.era.name.includes("고려")) hue = 120; // Greenish (Celadon)
        else if (result.era.name.includes("조선")) hue = 30; // Paper-like

        gradient.addColorStop(0, `hsl(${hue}, 40%, 80%)`);
        gradient.addColorStop(1, `hsl(${hue}, 30%, 60%)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        // Add noise/paper texture effect
        for (let i = 0; i < 5000; i++) {
            ctx.fillStyle = `rgba(0,0,0,${Math.random() * 0.1})`;
            ctx.beginPath();
            ctx.arc(Math.random() * WIDTH, Math.random() * HEIGHT, Math.random() * 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // 3. Draw Silhouette Aura (Enhanced visibility)
        ctx.save();
        const centerX = WIDTH / 2;
        const centerY = HEIGHT / 2 - 120;

        // Outer Glow
        const aura = ctx.createRadialGradient(centerX, centerY, 50, centerX, centerY, 220);
        aura.addColorStop(0, "rgba(255, 255, 255, 0.8)");
        aura.addColorStop(0.5, `hsla(${hue}, 100%, 90%, 0.5)`);
        aura.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 220, 0, Math.PI * 2);
        ctx.fill();

        // Inner solid-ish circle for contrast
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
        ctx.beginPath();
        ctx.arc(centerX, centerY, 160, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 4. Draw Entity Emoji - PERFECT CENTERING & VISIBILITY
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "240px serif";

        const getEmoji = (name: string) => {
            const map: Record<string, string> = {
                "호랑이": "🐯", "곰": "🐻", "독수리": "🦅", "거북이": "🐢", "여우": "🦊",
                "늑대": "🐺", "사슴": "🦌", "올빼미": "🦉", "고양이": "🐱", "강아지": "🐶",
                "토끼": "🐰", "다람쥐": "🐿️", "판다": "🐼", "해태": "🦁", "용": "🐲",
                "왕족": "👑", "장군": "⚔️", "철학자": "📜", "예술가": "🎨", "상인": "💰",
                "농부": "👩‍🌾", "의사": "🩺", "학자": "📚", "대장장이": "⚒️", "탐험가": "🧭",
                "시인": "🖋️", "건축가": "🏛️", "요리사": "👨‍🍳", "무녀": "🔮", "어부": "🎣",
                "도공": "🏺", "궁수": "🏹", "악사": "🎵", "승려": "🙏", "역관": "🗣️",
                "화원": "🖌️", "재상": "💂", "천문학자": "🔭", "서예가": "🖌️", "사냥꾼": "🏹",
                "목수": "🔨", "약제사": "🌿", "주막 주인": "🍶", "뱃사공": "🛶", "광대": "🤡"
            };
            for (const [k, v] of Object.entries(map)) if (name.includes(k)) return v;
            return "✨";
        };

        // Multiple shadows for "Pop-out" effect against paper
        ctx.shadowColor = "rgba(0,0,0,0.5)";
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;

        // Centered in the circle (HEIGHT / 2 - 120)
        ctx.fillText(getEmoji(result.entityName), WIDTH / 2, HEIGHT / 2 - 120);
        ctx.restore();

        // 6. Draw Text Overlay
        ctx.textAlign = "center";
        ctx.fillStyle = "#3e2723";

        // Title
        ctx.font = "bold 30px serif";
        ctx.fillText("전생의 기록", WIDTH / 2, 80);

        // Nickname
        ctx.font = "24px serif";
        ctx.fillText(result.nickname, WIDTH / 2, 480);

        // Main Entity Name
        ctx.font = "bold 60px serif";
        ctx.fillText(result.entityName, WIDTH / 2, 550);

        // Era
        ctx.font = "italic 24px serif";
        ctx.fillText(result.era.name, WIDTH / 2, 590);

        // Birth - Death
        ctx.font = "20px serif";
        const birthStr = result.birthYear < 0 ? `기원전 ${Math.abs(result.birthYear)}` : `${result.birthYear}년`;
        const deathStr = result.deathYear < 0 ? `기원전 ${Math.abs(result.deathYear)}` : `${result.deathYear}년`;
        ctx.fillText(`${birthStr} ~ ${deathStr} (향년 ${result.lifespanStats}세)`, WIDTH / 2, 630);

        // Stats
        ctx.font = "bold 18px sans-serif";
        const statSummary = `외모 ${result.stats.appearance} • 돈 ${result.stats.money} • 후손 ${result.stats.descendants}`;
        ctx.fillText(statSummary, WIDTH / 2, 690);

        // Compatibility Animal
        ctx.font = "18px serif";
        ctx.fillText(`영혼의 단짝: ${result.compatibilityAnimal} ${getEmoji(result.compatibilityAnimal)}`, WIDTH / 2, 730);

        // Stamp/Seal (simulation)
        ctx.save();
        ctx.translate(WIDTH - 100, HEIGHT - 100);
        ctx.rotate(-0.2);
        ctx.fillStyle = "rgba(180, 0, 0, 0.7)";
        ctx.beginPath();
        ctx.roundRect(-40, -40, 80, 80, 10);
        ctx.fill();
        ctx.fillStyle = "white";
        ctx.font = "bold 20px serif";
        ctx.fillText("확인", 0, 8);
        ctx.restore();

        // Prepare download
        setDownloadUrl(canvas.toDataURL("image/png"));

    }, [result]);

    return (
        <div className="flex flex-col items-center gap-4 mt-8">
            {/* Download Label Removed */}

            {/* Hidden canvas for generation, or visible if we want to show preview */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-2 bg-white/5">
                <canvas ref={canvasRef} className="max-w-full h-auto w-[280px] rounded-2xl" />
            </div>

            {downloadUrl && (
                <a
                    href={downloadUrl}
                    download={`past-life-${result.entityName}.png`}
                    className="w-full py-4 bg-white text-black rounded-2xl font-black transition-all flex items-center justify-center gap-2 text-sm active:scale-95 shadow-xl"
                >
                    <Download className="w-4 h-4" />
                    파일로 저장하기
                </a>
            )}
        </div>
    );
}
