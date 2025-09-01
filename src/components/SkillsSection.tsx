import type { Skill } from "../types";
import { useState } from "react";

interface SkillsSectionProps {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

function SkillsSection({ skills, setSkills }: SkillsSectionProps) {
  const [newSkill, setNewSkill] = useState<Omit<Skill, "id">>({
    name: "",
    level: "Básico",
  });

  const handleAddSkill = () => {
    if (newSkill.name.trim() !== "") {
      const skillToAdd: Skill = { ...newSkill, id: crypto.randomUUID() };
      setSkills([...skills, skillToAdd]);
      setNewSkill({ name: "", level: "Básico" });
    }
  };

  const handleRemoveSkill = (idToRemove: string) => {
    setSkills(skills.filter((skill) => skill.id !== idToRemove));
  };

  return (
    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <h3 className="text-2xl font-bold mb-4">Habilidades</h3>
      <div>
        {skills.map((skill) => (
          <div key={skill.id}>
            <span>
              {skill.name} ({skill.level})
            </span>
            <button
              onClick={() => handleRemoveSkill(skill.id)}
              className="text-red-500"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Nome da Habilidade"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <select
          value={newSkill.level}
          onChange={(e) =>
            setNewSkill({
              ...newSkill,
              level: e.target.value as Skill["level"],
            })
          }
          className="p-2 border rounded"
          id=""
        >
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button
          onClick={handleAddSkill}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default SkillsSection;
