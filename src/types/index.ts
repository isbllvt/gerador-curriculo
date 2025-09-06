export interface Skill {
    id: string;
    name: string;
    level: 'Básico' | 'Intermediário' | 'Avançado';
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    period: string;
    description: string;
    isCurrent: boolean;
}

export interface Resumo {
    summary: string;
}