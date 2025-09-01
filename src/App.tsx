import React, { useState } from "react";
import FormContainer from "./components/FormContainer";
import PreviewContainer from "./components/PreviewContainer";

const App: React.FC = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    resumo: "",
  });

  return (
    <div className="h-screen w-screen grid grid-cols-2">
      {/* Coluna esquerda */}
      <FormContainer dados={dados} setDados={setDados} />

      {/* Coluna direita */}
      <PreviewContainer dados={dados} />
    </div>
  );
};

export default App;