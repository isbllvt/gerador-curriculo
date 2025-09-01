import React from "react";
import { FormularioDadosPessoais } from "./FormularioDadosPessoais";

const FormContainer: React.FC = () => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <FormularioDadosPessoais />
    </div>
  );
};

export default FormContainer;