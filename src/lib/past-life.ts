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
    popularity: [
        "{era}의 아이돌이자 만인의 연인 {entityName}! 당신이 지나가면 남녀노소 할 것 없이 환호성을 질렀고, 당신의 털 끝 하나라도 만져보려는 팬들로 인해 거리가 마비되곤 했습니다.",
        "전생의 당신은 {era}에서 '핵인싸' 그 자체였습니다. 당신 주변엔 언제나 친구들이 구름처럼 몰려들었고, 당신의 행동 하나하나가 당시 유행을 선도하는 트렌드가 되었습니다."
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
    popularity: number;    // 인기 (구 돈)
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

const LOW_STAT_STORIES: Record<string, string[]> = {
    appearance: [
        "하지만 외모에는 크게 신경 쓰지 않으셨군요. {era}의 패션 테러리스트로 불리며, 당신이 입는 옷마다 사람들의 웃음거리가 되곤 했습니다. 그래도 당신의 자신감만큼은 우주 정복급이었습니다.",
        "솔직히 말해 {era}의 미적 기준과는 조금 거리가 있었습니다. 거울을 볼 때마다 '중요한 건 내면이지'라고 되뇌며 정신 승리의 달인이 되셨군요."
    ],
    popularity: [
        "안타깝게도 인기는 조금 부족했습니다. {era}에서 당신이 주최한 잔치에 파리만 날렸다는 슬픈 전설이 있습니다. 덕분에 혼자 노는 법을 터득하여 고독을 즐기는 진정한 낭만파가 되셨네요.",
        "주변에 사람이 별로 없어 '은둔형 외톨이'의 시초가 되셨습니다. 하지만 덕분에 인간관계의 스트레스 없이 자연과 벗 삼아 평화로운 삶을 즐기셨군요."
    ],
    stamina: [
        "저질 체력의 소유자였던 {entityName}님. 밥 숟가락 들 힘도 아껴야 해서 하루의 절반을 누워서 보내셨습니다. {era} 사람들은 당신을 '와식 생활의 선구자'라 불렀습니다.",
        "조금만 움직여도 숨이 턱 끝까지 차올라, 친구들이 술래잡기를 하자고 하면 항상 심판을 자처하셨군요. 뛰는 것보다 입으로 하는 모든 활동에 특화되셨던 것 같습니다."
    ],
    personality: [
        "성격은... 조금 까칠하셨네요. {era}의 모든 사람과 싸울 기세로 사셨던 당신. '모두까기 인형'이라는 별명으로 불리며, 당신의 독설을 피하기 위해 사람들이 피해 다녔습니다.",
        "타협을 모르는 불도저 같은 성격 탓에 적을 많이 만드셨군요. 하지만 그만큼 본인의 신념은 확고해서, 한 번 마음먹은 일은 끝까지 해내는 뚝심은 인정받았습니다."
    ],
    lifespan: [
        "아쉽게도 가늘고 짧게 사셨군요. {era}의 맛있는 음식들을 다 먹어보기도 전에 요절하는 바람에, 먹다 죽은 귀신이 되어 구천을 떠돌 뻔했습니다.",
        "건강 관리에 소홀하여 병치레가 잦았습니다. {era}의 의원들 사이에서 당신은 VIP 고객이었으며, 당신 덕분에 의학이 조금 발전했을지도 모릅니다."
    ],
    descendants: [
        "자손 복은 지지리도 없으셨군요. 하지만 무자식이 상팔자라는 말을 위안 삼아 자유로운 영혼으로 사셨습니다. 홀로 떠난 여행에서 수많은 인연을 만나셨을 겁니다.",
        "대를 이을 후손은 남기지 못했지만, 대신 당신의 이름 석 자는 남기셨...을까요? 아마 {era}의 바람처럼 자유롭게 살다가 홀가분하게 떠나셨던 것 같습니다."
    ]
};

const generateStory = (base: PastLifeResult, stats: Stats, seed: number): string => {
    // Determine top stats (can be multiple)
    const sortedStats = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const topStatKey = sortedStats[0][0];

    // Determine lowest stat
    const lowestStatKey = sortedStats[sortedStats.length - 1][0];

    const replaceVars = (text: string) => {
        return text
            .replace(/{era}/g, base.era.name)
            .replace(/{birthYear}/g, base.birthYear < 0 ? `기원전 ${Math.abs(base.birthYear)}` : `${base.birthYear}`)
            .replace(/{entityName}/g, base.entityName)
            .replace(/{lifespan}/g, base.lifespanStats.toString());
    };

    // Pick Positive Template (Top Stat)
    const mainList = STORY_TEMPLATES[topStatKey] || NO_STAT_STORY;
    const mainIdx = Math.abs(seed) % mainList.length;

    // Pick Negative/Funny Template (Lowest Stat)
    // If by chance top and lowest are same (e.g. all equal), fall back to NO_STAT_STORY or another positive
    const subList = (topStatKey !== lowestStatKey && LOW_STAT_STORIES[lowestStatKey])
        ? LOW_STAT_STORIES[lowestStatKey]
        : STORY_TEMPLATES[sortedStats[1][0]] || NO_STAT_STORY;

    const subIdx = Math.abs(seed * 7) % subList.length;

    const selectedParagraphs = [
        mainList[mainIdx],
        subList[subIdx]
    ];

    return selectedParagraphs.map(p => replaceVars(p)).join("\n\n");
};

const FUNNY_REASONS: Record<string, string[]> = {
    appearance: [
        "전생에 거울을 볼 때마다 깊은 한숨을 쉬었던 당신. 옥황상제가 '그래, 이번엔 필터와 보정 어플이 있는 세상에서 살아봐라'라며 특별히 인간으로 보내주셨습니다.",
        "짝을 찾지 못해 외로워하던 당신의 영혼이 '다음 생엔 인간으로 태어나서 성형이라도 하겠다'고 떼를 쓰는 바람에, 저승사자가 귀찮아서 환생 도장을 찍어줬습니다."
    ],
    popularity: [
        "전생에 친구가 없어 혼잣말만 50년을 하다가, '다음 생엔 인싸가 되고 싶다'는 소원을 빌었습니다. 아직 그 소원이 이루어지는 중이니 조금만 기다려보세요.",
        "아무도 당신을 기억해주지 않는 게 너무 억울해서, 이번 생엔 '구독과 좋아요'를 받을 때까지 집에 가지 않겠다고 염라대왕 바짓가랑이를 잡고 늘어졌군요."
    ],
    stamina: [
        "사냥하러 뛰어가다 숨이 차서 굶어 죽은 게 천추의 한이 되었습니다. '숨만 쉬어도 배달 음식이 오는 천국'을 찾아 헤매다 인간계로 오게 되었습니다.",
        "전생에 세 발자국만 걸어도 기절하던 저질 체력이라, 이번 생엔 '누워서 스마트폰 하기'라는 신기술을 마음껏 누려보라고 인간 육체를 받았습니다."
    ],
    personality: [
        "성격이 너무 더러워 저승에서도 받아주질 않아 강제 반송당했습니다. 인간계에서 '사회성'이란 걸 좀 배워오라는 염라대왕의 특별 숙제입니다.",
        "전생에 툭하면 주변 동물들과 싸워서, 이번 생엔 '악플' 말고 '선플' 다는 법을 배우라고 인간으로 다시 태어났습니다. 착하게 사세요."
    ],
    lifespan: [
        "맛집 리스트를 다 정복하지 못하고 요절한 게 너무 억울해, '치킨에 맥주'를 먹어볼 때까지는 절대 못 죽는다며 환생을 강력하게 요구했습니다.",
        "너무 빨리 죽어서 저승 명부에도 이름이 누락되었습니다. 행정 착오로 인해 얼떨결에 인간으로 다시 태어나는 행운(또는 불행)을 얻으셨군요."
    ],
    descendants: [
        "자손을 못 남겨 제사상을 못 얻어먹는 바람에 배가 고팠던 당신. '직접 편의점 가서 사 먹겠다'는 강한 의지로 인간으로 환생했습니다.",
        "평생 솔로로 살다 간 게 불쌍해, 이번 생엔 데이팅 앱이라도 한번 써보라고 신이 마지막 기회를 주셨습니다. 부디 성공하시길."
    ]
};

const generateReason = (base: PastLifeResult, stats: Stats, seed: number): string => {
    // We base the reason on the LOWEST stat - compensating for what was lacking
    const sortedStats = Object.entries(stats).sort((a, b) => b[1] - a[1]);
    const lowestStatKey = sortedStats[sortedStats.length - 1][0];

    const reasons = FUNNY_REASONS[lowestStatKey] || [
        "전생에 너무 착하게 살아서 천국에 갈 뻔했으나, '인간 세상의 매운맛을 좀 더 보고 싶다'는 이상한 취향 때문에 다시 내려왔습니다.",
        "사실 별 이유 없습니다. 저승 환생 트랙터의 뺑뺑이 추첨에서 1등 당첨되셨습니다. 축하드려요."
    ];

    const reasonIndex = Math.abs(seed * 13) % reasons.length;

    return reasons[reasonIndex]
        .replace(/{entityName}/g, base.entityName)
        .replace(/{birthYear}/g, base.birthYear.toString());
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
        popularity: statVal(3),
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
