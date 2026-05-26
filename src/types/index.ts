export interface Profile {
  id: number;
  nome: string;
  titulo_profissional: string;
  bio_curta: string;
  bio_longa: string;
  email: string;
  link_git: string | null;
  link_linkedin: string | null;
}

export interface ProjectImage {
  id: number;
  image: string; // O Django vai devolver a URL da imagem como string
  nome_pagina: string;
}

export interface Project {
  id: number;
  titulo: string;
  descricao_curta: string;
  descricao_detalhada: string;
  thumb_projeto: string | null;
  url_git: string | null;
  tecnologias: string;
  tecnologias_array: string[]; // O nosso campo customizado (SerializerMethodField)
  data_criacao: string;
  images: ProjectImage[]; // O nosso Nested Serializer
}

export interface Contato {
  id?: number; // Opcional porque ao criar um contacto ainda não temos ID
  nome: string;
  email: string;
  assunto: string;
  mensagem: string;
  data_envio?: string;
}

// O formato padrão de resposta paginada do Django REST Framework
export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}