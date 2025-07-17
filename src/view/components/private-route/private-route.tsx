import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { useAuth } from '../../../hooks/auth';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const userIsAuth = useAuth();

  return (
    userIsAuth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
