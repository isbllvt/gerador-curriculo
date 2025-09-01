import React from "react";
import FormContainer from "./components/FormContainer";
import PreviewContainer from "./components/PreviewContainer";

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-2">
      {/* Coluna esquerda */}
      <FormContainer />

      {/* Coluna direita */}
      <PreviewContainer />
    </div>
  );
};

export default App;
