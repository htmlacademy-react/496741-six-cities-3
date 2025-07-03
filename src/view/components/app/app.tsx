import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../../const.ts';
import { ReviewType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';
import { mockReviews } from '../../../model/mock.ts';
import { HelmetProvider } from 'react-helmet-async';
import { useAppSelector } from '../../../hooks/index.ts';
import LoadingScreen from '../../pages/loading-screen/loading-screen.tsx';

function App() : JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  const reviews: ReviewType[] = mockReviews;

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
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
              element={<Offer reviews={reviews}/>}
            />
            <Route
              path={AppRoute.NotFound}
              element={<NotFound type='NOT_FOUND' />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
