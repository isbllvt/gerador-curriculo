import React from "react";
import { FormularioDadosPessoais } from "./FormularioDadosPessoais";
// src/components/FormContainer.tsx
import React, { useState } from "react";
import type { Skill, Experience } from "../types";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";

const FormContainer: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  return (
    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <FormularioDadosPessoais />
      <h2 className="text-2xl font-bold mb-4">Formulário</h2>
      <p className="text-gray-600">
        Aqui ficarão os campos de entrada de dados (nome, email, telefone...).
      </p>
      <SkillsSection skills={skills} setSkills={setSkills} />
      <ExperienceSection
        experiences={experiences}
        setExperiences={setExperiences}
      />
    </div>
  );
};

export default FormContainer;