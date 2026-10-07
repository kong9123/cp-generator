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

위 설정을 바꾸거나 새로운 핵심 설정을 임의로 추가하지 말고,
두 사람의 관계성이 잘 드러나는 짧은 맛보기 서사를 한국어로 작성해라.

규칙:
- 캐릭터 이름을 새로 만들지 않는다.
- A, B라는 알파벳 호칭을 반복해서 사용하지 않는다.
- 직업, 관계, 행동, 대명사 등을 활용해 자연스럽게 지칭한다.
- 설정을 설명문처럼 나열하지 말고 실제 이야기처럼 쓴다.
- 대사는 필요한 경우에만 자연스럽게 사용한다.
- 두 사람의 감정이나 관계가 너무 빠르게 확정되지 않게 한다.
- 약 500~700자 정도로 작성한다.
- 제목은 쓰지 않는다.
`;

    const response = await client.responses.create({
      model: "gpt-6-luna",
      input: prompt,
      max_output_tokens: 700
    });

    res.json({
      story: response.output_text
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "서사를 만드는 중 문제가 생겼어요."
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`CP Generator running on port ${PORT}`);
});
