import { Navigate, useLocation } from 'react-router-dom';
import { AuthRoutes } from '../../../core/routes';
import { useAuthContext } from './AuthProvider';

function AuthContainer({ children }) {
  const { auth } = useAuthContext();
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={AuthRoutes.Login}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
}

export default AuthContainer;
