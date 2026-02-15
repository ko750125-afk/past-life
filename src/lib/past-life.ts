export interface Era {
    name: string;
    startYear: number;
    endYear: number;
}

export const ERA_LIST: Era[] = [
    { name: "선사 시대", startYear: -5000, endYear: -2333 },
    { name: "고조선 시대", startYear: -2333, endYear: -108 },
    { name: "삼국 시대", startYear: -57, endYear: 668 },
    { name: "남북국 시대", startYear: 668, endYear: 918 },
    { name: "고려 시대", startYear: 918, endYear: 1392 },
    { name: "조선 시대 초기", startYear: 1392, endYear: 1592 },
    { name: "조선 시대 후기", startYear: 1592, endYear: 1897 },
    { name: "근대", startYear: 1897, endYear: 1950 },
];

export const HUMAN_JOBS = [
    "왕족", "장군", "철학자", "예술가", "상인", "농부", "의사", "학자", "대장장이", "탐험가",
    "시인", "건축가", "요리사", "무녀", "어부", "도공", "궁수", "악사", "승려", "역관",
    "화원", "재상", "천문학자", "서예가", "사냥꾼", "목수", "약제사", "주막 주인", "뱃사공", "광대"
];

// Animals for analysis (entity type)
export const ANIMALS = [
    { name: "호랑이", type: "predator", era: "all" },
    { name: "곰", type: "mammal", era: "all" },
    { name: "독수리", type: "bird", era: "all" },
    { name: "거북이", type: "reptile", era: "all" },
    { name: "여우", type: "mammal", era: "all" },
    { name: "늑대", type: "mammal", era: "all" },
    { name: "사슴", type: "mammal", era: "all" },
    { name: "올빼미", type: "bird", era: "all" },
    { name: "고양이", type: "mammal", era: "all" },
    { name: "강아지", type: "mammal", era: "all" },
    { name: "토끼", type: "mammal", era: "all" },
    { name: "다람쥐", type: "mammal", era: "all" },
    { name: "판다", type: "mammal", era: "all" },
    { name: "해태", type: "mythical", era: "ancient" },
    { name: "용", type: "mythical", era: "ancient" }
];

// Animals for compatibility (New requested feature)
export const COMPATIBILITY_ANIMALS = [
    "용맹한 호랑이", "우직한 곰", "민첩한 표범", "지혜로운 여우", "충성스러운 강아지",
    "자유로운 독수리", "영리한 원숭이", "우아한 사슴", "고상한 학", "신비로운 용",
    "따뜻한 판다", "귀여운 토끼", "성실한 소", "활동적인 말", "운 좋은 돼지"
];

export const NICKNAME_TEMPLATES = [
    "전설의", "잊혀진", "고독한", "바람의", "붉은", "푸른", "침묵의", "황금빛",
    "별을 쫓는", "새벽의", "마지막", "숨겨진", "용감한", "지혜로운", "방랑하는",
    "운명을 거스르는", "시간을 달리는", "그림자 속의", "찬란한", "비운의"
];

const STORY_INTRO = [
    "{era}, {birthYear}년생인 당신은 시대의 흐름을 타고난 {entityName}(으)로서 세상에 첫발을 내디뎠습니다.",
    "역사의 한 페이지에 기록된 {era}의 어느 날, 당신은 {entityName}의 운명을 품고 {birthYear}년에 태어났습니다.",
    "시간의 강을 거슬러 도착한 {era}. 당신은 그곳에서 {entityName}(으)로 불리며 역동적인 삶을 시작했습니다."
];

const STORY_LIFE = [
    "당신은 뛰어난 자질로 {lifespan}세까지 생애를 이어갔으며, 특히 {statDescription} 측면에서 압도적인 존재감을 떨쳤습니다.",
    "{statDescription} 능력이 남달랐던 당신은 당대 사람들에게 큰 경외심을 주었으며, 긴 세월 동안 강인한 흔적을 남겼습니다.",
    "지혜로운 처세술과 강한 의지로 {lifespan}년을 살았고, 후대에는 당신의 {statDescription} 재능이 전설처럼 전해지게 됩니다."
];

const STORY_ADVICE = [
    "전생의 당신이 그랬듯, 현재의 당신 또한 숨겨진 잠재력을 믿고 나아가시길 바랍니다. 당신은 충분히 빛날 자격이 있습니다.",
    "과거의 강인했던 당신을 기억하세요. 현재의 고민들도 그때의 지혜가 있다면 충분히 해결할 수 있을 것입니다.",
    "운명의 수레바퀴는 여전히 당신편입니다. 전생의 기운을 이어받아 이번 생에서도 최고의 순간을 만끽하세요."
];

export interface Stats {
    appearance: number;    // 외모
    personality: number;   // 성격
    money: number;         // 돈
    stamina: number;       // 체력
    lifespan: number;      // 수명
    descendants: number;   // 후손
}

export interface PastLifeResult {
    type: "animal" | "human";
    era: Era;
    birthYear: number;
    deathYear: number;
    lifespanStats: number; // Renamed to avoid confusion with Stats.lifespan
    entityName: string;
}

export interface SessionResult extends PastLifeResult {
    stats: Stats;
    nickname: string;
    compatibilityAnimal: string; // Changed from items
    story: string;
}

export const determinePastLife = (seed: number): PastLifeResult => {
    const typeSeed = Math.abs(seed ^ 12345);
    const isHuman = typeSeed % 10 === 0;
    const type = isHuman ? "human" : "animal";

    const eraIndex = Math.abs(seed) % ERA_LIST.length;
    const era = ERA_LIST[eraIndex];

    const duration = era.endYear - era.startYear;
    const birthOffset = Math.abs(seed) % duration;
    const birthYear = era.startYear + birthOffset;

    const lifespanStats = 40 + (Math.abs(seed) % 46);
    const deathYear = birthYear + lifespanStats;

    let entityName = "";
    if (isHuman) {
        const jobIndex = Math.abs(seed) % HUMAN_JOBS.length;
        entityName = HUMAN_JOBS[jobIndex];
    } else {
        const animalIndex = Math.abs(seed) % ANIMALS.length;
        entityName = ANIMALS[animalIndex].name;
    }

    return { type, era, birthYear, deathYear, lifespanStats, entityName };
};

const generateStory = (base: PastLifeResult, stats: Stats, seed: number): string => {
    const introIndex = Math.abs(seed) % STORY_INTRO.length;
    const lifeIndex = Math.abs(seed * 7) % STORY_LIFE.length;
    const adviceIndex = Math.abs(seed * 13) % STORY_ADVICE.length;

    // Find highest stat for description
    let maxStat = "appearance";
    let maxVal = stats.appearance;
    Object.entries(stats).forEach(([key, val]) => {
        if (val > maxVal) {
            maxVal = val;
            maxStat = key;
        }
    });

    const statMap: Record<string, string> = {
        appearance: "아름다운 외모",
        personality: "인자한 성격",
        money: "막강한 재력",
        stamina: "강인한 체력",
        lifespan: "장수하는 복",
        descendants: "자손 번창"
    };

    const statDescription = statMap[maxStat];

    const replaceVars = (text: string) => {
        return text
            .replace(/{era}/g, base.era.name)
            .replace(/{birthYear}/g, base.birthYear < 0 ? `기원전 ${Math.abs(base.birthYear)}` : `${base.birthYear}`)
            .replace(/{entityName}/g, base.entityName)
            .replace(/{lifespan}/g, base.lifespanStats.toString())
            .replace(/{statDescription}/g, statDescription);
    };

    const paragraphs = [
        STORY_INTRO[introIndex],
        STORY_LIFE[lifeIndex],
        STORY_ADVICE[adviceIndex]
    ];

    return paragraphs.map(p => replaceVars(p)).join("\n\n");
};

export const generateSessionVariations = (seed: number, sessionId: string): SessionResult => {
    const baseResult = determinePastLife(seed);

    let variationHash = 0;
    const combo = `${seed}-${sessionId}`;
    for (let i = 0; i < combo.length; i++) {
        variationHash = ((variationHash << 5) - variationHash) + combo.charCodeAt(i);
        variationHash |= 0;
    }
    variationHash = Math.abs(variationHash);

    const statVal = (offset: number) => (variationHash + offset * 1337) % 101;

    const stats: Stats = {
        appearance: statVal(1),
        personality: statVal(2),
        money: statVal(3),
        stamina: statVal(4),
        lifespan: statVal(5),
        descendants: statVal(6),
    };

    const nicknameIndex = variationHash % NICKNAME_TEMPLATES.length;
    const nickname = `${NICKNAME_TEMPLATES[nicknameIndex]} ${baseResult.entityName}`;

    const animalIndex = variationHash % COMPATIBILITY_ANIMALS.length;
    const compatibilityAnimal = COMPATIBILITY_ANIMALS[animalIndex];

    const story = generateStory(baseResult, stats, variationHash);

    return {
        ...baseResult,
        stats,
        nickname,
        compatibilityAnimal,
        story
    };
};
