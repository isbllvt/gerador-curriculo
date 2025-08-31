// src/components/PreviewContainer.tsx
import React from "react";

const PreviewContainer: React.FC = () => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-gray-50 shadow-inner">
      <h2 className="text-2xl font-bold mb-4">Preview</h2>
      <p className="text-gray-600">
        Aqui o currículo será exibido em tempo real conforme o usuário digitar.
      </p>
    </div>
  );
};

export default PreviewContainer;
