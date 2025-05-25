import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, CityName } from '../../../const.ts';
import { OfferType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

type AppProps = {
  offers: OfferType[];
  activeLocation: CityName;
};

function App({offers, activeLocation}: AppProps) : JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main offers={offers} activeLocation={activeLocation}/>}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorionStatus={AuthorizationStatus.NoAuth}
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
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
