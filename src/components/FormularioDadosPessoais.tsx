import React, { useState } from "react";

type Props = {
  dados: any;
  setDados: React.Dispatch<React.SetStateAction<any>>;
};

const MAX_RESUMO = 300;

export const FormularioDadosPessoais: React.FC<Props> = ({ dados, setDados }) => {
  const [improving, setImproving] = useState(false);

  const validar = (campo: string, valor: string) => {
    let erro = "";
    if (!valor) erro = "Campo obrigatório";
    if (campo === "email" && valor) {
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
      if (!emailValido) erro = "Email inválido";
    }
    if (campo === "resumo" && valor.length > MAX_RESUMO) {
      erro = `Máximo de ${MAX_RESUMO} caracteres`;
    }
    return erro;
  };

  const [erros, setErros] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    resumo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
    setErros({ ...erros, [name]: validar(name, value) });
  };

const handleImproveResume = async () => {
  try {
    setImproving(true);
    const resp = await fetch("/api/improve-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ texto: dados.resumo || "" }),
    });
    const data = await resp.json();
    console.log("Texto melhorado da API:", data.textoMelhorado);
    if (data?.textoMelhorado) {
      setDados((prev: any) => ({ ...prev, resumo: data.textoMelhorado }));
    }
  } catch (e) {
    console.error("Erro ao chamar IA:", e);
    alert("Erro ao melhorar o resumo. Tente novamente.");
  } finally {
    setImproving(false);
  }
};

  return (
    <form className="space-y-5 p-8 bg-white rounded-2xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Dados Pessoais</h2>

      {/* Nome */}
      <div className="flex flex-col gap-2">
        <label className="font-medium mb-1">Nome</label>
        <input
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
        />
        {erros.nome && <span className="text-red-500 text-sm">{erros.nome}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label className="font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={dados.email}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
        />
        {erros.email && <span className="text-red-500 text-sm">{erros.email}</span>}
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-2">
        <label className="font-medium mb-1">Telefone</label>
        <input
          type="tel"
          name="telefone"
          value={dados.telefone}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
        />
        {erros.telefone && <span className="text-red-500 text-sm">{erros.telefone}</span>}
      </div>

      {/* LinkedIn */}
      <div className="flex flex-col gap-2">
        <label className="font-medium mb-1">LinkedIn</label>
        <input
          type="url"
          name="linkedin"
          value={dados.linkedin}
          onChange={handleChange}
          className="border rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
        />
        {erros.linkedin && <span className="text-red-500 text-sm">{erros.linkedin}</span>}
      </div>

      {/* Resumo Profissional */}
      <div className="flex flex-col gap-2">
        <label className="font-medium mb-1">Resumo Profissional</label>
        <textarea
          name="resumo"
          value={dados.resumo}
          onChange={handleChange}
          maxLength={MAX_RESUMO}
          rows={6}
          className="border rounded-lg px-4 py-2 w-full resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
        />
        <div className="flex items-center gap-3 mt-2">
         <button
            type="button"
            onClick={handleImproveResume}
            disabled={improving || !(dados.resumo || "").trim()}
            className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50"
          >
            {improving ? "Melhorando..." : "Melhorar com IA"}
          </button>
          <span className="text-xs text-gray-400">A IA reescreve sem inventar dados.</span>
        </div>
        <div className="flex justify-between text-sm mt-1">
          <span>{dados.resumo.length}/{MAX_RESUMO} caracteres</span>
          {erros.resumo && <span className="text-red-500">{erros.resumo}</span>}
        </div>
      </div>
    </form>
  );
};