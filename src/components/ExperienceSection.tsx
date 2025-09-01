import type { Experience } from "../types";
import { useState } from "react";

interface ExperienceSectionProps {
  experiences: Experience[];
  setExperiences: (experiences: Experience[]) => void;
}

const initialExperienceState: Omit<Experience, "id"> = {
  company: "",
  role: "",
  period: "",
  description: "",
  isCurrent: false,
};

function ExperienceSection({
  experiences,
  setExperiences,
}: ExperienceSectionProps) {
  const [newExperience, setNewExperience] = useState(initialExperienceState);

  const handleAddExperience = () => {
    if (newExperience.company.trim() && newExperience.role.trim()) {
      const experiencesToAdd: Experience = {
        ...newExperience,
        id: crypto.randomUUID(),
      };
      setExperiences([...experiences, experiencesToAdd]);
      setNewExperience(initialExperienceState);
    }
  };

  const handleRemoveExperience = (idToRemove: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== idToRemove));
  };

  return (
    <div className="mt-6">
      <h3 className="mb-2">Experiências</h3>
      <div className="space-y-4 mb-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="p-3 bg-gray-100 rounded">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold">
                  {exp.role} em {exp.company}
                </p>
                <p className="text-sm text-gray-600">{exp.period}</p>
                <p className="mt-1">{exp.description}</p>
              </div>
              <button
                onClick={() => handleRemoveExperience(exp.id)}
                className="text-red-500"
              >
                Remover
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 border rounded">
        <input
          type="text"
          placeholder="Empresa"
          value={newExperience.company}
          onChange={(e) =>
            setNewExperience({ ...newExperience, company: e.target.value })
          }
          className="p-2 border rounded col-span-1"
        />
        <input
          type="text"
          placeholder="Cargo"
          value={newExperience.role}
          onChange={(e) =>
            setNewExperience({ ...newExperience, role: e.target.value })
          }
          className="p-2 border rounded col-span-1"
        />
        <input
          type="text"
          placeholder="Período (ex: MM/AAAA)"
          value={newExperience.period}
          onChange={(e) =>
            setNewExperience({ ...newExperience, period: e.target.value })
          }
          className="p-2 border rounded col-span-2"
        />
        <textarea
          placeholder="Descrição das atividades"
          value={newExperience.description}
          onChange={(e) =>
            setNewExperience({ ...newExperience, description: e.target.value })
          }
          className="p-2 border rounded col-span-2"
        ></textarea>
        <div className="col-span-2 flex items-center">
          <input
            type="checkbox"
            id="isCurrent"
            checked={newExperience.isCurrent}
            onChange={(e) =>
              setNewExperience({
                ...newExperience,
                isCurrent: e.target.checked,
              })
            }
            className="mr-2"
          />
          <label htmlFor="isCurrent">Trabalho Atual</label>
        </div>
        <div className="col-span-2">
          <button
            onClick={handleAddExperience}
            className="w-full p-2 bg-blue-500 text-white rounded"
          >
            Adicionar Experiência
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
