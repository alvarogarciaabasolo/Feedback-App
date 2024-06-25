import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/currentUser/currentUser.context';

export const ProtectedRoute = ({ children }: any) => {
  const { currentUser } = useContext(CurrentUserContext);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
