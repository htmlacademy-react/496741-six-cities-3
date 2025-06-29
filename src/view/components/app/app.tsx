import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';
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
};

function App({offers, reviews}: AppProps) : JSX.Element {
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
              element={<Main />}
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorionStatus={authorizationStatus}>
                  <Favorites offers={offers} />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Login}
              element={<Login authorionStatus={authorizationStatus} />}
            />
            <Route
              path={AppRoute.Offer}
              element={<Offer offers={offers} reviews={reviews}/>}
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
