import React, { useState } from "react";
import FormContainer from "./components/FormContainer";
import PreviewContainer from "./components/PreviewContainer";
import type { Skill, Experience } from "./types";

const App: React.FC = () => {
  const [dados, setDados] = useState({
    nome: "",
    email: "",
    telefone: "",
    linkedin: "",
    resumo: "",
  });

  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  return (
    <div className="h-screen w-screen grid grid-cols-2">
      {/* Coluna esquerda */}
      <FormContainer 
        dados={dados} 
        setDados={setDados} 
        skills={skills} 
        setSkills={setSkills} 
        experiences={experiences} 
        setExperiences={setExperiences} 
      />

      {/* Coluna direita */}
      <PreviewContainer 
        dados={dados} 
        skills={skills} 
        experiences={experiences} 
      />
    </div>
  );
};

export default App;
