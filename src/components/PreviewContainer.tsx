import React from "react";

const PreviewContainer: React.FC<{ dados: any }> = ({ dados }) => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-gray-50 shadow-inner">
      <h2 className="text-2xl font-bold mb-4">Preview</h2>
      <div className="space-y-2">
        <p><strong>Nome:</strong> {dados.nome}</p>
        <p><strong>Email:</strong> {dados.email}</p>
        <p><strong>Telefone:</strong> {dados.telefone}</p>
        <p><strong>LinkedIn:</strong> {dados.linkedin}</p>
        <p><strong>Resumo:</strong> {dados.resumo}</p>
      </div>
    </div>
  );
};

export default PreviewContainer;