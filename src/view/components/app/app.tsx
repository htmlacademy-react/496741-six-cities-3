import { Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const.ts';
import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../../hooks/index.ts';
import LoadingScreen from '../../pages/loading-screen/loading-screen.tsx';
import { selectOffersLoadingStatus } from '../../../store/selectors/offers.ts';
import { selectAuthorizationStatus } from '../../../store/selectors/user.ts';

function App() : JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isOffersLoading = useAppSelector(selectOffersLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Layout />}
        >
          <Route
            index
            element={<Main />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <Favorites />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={AppRoute.Offer}
            element={<Offer />}
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFound type='NOT_FOUND' />}
          />
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
