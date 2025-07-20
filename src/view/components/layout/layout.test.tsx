import { describe, it, expect } from 'vitest';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import { makeFakeAuthInfo, makeFakeFavoriteOffers, makeFakeState } from '../../../utils/mocks';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';

describe('Component: Layout', () => {
  const fakeState = makeFakeState();
  const fakeAuthInfo = makeFakeAuthInfo();
  const fakeFavoriteOffers = makeFakeFavoriteOffers();
  const initialState = {
    ...fakeState,
    [NameSpace.User]: {
      ...fakeState[NameSpace.User],
      authInfo: fakeAuthInfo,
      favorites: fakeFavoriteOffers,
      authorizationStatus: AuthorizationStatus.Auth,
    }
  };

  it('should render header with email and number of favorites on the main page', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<div data-testid="main-page" />} />
          </Route>
        </Routes>
      ),
      initialState
    );

    render(withStoreComponent);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
    expect(screen.getByText(fakeAuthInfo.email)).toBeInTheDocument();
    expect(screen.getByText(fakeFavoriteOffers.length.toString())).toBeInTheDocument();
    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
  });

  it('should not render header with email on the login page', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.Login} element={<Layout />}>
            <Route index element={<div data-testid="login-page" />} />
          </Route>
        </Routes>,
        createMemoryHistory({ initialEntries: [AppRoute.Login] })
      ),
      initialState
    );

    render(withStoreComponent);

    expect(screen.getByTestId('login-page')).toBeInTheDocument();
    expect(screen.queryByText(fakeAuthInfo.email)).not.toBeInTheDocument();
    expect(screen.queryByText(/sign out/i)).not.toBeInTheDocument();
  });

  it('should render footer only on the favorites page', () => {
    const { withStoreComponent } = withStore(
      withHistory(
        <Routes>
          <Route path={AppRoute.Favorites} element={<Layout />}>
            <Route index element={<footer>Test Footer</footer>} />
          </Route>
        </Routes>,
        createMemoryHistory({ initialEntries: [AppRoute.Favorites] })
      ),
      initialState
    );

    render(withStoreComponent);

    expect(screen.getByText(/sign out/i)).toBeInTheDocument();
    expect(screen.getByText('Test Footer')).toBeInTheDocument();
  });
});
