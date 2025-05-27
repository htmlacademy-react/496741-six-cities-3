import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const';

type PrivateRouteProps = {
  authorionStatus: AuthorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorionStatus, isReverse, children} = props;

  return (
    authorionStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
}

export default PrivateRoute;
