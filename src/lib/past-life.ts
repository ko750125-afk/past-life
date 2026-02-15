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
    "{era}, {birthYear}년생인 당신은 전생에 무려 '{entityName}'(이)었습니다. 사실 당신이 태어날 때 무지개가 7개 떴다는 소문이 있었지만, 알고 보니 그냥 동네 꼬마들의 비눗방울이었다네요.",
    "역사의 한 페이지에도 안 실린 {era}의 무명 시절, {birthYear}년에 태어난 당신은 역사상 가장 '킹받는' 표정의 {entityName}(으)로 유명했습니다.",
    "시간의 강을 거슬러 도착한 {era}. 당신은 그곳에서 비주얼만은 범접 불가였던 {entityName}(으)로 살며, 지나가던 개도 멈춰 서서 구경하게 만들 정도로 존재감이 확실했군요."
];

const STORY_LIFE = [
    "당신은 {lifespan}세까지 꽤 치열하게 사셨는데, 사인은 무려 '지나가던 거북이와 눈싸움하다가 눈이 침침해져서 뒤로 넘어짐'이었습니다. 그래도 {statDescription}만큼은 당대 최고라며 동네 쥐들도 인정했다죠.",
    "{statDescription} 재능이 너무 넘쳐나서 임금님도 당신에게 일자리를 제안했지만, '귀찮다'는 이유로 거절하고 평생 누워서 귤만 까 드셨다는 야사가 전해집니다.",
    "역사는 당신을 {statDescription}의 귀재로 기억...하려 했으나, 사실 당신이 {lifespan}년 동안 한 일이라곤 맛집 탐방과 허세 섞인 시 한 편뿐이었네요. 하지만 그 시가 너무 웃겨서 소문이 다 났군요."
];

const STORY_ADVICE = [
    "전생의 당신은 지금의 당신을 보며 '야, 나 때는 {entityName}여도 잘만 살았어!'라며 꼰대 기운 섞인 {statDescription} 응원을 보내고 있습니다. 기죽지 마세요, 조상님도 이불 킥 많이 하셨답니다.",
    "조상님들이 하늘나라에서 당신의 MBTI를 맞히느라 토론 중이시지만, {entityName}였던 전생의 가오를 살려 오늘은 일단 배달 음식부터 시키고 생각하세요.",
    "인생 뭐 있나요? 전생엔 {entityName}였는데! 내일 걱정은 내일의 나에게 맡기고, 오늘은 그냥 전생의 당신처럼 뻔뻔하게 살아가 보세요. 당신은 충분히 비범하니까요!"
];

const STORY_REASON = [
    "당신이 이번 생에 인간으로 환생할 수 있었던 이유는, 전생에 {entityName}(으)로 살면서도 {statDescription}(을)를 발휘해 위기에 빠진 숲속 친구들을 구했기 때문입니다. 그 공덕이 하늘에 닿아 특별히 인간의 몸을 허락받았네요.",
    "사실 {entityName} 시절, 당신은 {statDescription} 덕분에 만인의 우상이었고, 생을 마감할 때 '다음 생엔 맛있는 걸 더 많이 먹고 싶다'는 간절한 소원을 빌었습니다. 그 소원이 접수되어 미식의 즐거움을 아는 인간으로 태어났습니다.",
    "전생의 {entityName}였던 당신은 그 누구보다 {statDescription}에 진심이었고, 자기보다 약한 존재를 위해 자신의 먹이를 양보하는 자비심을 보였습니다. 덕분에 이번 생엔 더 큰 베풂을 실천할 수 있는 인간의 기회를 얻었군요."
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
        STORY_LIFE[lifeIndex]
    ];

    return paragraphs.map(p => replaceVars(p)).join("\n\n");
};

const generateReason = (base: PastLifeResult, stats: Stats, seed: number): string => {
    const reasonIndex = Math.abs(seed * 17) % STORY_REASON.length;
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

    return STORY_REASON[reasonIndex]
        .replace(/{era}/g, base.era.name)
        .replace(/{birthYear}/g, base.birthYear.toString())
        .replace(/{entityName}/g, base.entityName)
        .replace(/{statDescription}/g, statDescription);
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
