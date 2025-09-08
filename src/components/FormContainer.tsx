import React from "react";
import type { Skill, Experience } from "../types";
import { FormularioDadosPessoais } from "./FormularioDadosPessoais";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";

interface FormContainerProps {
  dados: any;
  setDados: React.Dispatch<React.SetStateAction<any>>;
  skills: Skill[];
  setSkills: React.Dispatch<React.SetStateAction<Skill[]>>;
  experiences: Experience[];
  setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
}

const FormContainer: React.FC<FormContainerProps> = ({
  dados,
  setDados,
  skills,
  setSkills,
  experiences,
  setExperiences,
}) => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <FormularioDadosPessoais dados={dados} setDados={setDados} />
      <SkillsSection skills={skills} setSkills={setSkills} />
      <ExperienceSection experiences={experiences} setExperiences={setExperiences} />
    </div>
  );
};

export default FormContainer;
