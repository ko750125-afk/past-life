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
    { name: "고양이", type: "mammal", era: "modern" },
    { name: "강아지", type: "mammal", era: "modern" },
    { name: "토끼", type: "mammal", era: "all" },
    { name: "다람쥐", type: "mammal", era: "all" },
    { name: "물고기", type: "fish", era: "all" },
    { name: "매", type: "bird", era: "all" },
    { name: "까치", type: "bird", era: "all" },
    { name: "두루미", type: "bird", era: "all" },
    { name: "잉어", type: "fish", era: "all" },
    { name: "멧돼지", type: "mammal", era: "all" },
    { name: "족제비", type: "mammal", era: "all" },
    { name: "수달", type: "mammal", era: "all" },
    { name: "박쥐", type: "mammal", era: "all" },
    { name: "고라니", type: "mammal", era: "all" },
    { name: "부엉이", type: "bird", era: "all" },
    { name: "청설모", type: "mammal", era: "all" },
    { name: "너구리", type: "mammal", era: "all" },
    { name: "오소리", type: "mammal", era: "all" },
    { name: "말", type: "mammal", era: "all" },
    { name: "소", type: "mammal", era: "all" },
    { name: "닭", type: "bird", era: "all" },
    { name: "돼지", type: "mammal", era: "all" },
    { name: "학", type: "bird", era: "all" },
    { name: "봉황", type: "mythical", era: "ancient" },
    { name: "해태", type: "mythical", era: "ancient" },
    { name: "용", type: "mythical", era: "ancient" },
    { name: "원숭이", type: "mammal", era: "all" },
    { name: "돌고래", type: "mammal", era: "all" },
    { name: "고래", type: "mammal", era: "all" },
    { name: "상어", type: "fish", era: "all" },
    { name: "문어", type: "fish", era: "all" },
    { name: "오징어", type: "fish", era: "all" },
    { name: "불가사리", type: "fish", era: "all" },
    { name: "해마", type: "fish", era: "all" },
    { name: "나비", type: "insect", era: "all" },
    { name: "벌", type: "insect", era: "all" },
    { name: "잠자리", type: "insect", era: "all" },
    { name: "사마귀", type: "insect", era: "all" },
    { name: "반딧불이", type: "insect", era: "all" },
    { name: "귀뚜라미", type: "insect", era: "all" },
    { name: "매미", type: "insect", era: "all" },
    { name: "개구리", type: "amphibian", era: "all" }
];

export const NICKNAME_TEMPLATES = [
    "전설의", "잊혀진", "고독한", "바람의", "붉은", "푸른", "침묵의", "황금빛",
    "별을 쫓는", "새벽의", "마지막", "숨겨진", "용감한", "지혜로운", "방랑하는",
    "운명을 거스르는", "시간을 달리는", "그림자 속의", "찬란한", "비운의"
];

export const SYMBOLIC_ITEMS = [
    "낡은 지도", "녹슨 검", "비단 부채", "옥피리", "나침반", "망원경", "깃털 펜",
    "깨진 거울", "황금 동전", "은비녀", "가죽 장갑", "나무 지팡이", "청동 거울",
    "약초 주머니", "수정 구슬", "고서적", "투구", "활과 화살", "비단 주머니", "도자기"
];

const STORY_INTRO = [
    "안개가 자욱한 새벽, 먼 과거를 향한 시간의 문이 열립니다. 당신의 영혼은 {era}의 하늘 아래서 처음 숨을 쉬었습니다. {birthYear}년, 세상은 혼란과 기회가 공존하던 때였습니다. 그 시대의 바람은 당신에게 특별한 운명을 속삭였습니다.",
    "오래된 도서관의 낡은 책장을 넘기듯, 당신의 기억 저편에 숨어있던 이야기가 깨어납니다. {era}의 어느 날, {birthYear}년에 당신이라는 존재가 세상에 나타났습니다. 그 해에는 유난히 별이 밝게 빛났으며, 사람들은 당신의 탄생을 예사롭지 않게 여겼습니다.",
    "시간의 강을 거슬러 올라가면 우리는 {era}에 닿게 됩니다. 격동의 역사 속에서 {birthYear}년에 태어난 당신은, 시대의 흐름을 온몸으로 받아들이며 성장했습니다. 그곳의 흙냄새와 바람의 촉감이 아직도 당신의 영혼 깊은 곳에 각인되어 있습니다.",
    "역사가 기록하지 않은 비밀스러운 페이지에 당신의 이름이 적혀 있습니다. {era}, {birthYear}년에 시작된 당신의 삶은 평범함과는 거리가 멀었습니다. 주변의 기대와 호기심 어린 시선 속에서 당신은 자신만의 길을 개척하기 시작했습니다.",
    "전생의 기억은 때로 꿈처럼 흐릿하지만, {era}의 태양 아래 당신의 모습은 선명합니다. {birthYear}년생인 당신은 그 시대가 필요로 하는 자질을 타고났습니다. 혼란스러운 세상 속에서도 당신의 눈빛은 흔들리지 않는 확신으로 가득 차 있었습니다.",
    "먼지 쌓인 유물처럼 잠들어 있던 당신의 과거를 깨워봅니다. {era}의 중심에서, {birthYear}년에 당신의 심장이 뛰기 시작했습니다. 그 시대의 문화와 예술, 그리고 갈등은 당신의 성장에 깊은 영향을 주었으며, 당신 또한 그 시대에 지울 수 없는 흔적을 남겼습니다.",
    "바람이 전해주는 고대의 이야기 속에 당신이 있습니다. {era}라는 거대한 무대 위에서, {birthYear}년에 당신의 막이 올랐습니다. 주어진 운명에 순응하기보다 스스로 운명을 개척하고자 했던 당신의 의지가 느껴집니다.",
    "환상 속에서 피어오르는 연기처럼 당신의 과거가 모습을 드러냅니다. {era}의 풍요와 빈곤이 교차하던 시기, {birthYear}년에 당신은 세상에 첫발을 내디뎠습니다. 남들보다 예민한 감각으로 세상을 바라보던 당신은 일찍이 삶의 이면을 깨달았습니다.",
    "수천 년을 이어온 영혼의 여정 중 가장 강렬했던 순간은 바로 {era}였습니다. {birthYear}년에 태어난 당신은 그 시대의 모순과 아름다움을 동시에 품고 살았습니다. 당신의 삶은 그 자체로 하나의 서사시였으며, 주변 사람들에게 깊은 울림을 주었습니다.",
    "별들이 들려주는 옛 이야기 속 주인공은 바로 당신이었습니다. {era}의 밤하늘을 수놓았던 수많은 별들 중 하나처럼, {birthYear}년에 당신은 지상에 내려왔습니다. 당신의 존재는 그 시대를 살아가는 이들에게 때로는 위로가, 때로는 도전이 되었습니다."
];

const STORY_LIFE = [
    "당신은 {entityName}로서의 삶을 살았습니다. 이는 단순한 역할이 아니었습니다. 당신의 카리스마와 리더십은 주변 사람들을 이끄는 원동력이 되었으며, 위기의 순간마다 빛을 발했습니다. {lifespan}년이라는 짧지 않은 시간 동안 당신은 수많은 도전에 직면했지만, 결코 물러서지 않는 강인함을 보여주었습니다. 당신의 삶은 끊임없는 투쟁과 성취의 연속이었습니다.",
    "{entityName}의 길은 결코 순탄치 않았습니다. 하지만 당신은 타고난 직관력과 지혜로 난관을 헤쳐나갔습니다. 당신의 선택 하나하나는 주변에 큰 영향을 미쳤고, 사람들은 당신의 판단을 신뢰하고 따랐습니다. 당신의 삶은 치열했지만, 그만큼 뜨거운 열정으로 가득 차 있었습니다. 당신은 자신의 한계를 시험하며 매일 조금씩 성장해 나갔습니다.",
    "조용하지만 묵직한 존재감으로 {entityName}의 위치에서 최선을 다했습니다. 당신은 화려하게 드러나기보다 묵묵히 자신의 소임을 다하는 사람이었습니다. 성실함과 끈기는 당신의 가장 큰 무기였으며, {lifespan}년의 생애 동안 빚어낸 성과는 후대에까지 은은한 향기를 남겼습니다. 당신의 삶은 잔잔한 강물처럼 깊고 넓었습니다.",
    "자유로운 영혼을 가진 {entityName}(으)로서, 당신은 얽매이지 않는 삶을 추구했습니다. 세상의 규범보다는 자신의 신념을 중요시했던 당신의 행보는 때로 파격적이었지만, 많은 이들에게 영감을 주었습니다. 당신의 삶은 한 편의 예술 작품과도 같았습니다. 당신이 머무는 곳마다 새로운 변화의 바람이 불었습니다.",
    "당신은 {entityName}로서 누구보다 치열한 삶을 살았습니다. 전략적인 사고와 냉철한 판단력으로 경쟁자들을 물리치고 자신만의 영역을 구축했습니다. 승리의 기쁨도 있었지만, 고독함 또한 당신의 벗이었습니다. 그러나 당신은 그 고독마저도 즐길 줄 아는 강인한 영혼이었습니다. 당신의 이름은 두려움과 경외의 대상이었습니다.",
    "따뜻한 마음을 가진 {entityName}(으)로서, 당신은 주변을 돌보고 베푸는 삶을 살았습니다. 당신의 손길이 닿는 곳마다 생명이 피어나고 갈등이 해소되었습니다. 권력이나 명예보다는 사람의 마음을 얻는 것을 소중히 여겼던 당신은 진정한 치유자였습니다. 당신의 친절은 메마른 땅에 내리는 단비와 같았습니다.",
    "호기심 많은 {entityName}(으)로서, 당신은 미지의 세계를 탐구하는 것을 멈추지 않았습니다. 남들이 보지 못하는 것을 보고, 듣지 못하는 것을 듣는 당신의 능력은 시대를 앞서갔습니다. 당신의 발견과 통찰은 당대에는 이해받지 못해 외로웠을지라도, 결국 진실의 빛을 보게 되었습니다. 당신은 시대를 앞서간 선구자였습니다.",
    "굳건한 신념을 지닌 {entityName}(으)로서, 당신은 정의와 의리를 지키기 위해 싸웠습니다. 불의와 타협하지 않는 당신의 대나무 같은 기개는 뭇사람들의 귀감이 되었습니다. 비록 그 길이 가시밭길이었을지라도, 당신은 {lifespan}년 동안 단 한 번도 비굴하지 않았습니다. 당신의 용기는 많은 이들의 가슴에 불꽃을 심어주었습니다.",
    "예술적 감수성이 풍부한 {entityName}(으)로서, 당신은 세상의 아름다움을 노래하고 그렸습니다. 당신의 감정은 폭풍처럼 격렬하기도 했고 호수처럼 잔잔하기도 했습니다. 당신이 남긴 작품과 이야기들은 메마른 세상에 단비와 같은 존재였습니다. 당신은 세상의 색채를 더하는 존재였습니다.",
    "지혜로운 {entityName}(으)로서, 당신은 세상의 이치를 깨우치고 이를 사람들에게 전했습니다. 당신의 말 한마디는 천금과도 같아서, 길을 잃은 이들에게 등불이 되어주었습니다. 물질적인 풍요보다는 정신적인 성숙을 추구했던 당신의 삶은 고귀했습니다. 당신은 많은 이들의 스승이자 길잡이였습니다."
];

const STORY_EVENT = [
    "생의 중반, 당신에게는 잊지 못할 결정적 사건이 있었습니다. 거대한 폭풍우가 몰아치듯 시련이 닥쳐왔지만, 당신은 그 속에서 오히려 기회를 발견했습니다. 이 사건을 계기로 당신은 더욱 단단해졌으며, 세상을 바라보는 눈이 완전히 달라지게 되었습니다. 그것은 당신의 영혼이 한 단계 도약하는 순간이었습니다.",
    "어느 날 우연히 마주친 낯선 인연이 당신의 삶을 송두리째 바꿔놓았습니다. 그와의 만남은 당신에게 새로운 목표를 심어주었고, 당신은 이전에 알지 못했던 뜨거운 감정을 경험하게 되었습니다. 그 사랑과 우정의 기억은 수백 년이 지난 지금도 당신의 무의식 속에 따스한 온기로 남아있습니다.",
    "당신은 역사적인 사건의 한복판에 서게 되었습니다. 선택의 기로에서 당신은 개인의 안위보다 대의를 위한 결단을 내렸습니다. 그 선택은 당신에게 큰 희생을 요구했지만, 동시에 누구도 흉내 낼 수 없는 명예를 안겨주었습니다. 후대 사람들은 당신의 그 용기 있는 결단을 기억합니다.",
    "깊은 깨달음의 순간이 찾아왔습니다. 오랜 방황 끝에 당신은 자신이 진정으로 원하는 것이 무엇인지 알게 되었습니다. 그날 이후 당신의 삶은 180도 달라졌으며, 불필요한 욕심을 버리고 오직 본질에 집중하는 삶을 살게 되었습니다. 그것은 진정한 자유를 향한 첫걸음이었습니다.",
    "당신은 일생일대의 위기를 맞이했지만, 기적적으로 살아남았습니다. 죽음의 문턱까지 갔다가 돌아온 당신은 삶의 소중함을 누구보다 절실히 깨달았습니다. 이후 당신은 하루하루를 선물처럼 여기며 더욱 열정적으로 살았고, 주변 사람들에게 희망의 증거가 되었습니다.",
    "뜻밖의 행운이 당신을 찾아왔습니다. 우연히 얻게 된 재물이나 기회는 당신의 삶을 풍요롭게 만들었지만, 당신은 그것에 안주하지 않았습니다. 오히려 그 행운을 주변과 나누며 더 큰 가치를 창출했습니다. 당신의 너그러움은 많은 이들의 칭송을 받았습니다.",
    "당신은 큰 상실을 경험했습니다. 소중한 사람이나 물건을 잃은 슬픔은 깊었지만, 그 슬픔은 당신을 더욱 성숙하게 만들었습니다. 상처를 치유하는 과정에서 당신은 타인의 아픔에 공감하는 능력을 갖게 되었고, 진정한 위로자가 되었습니다.",
    "먼 곳으로의 여행이 당신의 운명을 바꿨습니다. 낯선 땅에서 접한 새로운 문화와 사람들은 당신의 식견을 넓혀주었습니다. 우물 안 개구리에서 벗어나 더 넓은 세상을 품게 된 당신은, 돌아와서도 그 넓은 시야로 세상을 변화시켰습니다.",
    "당신은 오랫동안 공들여 준비한 일이 수포로 돌아가는 실패를 겪었습니다. 하지만 좌절하는 대신, 그 실패를 디딤돌 삼아 다시 일어설 준비를 했습니다. 그 끈기와 불굴의 의지는 이후 당신을 더 높은 곳으로 올려놓는 결정적인 원동력이 되었습니다.",
    "비밀스러운 지식이나 보물을 발견하게 되었습니다. 이것은 당신에게 큰 힘이 되었지만 동시에 위험을 초래하기도 했습니다. 지혜롭게 그 힘을 다스리며 균형을 유지하려 노력했던 당신의 고군분투는, 현생의 당신에게 신중함과 통찰력을 선물했습니다."
];

const STORY_LEGACY = [
    "{deathYear}년, 당신의 육신은 흙으로 돌아갔지만, 그 정신은 여전히 대지 위에 머물렀습니다. 당신이 남긴 발자취는 누군가의 이정표가 되었고, 당신이 베푼 사랑은 민들레 홀씨처럼 퍼져나갔습니다. 현재의 당신이 유독 {items[0]}에 끌리는 이유는 아마도 그때의 기억이 무의식 깊은 곳에 남아있기 때문일 것입니다. 당신의 영혼은 시공간을 넘어 여전히 그 물건을 기억하고 있습니다.",
    "삶의 불꽃이 사그라진 {deathYear}년 이후에도 당신의 이야기는 전설처럼 구전되었습니다. 당신이 생전에 아꼈던 {items[1]}에는 여전히 당신의 온기가 서려 있는 듯합니다. 현생에서 당신이 느끼는 이유 모를 그리움과 갈망은, 전생에서 미처 다 이루지 못한 꿈의 조각들일지도 모릅니다. 그 꿈을 이루는 것이 이번 생의 과제일 수 있습니다.",
    "{deathYear}년에 눈을 감는 순간, 당신은 후회 없는 삶이었노라 미소 지었습니다. 당신의 영혼은 휴식을 취한 뒤 새로운 여정을 준비했습니다. 지금 당신이 가진 뛰어난 직관력과 재능은 전생의 {entityName}로서 갈고닦은 결과물입니다. 과거의 경험은 당신의 가장 든든한 자산이며, 미래를 여는 열쇠가 될 것입니다.",
    "역사의 뒤안길로 사라진 {deathYear}년, 하지만 잊혀진 것은 아닙니다. 당신의 강인한 생명력은 시공간을 넘어 현생의 당신에게 이어졌습니다. 가끔 꿈속에서 마주하는 낯선 풍경이나 설명할 수 없는 데자뷔는 모두 그 시절 당신이 치열하게 살아냈던 증거입니다. 당신의 영혼은 그 모든 순간을 기억하고 있습니다.",
    "당신이 떠난 {deathYear}년, 많은 이들이 슬퍼하며 당신을 기렸습니다. 당신이 세상을 바라보던 따뜻한 시선은 현생의 당신에게 고스란히 전해져, 주변 사람들을 편안하게 만드는 매력으로 발현되고 있습니다. 당신은 여전히 누군가에게 필요한 존재이며, 세상에 따스함을 전하는 통로입니다.",
    "{deathYear}년, 당신은 바람이 되어 세상 곳곳을 자유롭게 떠다녔습니다. 그 자유로움은 현생의 당신이 가진 창의성과 엉뚱함의 원천입니다. 구속받기 싫어하고 새로운 것을 추구하는 성향은, 수백 년 전부터 이어져 온 당신의 고유한 영혼의 색깔입니다. 그 색깔을 마음껏 펼치세요.",
    "침묵 속에 잠든 {deathYear}년의 겨울을 기억하시나요? 당신이 남긴 고독하지만 고고했던 정신은 현생의 당신에게 깊은 내면의 힘을 선물했습니다. 혼자 있는 시간을 즐기고 사색을 좋아하는 것은, 당신이 오래전부터 스스로와 대화하는 법을 알았기 때문입니다. 그 내면의 힘이 당신을 지탱해 줄 것입니다.",
    "{deathYear}년의 마지막 노을을 바라보며 당신은 다음 생을 기약했습니다. 그리고 약속처럼 다시 돌아왔습니다. 전생에 {items[0]}와(과) 인연이 깊었던 만큼, 이번 생에서도 그것은 당신에게 행운의 부적과 같은 역할을 할 것입니다. 소중히 다루세요. 그것이 당신에게 새로운 기회를 가져다줄지도 모릅니다.",
    "당신의 여정이 멈춘 {deathYear}년, 세상은 하나의 별을 잃었습니다. 그러나 그 별빛은 사라지지 않고 당신의 내면에 깃들어 있습니다. 현생에서 당신이 문득문득 느끼는 사명감이나 책임감은, 전생에서 {entityName}로서 다하지 못한 과업을 완수하려는 영혼의 의지입니다. 당신은 그 과업을 완수할 능력이 있습니다.",
    "{deathYear}년의 어느 날, 당신은 평온하게 눈을 감았습니다. 당신이 쌓아올린 덕과 업적은 보이지 않는 끈이 되어 현생의 당신을 돕고 있습니다. 위기 상황에서 뜻밖의 도움을 받거나 운이 좋다고 느끼는 순간이 있다면, 그것은 과거의 당신이 보내는 선물입니다. 감사한 마음으로 그 선물을 받으세요."
];

const STORY_ADVICE = [
    "운명의 수레바퀴는 돌고 돕니다. 전생의 지혜를 빌어 조언하건대, 당신의 직감을 믿으세요. 눈에 보이는 것 너머의 진실을 볼 줄 아는 눈이 당신에게는 이미 있습니다.\n\"가장 밝은 별은 가장 깊은 어둠 속에서 빛난다.\"",
    "과거는 미래를 비추는 거울입니다. {entityName}의 기상을 품고 현재의 어려움에 당당히 맞서세요. 당신 안에는 당신도 모르는 거대한 잠재력이 잠자고 있습니다.\n\"두려움은 직면하는 순간 용기가 된다.\"",
    "인연의 끈은 질기고도 오묘합니다. 주변 사람들을 소중히 여기되, 당신 자신의 목소리를 잃지 마세요. 균형 잡힌 삶이야말로 당신의 영혼이 가장 원하던 바입니다.\n\"진정한 강함은 부드러움 속에 있다.\"",
    "시간은 흐르는 것이 아니라 쌓이는 것입니다. 매 순간을 충실히 살아가되, 결과에 너무 연연하지 마세요. 과정 속에서 배우는 즐거움이 당신을 더 높은 곳으로 이끌 것입니다.\n\"천 리 길도 한 걸음부터, 당신의 발자국은 역사가 된다.\"",
    "당신의 영혼은 자유를 갈망하고 있습니다. 틀에 박힌 생각에서 벗어나 과감하게 도전해보세요. 실패를 두려워하지 않는 마음이 당신을 진정한 성공으로 인도할 것입니다.\n\"날개가 없는 자는 절벽을 두려워하지만, 날개가 있는 자는 바람을 기다린다.\""
];

// Existing Interfaces...
export interface Stats {
    charisma: number;
    survivability: number;
    strategy: number;
    intuition: number;
    influence: number;
    fate: number;
}

export interface PastLifeResult {
    type: "animal" | "human";
    era: Era;
    birthYear: number;
    deathYear: number;
    lifespan: number;
    entityName: string;
}

export interface SessionResult extends PastLifeResult {
    stats: Stats;
    nickname: string;
    items: string[];
    story: string; // Add story to the interface
}

// Existing Determine Function...
export const determinePastLife = (seed: number): PastLifeResult => {
    const typeSeed = Math.abs(seed ^ 12345);
    const isHuman = typeSeed % 10 === 0;
    const type = isHuman ? "human" : "animal";

    const eraIndex = Math.abs(seed) % ERA_LIST.length;
    const era = ERA_LIST[eraIndex];

    const duration = era.endYear - era.startYear;
    const birthOffset = Math.abs(seed) % duration;
    const birthYear = era.startYear + birthOffset;

    const lifespan = 40 + (Math.abs(seed) % 46);
    const deathYear = birthYear + lifespan;

    let entityName = "";
    if (isHuman) {
        const jobIndex = Math.abs(seed) % HUMAN_JOBS.length;
        entityName = HUMAN_JOBS[jobIndex];
    } else {
        let candidates = ANIMALS;
        const isAncient = era.name.includes("선사") || era.name.includes("고조선") || era.name.includes("삼국");
        candidates = ANIMALS.filter(animal => {
            if (animal.era === 'all') return true;
            if (animal.type === 'mythical' && isAncient) return true;
            if ((animal.name === '강아지' || animal.name === '고양이') && !isAncient) return true;
            return false;
        });
        if (candidates.length === 0) candidates = ANIMALS;
        const animalIndex = Math.abs(seed) % candidates.length;
        entityName = candidates[animalIndex].name;
    }

    return { type, era, birthYear, deathYear, lifespan, entityName };
};

const generateStory = (base: PastLifeResult, seed: number, items: string[]): string => {
    // Generate a story based on 30+ blocks.
    // Need Intro, Life, Event, Legacy, Advice.

    // Seed usage for consistent but varied selection
    const introIndex = Math.abs(seed) % STORY_INTRO.length;
    const lifeIndex = Math.abs(seed * 7 + 123) % STORY_LIFE.length;
    const eventIndex = Math.abs(seed * 11 + 321) % STORY_EVENT.length;
    const legacyIndex = Math.abs(seed * 13 + 456) % STORY_LEGACY.length;
    const adviceIndex = Math.abs(seed * 23 + 789) % STORY_ADVICE.length;

    const replaceVars = (text: string) => {
        return text
            .replace(/{era}/g, base.era.name)
            .replace(/{birthYear}/g, base.birthYear < 0 ? `기원전 ${Math.abs(base.birthYear)}` : `${base.birthYear}`)
            .replace(/{deathYear}/g, base.deathYear < 0 ? `기원전 ${Math.abs(base.deathYear)}` : `${base.deathYear}`)
            .replace(/{entityName}/g, base.entityName)
            .replace(/{lifespan}/g, base.lifespan.toString())
            .replace(/{items\[0\]}/g, items[0])
            .replace(/{items\[1\]}/g, items[1]);
    };

    const paragraphs = [
        STORY_INTRO[introIndex],
        STORY_LIFE[lifeIndex],
        STORY_EVENT[eventIndex],
        STORY_LEGACY[legacyIndex],
        STORY_ADVICE[adviceIndex]
    ];

    return paragraphs.map(p => replaceVars(p)).join("\n\n");
};

export const generateSessionVariations = (seed: number, sessionId: string): SessionResult => {
    const baseResult = determinePastLife(seed);

    // Combine seed and sessionId string to create a variation hash
    let variationHash = 0;
    const combo = `${seed}-${sessionId}`;
    for (let i = 0; i < combo.length; i++) {
        variationHash = ((variationHash << 5) - variationHash) + combo.charCodeAt(i);
        variationHash |= 0;
    }
    variationHash = Math.abs(variationHash);

    // 1. Stats (0-100)
    const statVal = (offset: number) => {
        return (variationHash + offset * 1337) % 101;
    };

    const stats: Stats = {
        charisma: statVal(1),
        survivability: statVal(2),
        strategy: statVal(3),
        intuition: statVal(4),
        influence: statVal(5),
        fate: statVal(6),
    };

    // 2. Nickname
    const nicknameIndex = variationHash % NICKNAME_TEMPLATES.length;
    const adjective = NICKNAME_TEMPLATES[nicknameIndex];
    const nickname = `${adjective} ${baseResult.entityName}`;

    // 3. Symbolic Items
    const itemIndex1 = variationHash % SYMBOLIC_ITEMS.length;
    let itemIndex2 = (variationHash * 7 + 13) % SYMBOLIC_ITEMS.length;
    if (itemIndex1 === itemIndex2) {
        itemIndex2 = (itemIndex2 + 1) % SYMBOLIC_ITEMS.length;
    }

    const items = [SYMBOLIC_ITEMS[itemIndex1], SYMBOLIC_ITEMS[itemIndex2]];

    // 4. Story Generation
    const story = generateStory(baseResult, variationHash, items);

    return {
        ...baseResult,
        stats,
        nickname,
        items,
        story
    };
};
