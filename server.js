import express from "express";
import OpenAI from "openai";

const app = express();
const PORT = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json({ limit: "20kb" }));
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/story", async (req, res) => {
  try {
    const {
      characterA,
      characterB,
      world,
      relationship,
      twist
    } = req.body ?? {};

    if (
      !characterA ||
      !characterB ||
      !world ||
      !relationship ||
      !twist
    ) {
      return res.status(400).json({
        error: "설정 정보가 부족해요."
      });
    }

const prompt = `
다음은 랜덤으로 생성된 두 캐릭터의 설정이다.

[캐릭터 A]
${characterA}

[캐릭터 B]
${characterB}

[세계관]
${world}

[두 사람의 관계]
${relationship}

[관계의 특이점]
${twist}

위 설정을 바탕으로 두 캐릭터에게 자연스럽게 이입할 수 있는
짧은 장면형 서사를 한국어로 작성해라.

[중요한 원칙]
- 주어진 설정은 유지하고 새로운 핵심 설정을 임의로 만들지 않는다.
- 캐릭터의 이름을 새로 만들지 않는다.
- "A", "B", "캐릭터 A", "캐릭터 B" 같은 호칭을 이야기 속에서 사용하지 않는다.
- 직업, 역할, 자연스러운 대명사나 호칭으로 두 사람을 구분한다.
- 독자가 두 사람의 관계와 감정을 직접 느낄 수 있도록 한 장면에 집중한다.

[문체]
- 설정을 설명하거나 요약하기보다 실제로 눈앞에서 벌어지는 장면처럼 쓴다.
- 행동, 표정, 시선, 침묵, 말투와 짧은 대사를 적극적으로 활용한다.
- "다정한 성격이다", "상대를 신경 쓰기 시작했다"처럼 감정을 직접 설명하기보다 행동과 반응으로 보여준다.
- 두 캐릭터의 겉성격과 속성격이 행동이나 대화에 자연스럽게 드러나게 한다.
- 대사는 설명을 위한 대사가 아니라 각자의 성격과 관계가 느껴지도록 쓴다.
- 주변 상황과 작은 감각 묘사를 적절히 넣어 장면에 몰입할 수 있게 한다.
- 지나치게 거창하거나 시적인 표현보다는 읽기 편한 웹소설풍 문체를 사용한다.

[관계 표현]
- 처음부터 서로의 감정을 확정하거나 사랑이라고 단정하지 않는다.
- 작은 신경 쓰임, 익숙함, 경계, 호기심, 긴장감처럼 현재 관계에 어울리는 미묘한 감정을 보여준다.
- 주어진 관계와 특이점이 장면 속 사건이나 대화에 실제로 영향을 주게 한다.
- 두 사람이 서로 다른 사람처럼 느껴지도록 반응과 말투에 차이를 둔다.

[출력]
- 하나의 짧은 장면으로 완결감 있게 작성한다.
- 약 500~700자 정도로 작성한다.
- 제목은 쓰지 않는다.
- 설정표나 해설을 덧붙이지 않고 이야기 본문만 출력한다.
`;

const response = await client.responses.create({
  model: "gpt-6-luna",
  input: prompt,
  max_output_tokens: 1500
});

const story = response.output_text?.trim();

if (!story) {
  console.error("스토리 텍스트 없음:", {
    status: response.status,
    incomplete_details: response.incomplete_details
  });

  return res.status(500).json({
    error: "서사 내용이 비어 있어요. 다시 시도해 주세요."
  });
}

res.json({
  story
});

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "서사를 만드는 중 문제가 생겼어요."
    });
  }
});

app.post("/api/long-story", async (req, res) => {
  try {
    const {
      characterA,
      characterB,
      world,
      relationship,
      twist,
      shortStory
    } = req.body ?? {};

    if (
      !characterA ||
      !characterB ||
      !world ||
      !relationship ||
      !twist ||
      !shortStory
    ) {
      return res.status(400).json({
        error: "긴 서사를 만들기 위한 정보가 부족해요."
      });
    }

    const prompt = `
다음은 두 캐릭터의 설정과, 이 설정을 바탕으로 작성된 짧은 맛보기 장면이다.

[캐릭터 A]
${characterA}

[캐릭터 B]
${characterB}

[세계관]
${world}

[두 사람의 관계]
${relationship}

[관계의 특이점]
${twist}

[기존 맛보기 장면]
${shortStory}

위의 설정과 기존 장면을 바탕으로,
독자가 두 캐릭터에게 자연스럽게 이입할 수 있는 조금 더 긴 장면형 서사를 한국어로 작성해라.

[중요한 원칙]
- 주어진 캐릭터 설정, 세계관, 관계, 특이점을 유지한다.
- 기존 맛보기 장면에서 드러난 두 사람의 말투와 분위기, 관계성을 유지한다.
- 캐릭터의 이름을 새로 만들지 않는다.
- "A", "B", "캐릭터 A", "캐릭터 B" 같은 호칭을 이야기 속에서 사용하지 않는다.
- 직업, 역할, 자연스러운 대명사나 호칭으로 두 사람을 구분한다.
- 새로운 핵심 설정이나 과거사를 임의로 추가하지 않는다.

[문체]
- 설정을 설명하거나 요약하지 말고 실제로 벌어지는 장면처럼 쓴다.
- 행동, 표정, 시선, 침묵, 말투와 대사를 적극적으로 활용한다.
- 감정을 직접 설명하기보다 행동과 반응으로 보여준다.
- 두 캐릭터의 겉성격과 속성격이 자연스럽게 드러나게 한다.
- 두 사람의 말투와 반응에 차이를 둔다.
- 주변 상황과 작은 감각 묘사를 적절히 사용한다.
- 지나치게 거창하거나 시적인 표현보다 읽기 편한 웹소설풍 문체를 사용한다.
- 관계의 긴장감이나 미묘한 거리감이 서서히 변화하도록 한다.

[관계 표현]
- 감정을 갑자기 확정하거나 사랑이라고 단정하지 않는다.
- 작은 신경 쓰임, 익숙함, 경계, 호기심, 긴장감 등을 장면 속에서 보여준다.
- 주어진 관계와 특이점이 사건이나 대화에 실제로 영향을 주게 한다.
- 기존 맛보기 장면을 그대로 반복하기보다 자연스럽게 확장한다.

[출력]
- 하나의 이어지는 장면 또는 짧은 단편처럼 작성한다.
- 약 1500~2000자 정도로 작성한다.
- 제목은 쓰지 않는다.
- 설정표, 해설, 후기 등을 덧붙이지 않고 이야기 본문만 출력한다.
`;

    const response = await client.responses.create({
      model: "gpt-6-luna",
      input: prompt,
      max_output_tokens: 3500
    });

    const story = response.output_text?.trim();

    if (!story) {
      console.error("긴 서사 텍스트 없음:", {
        status: response.status,
        incomplete_details: response.incomplete_details
      });

      return res.status(500).json({
        error: "긴 서사 내용이 비어 있어요. 다시 시도해 주세요."
      });
    }

    res.json({
      story
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "긴 서사를 만드는 중 문제가 생겼어요."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`CP Generator running on port ${PORT}`);
});
