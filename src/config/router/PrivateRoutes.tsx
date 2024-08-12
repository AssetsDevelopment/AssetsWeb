import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../app/modules/auth/context/useAuthContext';

// TODO: tipado

export const PrivateRoutes = ({ children }: { children : JSX.Element } ) => {

  const { logged } = useAuthContext();

  return logged ? children : <Navigate to="/auth/login" />;
};
