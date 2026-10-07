// =========================
// CP 제조기 🎲
// 랜덤 설정 데이터
// =========================

const genders = ["남성", "여성"];

const outerPersonalities = [
  "무뚝뚝하고 말수가 적다",
  "능글맞고 장난기가 많다",
  "누구에게나 친절하고 부드럽다",
  "까칠하고 쉽게 마음을 열지 않는다",
  "밝고 사람들과 금방 친해진다",
  "차분하고 감정을 잘 드러내지 않는다",
  "솔직하고 직설적이다",
  "예의 바르고 빈틈이 없다",
  "느긋하고 웬만한 일에는 동요하지 않는다",
  "자존심이 세고 지는 것을 싫어한다",
  "조용하지만 할 말은 반드시 한다",
  "붙임성이 좋고 분위기를 잘 띄운다",
  "냉정하고 계산적으로 보인다",
  "엉뚱하고 자기만의 세계가 강하다",
  "다정하고 남을 잘 챙긴다",
  "소심하고 낯을 많이 가린다",
  "도도하고 타인에게 무관심해 보인다",
  "호기심이 많고 사고를 자주 친다",
  "원칙적이고 융통성이 없어 보인다",
  "매사에 자신만만하고 당당하다",
  "조용하고 존재감이 옅은 편이다",
  "말보다 행동이 앞선다",
  "감정 표현이 풍부하고 솔직하다",
  "늘 웃고 있지만 속을 알기 어렵다",
  "완벽주의적이고 자기관리가 철저하다",
  "귀찮은 일을 극도로 싫어한다",
  "사교적이지만 일정한 거리를 유지한다",
  "승부욕이 강하고 도발에 쉽게 넘어간다",
  "천진난만하고 사람을 잘 믿는다",
  "말투는 거칠지만 행동은 의외로 친절하다",
  "상냥하지만 어딘가 서늘한 분위기가 있다",
  "장난스러워 보이지만 중요한 순간에는 진지하다",
  "침착하고 상황 판단이 빠르다",
  "제멋대로이고 자유분방하다",
  "책임감이 강하고 남을 이끄는 데 익숙하다",
  "시니컬하고 세상사에 관심 없는 척한다",
  "수줍음이 많지만 친해지면 말이 많아진다",
  "감정 기복이 적고 늘 담담하다",
  "말수가 많고 생각한 것을 바로 입 밖으로 낸다",
  "사람을 관찰하는 것을 좋아하고 눈치가 빠르다"
];

const innerPersonalities = [
  "한번 자기 사람이라고 생각하면 끝까지 책임진다",
  "사실 상처를 쉽게 받지만 절대 티 내지 않는다",
  "사람을 쉽게 믿지 못한다",
  "애정 표현에 몹시 서툴다",
  "은근히 질투가 많다",
  "인정받고 싶어 하는 마음이 크다",
  "혼자 남겨지는 것을 두려워한다",
  "자신보다 타인을 먼저 챙기는 버릇이 있다",
  "한번 받은 친절을 오래 기억한다",
  "싫어하는 사람에게조차 쉽게 모질게 굴지 못한다",
  "좋아하는 상대 앞에서는 평소보다 말이 없어진다",
  "자신의 약한 모습을 보이는 것을 싫어한다",
  "의외로 낭만적인 면이 있다",
  "중요한 사람에게는 유난히 관대하다",
  "스스로에게 지나치게 엄격하다",
  "누군가에게 의지하는 것을 어려워한다",
  "자신이 사랑받을 수 있다는 확신이 부족하다",
  "한번 마음을 주면 쉽게 거두지 못한다",
  "겉보기보다 책임감이 훨씬 강하다",
  "과거의 실수를 아직도 마음에 담아두고 있다",
  "관심 없는 척하면서 상대의 사소한 것까지 기억한다",
  "자기 감정보다 상대의 감정을 먼저 살핀다",
  "상대에게 도움이 되는 사람이고 싶어 한다",
  "가까운 사람에게만 유치한 모습을 보인다",
  "의외로 겁이 많지만 중요한 순간에는 물러서지 않는다",
  "자신이 버려지는 상황을 무엇보다 싫어한다",
  "사과하는 데 서툴러 행동으로 대신한다",
  "칭찬에 약하지만 아닌 척한다",
  "누군가 자신을 필요로 하는 상황에 약하다",
  "좋아하는 사람에게는 생각보다 집요하다",
  "타인의 호의를 의심하는 습관이 있다",
  "상대가 행복하다면 자신의 마음 정도는 숨길 수 있다고 생각한다",
  "겉으로는 여유롭지만 실패를 심하게 두려워한다",
  "정이 많아서 관계를 쉽게 끊지 못한다",
  "자기 편이라고 생각한 사람은 무조건적으로 감싼다",
  "말하지 않아도 알아주길 바라는 면이 있다",
  "감정을 깨닫는 속도가 유난히 느리다",
  "사랑보다 신뢰를 훨씬 중요하게 생각한다",
  "마음에 둔 상대와의 약속은 아무리 사소해도 기억한다",
  "평소에는 이성적이지만 소중한 사람이 관련되면 판단력이 흐려진다"
];

const worlds = {
  "현대": [
    "회사원", "교사", "작가", "바리스타", "배우",
    "사진작가", "대학생", "대학원생", "의사", "연구원",
    "디자이너", "기자", "형사", "서점 직원", "게임 개발자"
  ],

  "판타지 왕국": [
    "기사", "마법사", "사제", "용병", "귀족",
    "약초사", "왕실 학자", "궁정 의사", "상인", "음유시인",
    "근위기사", "마탑 연구원", "왕족", "모험가", "연금술사"
  ],

  "마법 아카데미": [
    "우등생", "문제아", "학생회 임원", "기숙사장", "마법약 전공생",
    "검술 전공생", "치유마법 전공생", "소환술 전공생", "교수 조교",
    "도서관 관리자", "교환학생", "장학생", "귀족 학생", "평민 학생",
    "정체를 숨긴 학생"
  ],

  "헌터 세계": [
    "S급 헌터", "신입 헌터", "길드장", "힐러", "탱커",
    "딜러", "게이트 연구원", "협회 직원", "정보상", "길드 전략가",
    "각성자 관리관", "솔로 헌터", "구조 전문 헌터", "정체불명의 각성자"
  ],

  "제국 궁정": [
    "황족", "황실 기사", "공작가 후계자", "궁정 마법사", "시종",
    "외교관", "황실 의사", "정보부 요원", "귀족", "근위대장",
    "황실 서기관", "타국의 사절", "몰락 귀족", "황실 교사"
  ],

  "동양풍 판타지": [
    "검객", "술사", "의원", "상단 후계자", "황족",
    "호위무사", "도사", "관리", "객잔 주인", "정보상",
    "퇴마사", "서생", "장군", "약재상"
  ],

  "SF 우주": [
    "우주선 함장", "파일럿", "정비사", "연구원", "의무관",
    "안드로이드", "현상금 사냥꾼", "탐사대원", "통신 담당관",
    "보안요원", "밀수업자", "외교관", "행성 조사관", "AI 연구자"
  ],

  "포스트 아포칼립스": [
    "생존자", "의무 담당", "정찰병", "거점 지도자", "기술자",
    "농업 담당", "전직 군인", "연구원", "떠돌이", "구조대원",
    "통신 담당", "상인", "기록자", "경비대원"
  ],

  "초능력 기관": [
    "최상위 능력자", "신입 능력자", "요원", "연구원", "감시관",
    "치료 담당", "정보 분석관", "훈련 교관", "기관장 후보",
    "통제 불능 능력자", "잠입 요원", "민간 협력자", "능력자 담당관"
  ],

  "연예계": [
    "아이돌", "배우", "매니저", "작곡가", "안무가",
    "사진작가", "스타일리스트", "신인 배우", "톱스타", "연습생",
    "방송 작가", "프로듀서", "뮤지컬 배우", "모델"
  ]
};

const relationships = [
  "처음 만난 사이",
  "소꿉친구",
  "오래된 친구",
  "라이벌",
  "서로를 못마땅해하는 동료",
  "선배와 후배",
  "상사와 부하",
  "계약으로 얽힌 사이",
  "서로 다른 목적을 가진 동료",
  "한때 절친했던 사이",
  "오랜만에 재회한 사이",
  "서로의 정체를 모르는 협력자",
  "적대 진영에 속한 두 사람",
  "어쩔 수 없이 함께 행동하게 된 사이",
  "한쪽이 다른 한쪽에게 빚을 진 사이",
  "서로 경쟁해야 하는 사이",
  "비밀을 공유하게 된 사이",
  "같은 목표를 쫓는 동료",
  "서로를 감시해야 하는 사이",
  "한쪽이 다른 한쪽의 보호를 맡게 된 사이",
  "사사건건 부딪히는 파트너",
  "서로의 능력을 인정하는 라이벌",
  "과거에 잠깐 만난 적이 있는 사이",
  "서로를 오해하고 있는 사이",
  "공동의 적 때문에 손을 잡은 사이",
  "서로에게 유일한 말 상대가 되어버린 사이",
  "원래라면 절대 만날 일이 없었던 사이",
  "한쪽이 일방적으로 경쟁심을 불태우는 사이",
  "서로에게 약점을 잡힌 사이",
  "함께 큰 사건을 겪고 살아남은 사이"
];

const twists = [
  "A만 두 사람의 과거를 기억하고 있다",
  "B만 두 사람의 과거를 기억하고 있다",
  "둘은 어린 시절 이미 한 번 만난 적이 있다",
  "A는 B의 정체를 알고 있지만 모르는 척하고 있다",
  "B는 A의 정체를 알고 있지만 모르는 척하고 있다",
  "둘 중 한 명은 처음부터 상대를 찾고 있었다",
  "둘은 서로 같은 비밀을 숨기고 있다",
  "두 사람의 목표는 같지만 그 이유는 완전히 다르다",
  "둘 중 한 명은 상대에게 갚지 못한 빚이 있다",
  "서로 적이라고 생각하지만 실제로는 같은 편이다",
  "두 사람 모두 상대가 자신을 싫어한다고 착각하고 있다",
  "주변 사람들은 이미 둘의 관계를 수상하게 보고 있다",
  "둘 사이에는 아무도 모르는 약속이 하나 있다",
  "한쪽은 상대를 오래전부터 동경해왔다",
  "한쪽은 상대에게 자신의 진짜 신분을 숨기고 있다",
  "둘이 함께 있을 때만 해결되는 문제가 있다",
  "한쪽이 위험해지면 다른 한쪽도 함께 위험해진다",
  "둘 중 한 명은 상대를 보호하라는 비밀 명령을 받았다",
  "둘 중 한 명은 언젠가 상대를 떠나야 한다",
  "서로에게 절대 말할 수 없는 목적이 하나씩 있다",
  "과거의 사건 때문에 둘은 서로를 완전히 다르게 기억한다",
  "한쪽은 상대에게 미안한 일을 숨기고 있다",
  "둘만 이해할 수 있는 신호나 암호가 있다",
  "두 사람은 우연이라고 생각하지만 계속 마주치도록 누군가가 계획하고 있다",
  "한쪽은 상대의 약점을 알고도 이용하지 않았다",
  "둘은 같은 사람에게 서로 다른 이야기를 들었다",
  "한쪽은 상대가 자신을 기억하지 못할 거라고 생각한다",
  "둘 사이의 첫 만남에는 아직 밝혀지지 않은 진실이 있다",
  "둘 중 한 명은 상대가 자신보다 더 중요한 임무를 맡았다는 사실을 모른다",
  "서로를 믿지 않으면서도 이상하게 결정적인 순간에는 상대의 판단을 따른다"
];

const moods = [
  "티격태격",
  "잔잔한 신뢰",
  "미묘한 긴장감",
  "서서히 가까워지는 관계",
  "애틋함",
  "상극인데 이상하게 잘 맞음",
  "서로에게만 유난히 약함",
  "말보다 행동으로 쌓이는 신뢰",
  "경계와 호기심 사이",
  "오래 묵은 감정",
  "서로를 인정하지 않으려 함",
  "둘만 모르는 특별한 관계"
];


// =========================
// 랜덤 함수
// =========================

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getGender(name) {
  const selected = document.querySelector(
    `input[name="${name}"]:checked`
  ).value;

  if (selected === "random") {
    return randomItem(genders);
  }

  return selected === "male" ? "남성" : "여성";
}


// =========================
// 설정 생성
// =========================

function generatePairing() {

  const genderA = getGender("genderA");
  const genderB = getGender("genderB");

  const world = randomItem(Object.keys(worlds));

  const jobs = worlds[world];

  let jobA = randomItem(jobs);
  let jobB = randomItem(jobs);

  // 가능하면 같은 역할이 겹치지 않게
  if (jobs.length > 1) {
    while (jobB === jobA) {
      jobB = randomItem(jobs);
    }
  }

  const outerA = randomItem(outerPersonalities);
  const outerB = randomItem(outerPersonalities);

  const innerA = randomItem(innerPersonalities);
  const innerB = randomItem(innerPersonalities);

  const relationship = randomItem(relationships);
  const twist = randomItem(twists);
  const mood = randomItem(moods);

  document.getElementById("characterA").innerHTML =
    `<strong>${genderA} · ${jobA}</strong><br>
     겉으로는 ${outerA}.<br>
     하지만 속으로는 ${innerA}.`;

  document.getElementById("characterB").innerHTML =
    `<strong>${genderB} · ${jobB}</strong><br>
     겉으로는 ${outerB}.<br>
     하지만 속으로는 ${innerB}.`;

  document.getElementById("world").textContent = world;

  document.getElementById("relationship").textContent =
    `${relationship} · ${mood}`;

  document.getElementById("twist").textContent = twist;

  document.getElementById("result").hidden = false;

  // 결과 위치로 부드럽게 이동
  document.getElementById("result").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}


// =========================
// 버튼 연결
// =========================

document
  .getElementById("generateBtn")
  .addEventListener("click", generatePairing);


document
  .getElementById("storyBtn")
  .addEventListener("click", async () => {

    const storyBtn = document.getElementById("storyBtn");

    const characterA =
      document.getElementById("characterA").innerText;

    const characterB =
      document.getElementById("characterB").innerText;

    const world =
      document.getElementById("world").innerText;

    const relationship =
      document.getElementById("relationship").innerText;

    const twist =
      document.getElementById("twist").innerText;

    storyBtn.disabled = true;
    storyBtn.textContent = "✨ 서사 만드는 중...";

    try {

      const response = await fetch("/api/story", {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          characterA,
          characterB,
          world,
          relationship,
          twist
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "서사를 만들지 못했어요.");
      }

      alert(data.story);

    } catch (error) {

      console.error(error);
      alert("🥲 서사를 만드는 중 문제가 생겼어요.");

    } finally {

      storyBtn.disabled = false;
      storyBtn.textContent = "✨ 이 조합으로 맛보기 서사 보기";

    }
  });document
  .getElementById("storyBtn")
  .addEventListener("click", async () => {

    const storyBtn = document.getElementById("storyBtn");

    const characterA =
      document.getElementById("characterA").innerText;

    const characterB =
      document.getElementById("characterB").innerText;

    const world =
      document.getElementById("world").innerText;

    const relationship =
      document.getElementById("relationship").innerText;

    const twist =
      document.getElementById("twist").innerText;

    storyBtn.disabled = true;
    storyBtn.textContent = "✨ 서사 만드는 중...";

    try {

      const response = await fetch("/api/story", {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          characterA,
          characterB,
          world,
          relationship,
          twist
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "서사를 만들지 못했어요.");
      }

const storyBox = document.getElementById("storyBox");
const storyText = document.getElementById("storyText");
const longStoryBtn = document.getElementById("longStoryBtn");

storyText.textContent = data.story;
storyBox.hidden = false;
longStoryBtn.hidden = false;

storyBox.scrollIntoView({
  behavior: "smooth",
  block: "start"
});
    } catch (error) {

      console.error(error);
      alert("🥲 서사를 만드는 중 문제가 생겼어요.");

    } finally {

      storyBtn.disabled = false;
      storyBtn.textContent = "✨ 이 조합으로 맛보기 서사 보기";

    }
  });
