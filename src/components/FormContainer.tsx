import React from "react";
import { FormularioDadosPessoais } from "./FormularioDadosPessoais";

const FormContainer: React.FC<{ dados: any; setDados: any }> = ({ dados, setDados }) => {
  return (
    <div className="p-6 h-full overflow-y-auto bg-white shadow-md">
      <FormularioDadosPessoais dados={dados} setDados={setDados} />
    </div>
  );
};

export default FormContainer;