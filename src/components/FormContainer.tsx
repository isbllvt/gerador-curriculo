import { useState } from "react";
import { FormularioDadosPessoais } from "./FormularioDadosPessoais";
import type { Skill, Experience } from "../types";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";

const FormContainer: React.FC<{ dados: any; setDados: any }> = ({ dados, setDados }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  return (

    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <FormularioDadosPessoais dados={dados} setDados={setDados} />
      <SkillsSection skills={skills} setSkills={setSkills} />
      <ExperienceSection experiences={experiences} setExperiences={setExperiences} />
    </div>
  );
};

export default FormContainer;
