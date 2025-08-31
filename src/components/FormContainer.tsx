// src/components/FormContainer.tsx
import React from "react";

const FormContainer: React.FC = () => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <h2 className="text-2xl font-bold mb-4">Formulário</h2>
      <p className="text-gray-600">
        Aqui ficarão os campos de entrada de dados (nome, email, telefone...).
      </p>
    </div>
  );
};

export default FormContainer;
