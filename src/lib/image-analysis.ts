export interface ImageFeatures {
    brightness: number;
    contrast: number;
    balance: number; // -1 (Left) to 1 (Right)
    centrality: number; // 0 (Edges) to 1 (Center)
    centroid: { x: number; y: number }; // Relative position 0-1
}

export const analyzeImage = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
): { features: ImageFeatures; seed: number } => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const pixelCount = width * height;

    let totalBrightness = 0;
    let brightnessSumSq = 0;
    let leftBrightness = 0;
    let rightBrightness = 0;
    let centerBrightness = 0;
    let weightedX = 0;
    let weightedY = 0;
    let totalWeight = 0;

    // Center region definitions (inner 50% width/height)
    const centerXStart = width * 0.25;
    const centerXEnd = width * 0.75;
    const centerYStart = height * 0.25;
    const centerYEnd = height * 0.75;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        // Perceived brightness
        const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
        const normalizedBrightness = brightness / 255;

        // 1. Average Brightness Accumulator
        totalBrightness += normalizedBrightness;
        brightnessSumSq += normalizedBrightness * normalizedBrightness;

        const pixelIndex = i / 4;
        const x = pixelIndex % width;
        const y = Math.floor(pixelIndex / width);

        // 3. Balance (Left vs Right)
        if (x < width / 2) {
            leftBrightness += normalizedBrightness;
        } else {
            rightBrightness += normalizedBrightness;
        }

        // 4. Centrality
        if (
            x >= centerXStart &&
            x <= centerXEnd &&
            y >= centerYStart &&
            y <= centerYEnd
        ) {
            centerBrightness += normalizedBrightness;
        }

        // 5. Centroid (Weighted Position) - acting as "Face Box Position" proxy
        // We use brightness as weight to find the "center of mass" of the image
        // In a face photo, the face is usually well-lit or distinct.
        weightedX += x * normalizedBrightness;
        weightedY += y * normalizedBrightness;
        totalWeight += normalizedBrightness;
    }

    // 1. Average Brightness
    const avgBrightness = totalBrightness / pixelCount;

    // 2. Contrast (Standard Deviation)
    const variance = (brightnessSumSq / pixelCount) - (avgBrightness * avgBrightness);
    const contrast = Math.sqrt(Math.max(0, variance));

    // 3. Balance
    // Normalize to -1 to 1 range
    const totalLeftRight = leftBrightness + rightBrightness;
    const balance = totalLeftRight === 0 ? 0 : (rightBrightness - leftBrightness) / totalLeftRight;

    // 4. Centrality
    // Ratio of center brightness to total brightness, normalized by area ratio (approx 0.25 coverage)
    const centrality = totalBrightness === 0 ? 0 : centerBrightness / totalBrightness;

    // 5. Centroid
    const centroidX = totalWeight === 0 ? 0.5 : (weightedX / totalWeight) / width;
    const centroidY = totalWeight === 0 ? 0.5 : (weightedY / totalWeight) / height;

    const features: ImageFeatures = {
        brightness: Number(avgBrightness.toFixed(4)),
        contrast: Number(contrast.toFixed(4)),
        balance: Number(balance.toFixed(4)),
        centrality: Number(centrality.toFixed(4)),
        centroid: {
            x: Number(centroidX.toFixed(4)),
            y: Number(centroidY.toFixed(4)),
        },
    };

    // Convert to array for hashing
    const featureArray = [
        features.brightness,
        features.contrast,
        features.balance,
        features.centrality,
        features.centroid.x,
        features.centroid.y
    ];

    // Create Seed
    const jsonString = JSON.stringify(featureArray);
    const seed = simpleHash(jsonString);

    return { features, seed };
};

// Simple DJB2-like hash function
export const simpleHash = (str: string): number => {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) + hash) + char; /* hash * 33 + c */
    }
    return Math.abs(hash); // Ensure positive integer
};
