// Tipo para habilidades
export interface Skill {
  id: string;
  name: string;
  level: "Básico" | "Intermediário" | "Avançado";
}

// Tipo para experiências
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  isCurrent: boolean;
}
