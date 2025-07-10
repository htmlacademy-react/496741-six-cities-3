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
import HistoryRouter from '../history-router/history-router.tsx';
import browserHistory from '../../../browser-history.ts';
import { selectAuthorizationStatus } from '../../../store/selectors/auth.ts';
import { selectOffersLoadingStatus } from '../../../store/selectors/offers.ts';

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
      <HistoryRouter history={browserHistory}>
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
                <PrivateRoute authorionStatus={authorizationStatus}>
                  <Favorites />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={<Login authorionStatus={authorizationStatus} />}
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
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
