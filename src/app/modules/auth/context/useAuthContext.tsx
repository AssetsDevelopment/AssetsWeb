import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { AuthContextProps } from '../interface/auth-state.interface';

export const useAuthContext = (): AuthContextProps => {
    
  const context = useContext(AuthContext);

  if (!context) throw new Error("AuthContext is not provided");

  return context;
};
