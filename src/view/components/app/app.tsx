import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, CityName } from '../../../const.ts';
import { OfferType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';
import { getAuthorizationStatus } from '../../../model/mock.ts';

type AppProps = {
  offers: OfferType[];
  activeLocation: CityName;
};

function App({offers, activeLocation}: AppProps) : JSX.Element {
  const authorizationStatus = getAuthorizationStatus();

  return (
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
            element={<Offer />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
