import React, { useState } from "react";
import type { Skill } from "../types";

interface SkillsSectionProps {
  skills: Skill[];
  setSkills: (skills: Skill[]) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, setSkills }) => {
  const [newSkill, setNewSkill] = useState<Omit<Skill, "id">>({
    name: "",
    level: "Básico",
  });

  const handleAddSkill = () => {
    if (!newSkill.name.trim()) return;

    const skillToAdd: Skill = { ...newSkill, id: crypto.randomUUID() };
    setSkills([...skills, skillToAdd]);
    setNewSkill({ name: "", level: "Básico" });
  };

  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter((s) => s.id !== id));
  };

  return (
    <div className="mt-6">
      <h3 className="text-2xl font-bold mb-4">Habilidades</h3>

      <div className="space-y-2 mb-4">
        {skills.map((skill) => (
          <div key={skill.id} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span>{skill.name} ({skill.level})</span>
            <button
              onClick={() => handleRemoveSkill(skill.id)}
              className="text-red-500"
            >
              Remover
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Nome da Habilidade"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          className="p-2 border rounded w-full"
        />
        <select
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value as Skill["level"] })}
          className="p-2 border rounded"
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
};

export default SkillsSection;
