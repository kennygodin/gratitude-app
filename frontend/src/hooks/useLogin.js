import { useState } from 'react';
import { useUserContext } from './useUserContext';

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const { dispatch } = useUserContext();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the userContext;
      dispatch({ type: 'USER_LOGIN', payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
