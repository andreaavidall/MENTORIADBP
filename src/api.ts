import axios from 'axios';

export const api = axios.create ({baseURL: 'https://mentoriautec-api.aaron-navarro.workers.dev/api'});

api.interceptors.request.use(
  (config) => {
    // Obtener el token guardado en localStorage
    const token = localStorage.getItem('token');

    // Si existe un token, agregarlo al header Authorization
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: any) => response,
  (error) => {
    // Si el servidor responde con 401 (No autorizado)
    if (error.response?.status === 401 && !error.config?.url?.startsWith('/api/auth')) {
      // Limpiar datos de sesión
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      // Redirigir al login
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export function getError (err: unknown): { 
    if (axios.isAxiosError(err)&& err.response){
        const data = err.response.data as { code?: string; message?: string };
        return {status: err.response.status, code: data?. code, message: data?. message || 'Error del servidor'};
    }
}

return {status:0, code: undefined, message: 'No se pudo conectar con el servidor'};
