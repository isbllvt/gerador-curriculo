import React, { useState } from "react";
import { improveField } from "../services/contentService";

type Props = {
  dados: any;
  setDados: React.Dispatch<React.SetStateAction<any>>;
};

const MAX_RESUMO = 300;

export const FormularioDadosPessoais: React.FC<Props> = ({ dados, setDados }) => {
  const [improving, setImproving] = useState(false);
  const [erros, setErros] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    resumo: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDados({ ...dados, [name]: value });
    setErros({ ...erros, [name]: validar(name, value) });
  };

  const handleImproveResumo = async () => {
    if (!dados.resumo.trim()) return;
    setImproving(true);
    const textoMelhorado = await improveField("resumo", dados.resumo);
    setDados((prev: any) => ({ ...prev, resumo: textoMelhorado }));
    setImproving(false);
  };

  return (
    <form className="space-y-5 p-8 bg-white rounded-2xl shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-blue-700 text-center">Dados Pessoais</h2>

      {/* Campos Nome, Email, Telefone, LinkedIn ... */}

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
            onClick={handleImproveResumo}
            disabled={improving || !dados.resumo.trim()}
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
