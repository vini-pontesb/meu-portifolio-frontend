// src/services/api.ts
import axios from 'axios';

// Instância base do Axios apontando para o seu Django local
export const api = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 10000, // 10 segundos de timeout
  headers: {
    'Content-Type': 'application/json',
  },
});