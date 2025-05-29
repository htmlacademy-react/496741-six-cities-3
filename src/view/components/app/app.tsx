import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, CityName } from '../../../const.ts';
import { ReviewType, OfferType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';
import { getAuthorizationStatus } from '../../../model/mock.ts';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  offers: OfferType[];
  reviews: ReviewType[];
  activeLocation: CityName;
};

function App({offers, reviews, activeLocation}: AppProps) : JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

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
              element={<Main offers={offers} activeLocation={activeLocation}/>}
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
              element={
                <PrivateRoute authorionStatus={authorizationStatus} isReverse>
                  <Login />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offer={offers[0]} reviews={reviews}/>}
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
