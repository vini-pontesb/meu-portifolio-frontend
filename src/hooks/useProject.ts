import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { Project } from '../types';

export function useProject(id: string | undefined) {
  const [data, setData] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    
    const fetchProject = async () => {
      setIsLoading(true);
      try {
        const response = await api.get<Project>(`/projects/${id}/`);
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao procurar detalhes do projeto:", err);
        setError("Não foi possível carregar os detalhes deste projeto.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  return { data, isLoading, error };
}