import { useState, useEffect } from 'react';
import { api } from '../services/api';
import type { Profile } from '../types';

export function useProfile(profileId: number) {
  const [data, setData] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        // Faz a chamada GET para /api/profiles/{id}/
        const response = await api.get<Profile>(`/profiles/${profileId}/`);
        setData(response.data);
        setError(null);
      } catch (err) {
        console.error("Erro ao procurar o perfil:", err);
        setError("Não foi possível carregar as informações do perfil.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [profileId]);

  return { data, isLoading, error };
}