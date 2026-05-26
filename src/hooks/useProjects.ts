import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { Project, PaginatedResponse } from '../types';

export function useProjects(searchTerm: string = '') {
  // Os três estados fundamentais de qualquer requisição na web:
  const [data, setData] = useState<PaginatedResponse<Project> | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Definimos a função assíncrona dentro do useEffect
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        // Faz a chamada GET para /api/projects/
        // O DRF aceita o parâmetro ?search= automaticamente graças ao SearchFilter que configuramos
        const response = await api.get<PaginatedResponse<Project>>('/projects/', {
          params: {
            search: searchTerm
          }
        });
        
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar projetos:", err);
        setError("Não foi possível carregar os projetos no momento.");
      } finally {
        setIsLoading(false);
      }
    };

    // Executamos a função
    fetchProjects();

    // O array de dependências inclui o searchTerm. 
    // Sempre que o usuário digitar na busca, o React refaz o fetch automaticamente!
  }, [searchTerm]);

  return { data, isLoading, error };
}