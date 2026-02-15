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

const STORY_TEMPLATES: Record<string, string[]> = {
    appearance: [
        "전생의 당신은 {era} 최고의 비주얼을 자랑하던 {entityName}(으)로 이름을 날렸습니다. 지나가던 사람들이 당신의 미모에 눈이 멀어 길을 잃는 바람에 지역 경제가 일시적으로 마비될 정도였다고 하네요.",
        "수려한 외모 덕분에 {era}의 모든 화가들이 당신을 모델로 쓰고 싶어 안달이 났었습니다. 당신이 한 번 웃으면 꽃들이 시샘하여 피지 않았고, 달조차 부끄러워 구름 뒤로 숨었다는 전설이 내려옵니다."
    ],
    money: [
        "{era}의 경제를 쥐락펴락하던 큰손 {entityName}! 당신의 금고에는 금은보화가 너무 많아 문이 안 닫혔고, 매일 아침 전생의 당신이 하던 고민은 '오늘은 어떤 금맥을 뚫어볼까' 하는 행복한 고민뿐이었습니다.",
        "전형적인 자산가였던 당신은 {era}에서 '돈이면 안 되는 게 없다'는 것을 몸소 증명하며 살았습니다. 엽전을 하도 많이 써서 당시 화폐 가치가 오르락내리락했다는 흥미로운 기록이 전해집니다."
    ],
    stamina: [
        "강철 같은 체력을 가진 {era}의 무한 동력 {entityName}! 말 한 마리 없이 {era} 전역을 뛰어다녀도 숨 한 번 고르지 않았던 당신은, 당시 산신령들조차 당신의 폐활량에 혀를 내둘렀다고 합니다.",
        "지치지 않는 에너자이저 같았던 당신의 전생. {era}의 험난한 지형을 내 집 안방처럼 누비며, 그 누구보다 활발하게 업적을 남겼습니다. 당신이 한 번 뛰면 땅이 흔들리고 바다가 갈라졌다는 과장 섞인 야사도 있군요."
    ],
    personality: [
        "{era}에서 가장 인자하기로 소문난 성인군자 {entityName}. 당신의 넓은 마음은 태평양보다 넓어, 원수조차 당신의 품 안에서 눈물을 흘리며 개과천선하게 만들 정도로 성격이 정말 온화하셨네요.",
        "화 한 번 내지 않고 평생을 웃으며 살았던 당신. {era} 사람들은 마음이 답답할 때면 당신을 찾아와 위로를 얻었습니다. 당신의 성격은 마치 봄날의 따스한 햇살처럼 주변을 항상 밝게 비춰주었군요."
    ],
    lifespan: [
        "{era}의 살아있는 화석이라 불릴 만큼 장수했던 {entityName}. {lifespan}세라는 기록적인 나이까지 살며 수많은 역사의 변천사를 직접 목격하셨군요. 당신은 신선이 되기 직전까지 가셨던 진정한 장생의 달인이었습니다.",
        "오랜 세월 동안 {era}의 산증인으로 사셨던 당신. 남들보다 두세 배는 긴 시간을 살면서 세상의 모든 지혜를 깨달았고, 그 지혜를 후대에 전수하며 여유로운 노년을 보내셨네요."
    ],
    descendants: [
        "{era}의 가문을 엄청나게 번창시킨 축복의 주인공 {entityName}. 당신의 후손들이 나라 전체에 퍼져 있었기에, 명절이면 당신을 찾아오는 친척들이 줄을 서서 전국 교통이 마비될 정도였다고 합니다.",
        "자손 복이 타고났던 당신의 전생. 아이들의 웃음소리가 끊이지 않는 집안에서 매일매일이 축제 같았습니다. 당신이 일궈놓은 큰 가문은 {era}의 근간을 이루는 중요한 세력이 되었군요."
    ]
};

const NO_STAT_STORY = [
    "{era}에서 비주얼만은 범접 불가였던 {entityName}(으)로 살며, 지나가던 개도 멈춰 서서 구경하게 만들 정도로 존재감이 확실했군요. 사실 역사서에는 당신이 '킹받는 표정의 달인'이었다고 기록되어 있습니다.",
    "역사의 한 페이지에도 안 실린 {era}의 무명 시절 속 {entityName}. {birthYear}년에 태어난 당신은 평범하지만 누구보다 뻔뻔하게 자신만의 길을 걸었던 비범한 영웅이었습니다."
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
    lifespanStats: number;
    entityName: string;
}

export interface SessionResult extends PastLifeResult {
    stats: Stats;
    nickname: string;
    compatibilityAnimal: string;
    story: string;
    reincarnationReason: string;
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
    // Determine top stats (can be multiple)
    const sortedStats = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const topStatKey = sortedStats[0][0];
    const secondStatKey = sortedStats[1][0];

    const replaceVars = (text: string) => {
        return text
            .replace(/{era}/g, base.era.name)
            .replace(/{birthYear}/g, base.birthYear < 0 ? `기원전 ${Math.abs(base.birthYear)}` : `${base.birthYear}`)
            .replace(/{entityName}/g, base.entityName)
            .replace(/{lifespan}/g, base.lifespanStats.toString());
    };

    // Pick templates based on stats
    const mainList = STORY_TEMPLATES[topStatKey] || NO_STAT_STORY;
    const subList = STORY_TEMPLATES[secondStatKey] || NO_STAT_STORY;

    const mainIdx = Math.abs(seed) % mainList.length;
    const subIdx = Math.abs(seed * 7) % subList.length;

    const selectedParagraphs = [
        mainList[mainIdx],
        subList[subIdx]
    ];

    // Ensure they are different
    if (selectedParagraphs[0] === selectedParagraphs[1]) {
        selectedParagraphs[1] = NO_STAT_STORY[seed % NO_STAT_STORY.length];
    }

    return selectedParagraphs.map(p => replaceVars(p)).join("\n\n");
};

const STORY_REASON = [
    "당신이 이번 생에 인간으로 환생할 수 있었던 이유는, 전생에 {entityName}(으)로 살면서도 {statDescription}(을)를 발휘해 위기에 빠진 숲속 친구들을 구했기 때문입니다.",
    "생을 마감할 때 '다음 생엔 맛있는 걸 더 많이 먹고 싶다'는 간절한 소원을 빌었고, 당신의 뛰어난 {statDescription} 덕분에 그 소원이 접수되어 인간으로 태어났습니다.",
    "전생의 {entityName}였던 당신은 그 누구보다 {statDescription}에 진심이었고, 베풂을 실천했기에 이번 생에 인간의 몸을 허락받았습니다."
];

const generateReason = (base: PastLifeResult, stats: Stats, seed: number): string => {
    const reasonIndex = Math.abs(seed * 17) % STORY_REASON.length;
    const sortedStats = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const topStatKey = sortedStats[0][0];

    const statMap: Record<string, string> = {
        appearance: "아름다운 외모",
        personality: "인자한 성격",
        money: "막강한 재력",
        stamina: "강인한 체력",
        lifespan: "장수하는 복",
        descendants: "자손 번창"
    };

    return STORY_REASON[reasonIndex]
        .replace(/{entityName}/g, base.entityName)
        .replace(/{statDescription}/g, statMap[topStatKey] || "남다른 능력");
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
    const reincarnationReason = generateReason(baseResult, stats, variationHash);

    return {
        ...baseResult,
        stats,
        nickname,
        compatibilityAnimal,
        story,
        reincarnationReason
    };
};
