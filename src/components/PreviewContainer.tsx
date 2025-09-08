import React from "react";
import type { Skill, Experience } from "../types";

interface PreviewProps {
  dados: any;
  skills?: Skill[];
  experiences?: Experience[];
}

const PreviewContainer: React.FC<PreviewProps> = ({
  dados,
  skills = [],
  experiences = [],
}) => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-gray-50 shadow-inner">
      <h2 className="text-2xl font-bold mb-4">Preview do Currículo</h2>

      {/* Dados Pessoais */}
      <div className="space-y-2 mb-6">
        <p>
          <strong>Nome:</strong> {dados.nome}
        </p>
        <p>
          <strong>Email:</strong> {dados.email}
        </p>
        <p>
          <strong>Telefone:</strong> {dados.telefone}
        </p>
        <p>
          <strong>LinkedIn:</strong> {dados.linkedin}
        </p>
        <p>
          <strong>Resumo:</strong> {dados.resumo || "—"}
        </p>
      </div>

      {/* Habilidades */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Habilidades</h3>
          <ul className="list-disc list-inside">
            {skills.map((skill) => (
              <li key={skill.id}>
                {skill.name} ({skill.level})
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Experiências */}
      {experiences.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Experiências</h3>
          <div className="space-y-4">
            {experiences.map((exp) => (
              <div key={exp.id} className="p-3 bg-white rounded shadow">
                <p className="font-bold">
                  {exp.role} em {exp.company}
                </p>
                <p className="text-sm text-gray-600">
                  {exp.period} {exp.isCurrent && "(Atual)"}
                </p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PreviewContainer;
