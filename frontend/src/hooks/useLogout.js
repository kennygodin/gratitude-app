import { useUserContext } from './useUserContext';

export const useLogout = () => {
  const { dispatch } = useUserContext();

  const logout = () => {
    // remove user from storage.
    // We need not to send request to the db.

    localStorage.removeItem('user');

    // dispatch a logout action.
    dispatch({ type: 'USER_LOGOUT' });
  };
  return { logout };
};
