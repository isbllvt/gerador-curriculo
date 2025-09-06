interface ResumeAIProps {
  texto: string;
}

export async function improveResume({ texto }: ResumeAIProps) {
  // Exemplo: chamada a uma API
  const resposta = await fetch("/api/improve-resume", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto }),
  });

  const data = await resposta.json();
  return data.textoMelhorado;
}

export const handleImproveResume = async ({
  resumo,
  setDados,
}: {
  resumo: string;
  setDados: React.Dispatch<React.SetStateAction<any>>;
}) => {
  try {
    const textoMelhorado = await improveResume({ texto: resumo });
    if (textoMelhorado) {
      setDados((prev: any) => ({ ...prev, resumo: textoMelhorado }));
    }
  } catch (e) {
    console.error("Erro ao chamar IA:", e);
    alert("Erro ao melhorar o resumo. Tente novamente.");
  }
};
