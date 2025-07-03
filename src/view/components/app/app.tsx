import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../../const.ts';
import { ReviewType } from '../../../types/types.ts';
import Main from '../../pages/main/main.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import Login from '../../pages/login/login.tsx';
import NotFound from '../../pages/not-found/not-found.tsx';
import Offer from '../../pages/offer/offer.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import Layout from '../layout/layout.tsx';
import { getAuthorizationStatus, mockReviews } from '../../../model/mock.ts';
import { HelmetProvider } from 'react-helmet-async';

function App() : JSX.Element {
  const authorizationStatus = getAuthorizationStatus();
  const reviews: ReviewType[] = mockReviews;

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
