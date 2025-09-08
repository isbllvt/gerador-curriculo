interface ImproveFieldProps {
  tipo: "resumo" | "experience";
  texto: string;
}

/**
 * Retorna o prompt customizado para cada tipo de campo
 */
function getPrompt(tipo: ImproveFieldProps["tipo"], texto: string) {
  switch (tipo) {
    case "resumo":
      return `Reescreva este resumo profissional em tom formal, use palavras-chave do setor, corrija gramática e ortografia, e mantenha máximo 300 caracteres: "${texto}"`;
    case "experience":
      return `Melhore esta descrição de experiência profissional. Use verbos de ação, destaque resultados, quantifique impacto quando possível, corrija gramática e ortografia: "${texto}"`;
    default:
      return texto;
  }
}

/**
 * Chamada à API de IA para melhorar o texto
 */
export async function improveField(tipo: ImproveFieldProps["tipo"], texto: string) {
  const prompt = getPrompt(tipo, texto);

  try {
    const response = await fetch("/api/improve-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto: prompt }),
    });

    const data = await response.json();

    // Padronização pós-processamento: remover espaços extras, normalizar quebra de linha
    return (data.textoMelhorado || texto).trim();
  } catch (error) {
    console.error("Erro ao melhorar texto:", error);
    // fallback gracioso: retorna o texto original
    return texto;
  }
}
