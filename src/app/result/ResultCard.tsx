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

        // 3. Draw Silhouette (Generic shape based on type)
        ctx.save();
        ctx.filter = "sepia(0.8) blur(1px)";
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.beginPath();
        ctx.arc(WIDTH / 2, HEIGHT / 2 - 50, 150, 0, Math.PI * 2); // Simple circle for now as placeholder silhouette
        ctx.fill();
        ctx.restore();

        // 4. Apply Global Sepia Filter for the rest (conceptually, already applied to bg mostly by colors, but let's reinforce)
        // Note: ctx.filter isn't supported in all browsers but modern ones are fine.
        // However, for "saving", we need the pixels to actually BE sepia. 
        // Since we are drawing fresh, we can just use sepia colors.

        // 5. Draw Decorative Border
        ctx.strokeStyle = "#5a4a42";
        ctx.lineWidth = 10;
        ctx.strokeRect(20, 20, WIDTH - 40, HEIGHT - 40);
        ctx.lineWidth = 2;
        ctx.strokeRect(30, 30, WIDTH - 60, HEIGHT - 60);

        // 6. Draw Text Overlay
        ctx.textAlign = "center";
        ctx.fillStyle = "#3e2723";

        // Title
        ctx.font = "bold 30px serif";
        ctx.fillText("전생의 기록", WIDTH / 2, 100);

        // Nickname
        ctx.font = "20px serif";
        ctx.fillText(result.nickname, WIDTH / 2, 250);

        // Main Entity Name
        ctx.font = "bold 60px serif";
        ctx.fillText(result.entityName, WIDTH / 2, 320);

        // Era
        ctx.font = "24px serif";
        ctx.fillText(result.era.name, WIDTH / 2, 380);

        // Birth - Death
        ctx.font = "20px serif";
        const birthStr = result.birthYear < 0 ? `기원전 ${Math.abs(result.birthYear)}` : `${result.birthYear}년`;
        const deathStr = result.deathYear < 0 ? `기원전 ${Math.abs(result.deathYear)}` : `${result.deathYear}년`;
        ctx.fillText(`${birthStr} ~ ${deathStr} (향년 ${result.lifespanStats}세)`, WIDTH / 2, 420);

        // Stats or Job
        ctx.font = "18px serif";
        const statSummary = `외모 ${result.stats.appearance} • 돈 ${result.stats.money} • 후손 ${result.stats.descendants}`;
        ctx.fillText(statSummary, WIDTH / 2, 500);

        // Compatibility Animal
        ctx.font = "18px serif";
        ctx.fillText(`궁합 동물: ${result.compatibilityAnimal}`, WIDTH / 2, 540);

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
            <h3 className="text-white/40 font-black flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
                <Download className="w-3 h-3" />
                Download ID Card
            </h3>

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
