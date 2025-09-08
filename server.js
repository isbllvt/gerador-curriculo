import express from "express";
import Groq from "groq-sdk";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Cliente GROQ (SDK oficial)
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Endpoint que melhora o resumo
app.post("/api/improve-resume", async (req, res) => {
  try {
    const { texto } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Você é um assistente que melhora resumos profissionais. Não adicione informações novas e só retorne o texto melhorado.",
        },
        {
          role: "user",
          content: texto,
        },
      ],
      model: "compound-beta-mini", // model Groq
    });
    const textoMelhorado = completion.choices[0]?.message?.content || texto;
    res.json({ textoMelhorado });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erro ao processar o texto" });
  }
});

//
app.listen(3001, () => {
  console.log("Servidor em http://localhost:3001");
});

// Vite + Express juntos em dev
// ViteExpress.listen(app, 3000, () => {
//   console.log("Dev server em http://localhost:3000");
// });
