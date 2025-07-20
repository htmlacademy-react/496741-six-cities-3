import { screen, render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';
import App from './app';
import { AppRoute, AuthorizationStatus, NameSpace, TextNotFound } from '../../../const';
import { withHistory, withStore } from '../../../utils/mock-component';
import {
  makeFakeAuthInfo,
  makeFakeComments,
  makeFakeFullOffer,
  makeFakeOffer,
  makeFakeOffers,
  makeFakeState } from '../../../utils/mocks';
import { State } from '../../../types/state';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;
  let fakeState: State;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
    fakeState = makeFakeState();
  });

  it('should render Main page when user navigates to "/"', async () => {
    const fakeOffer = makeFakeOffer();
    const fakeOffers = [...makeFakeOffers(), fakeOffer];
    fakeState = {
      ...fakeState,
      [NameSpace.Offers]: {
        ...fakeState[NameSpace.Offers],
        isOffersLoading: false,
        offers: fakeOffers,
        city: fakeOffer.city,
      },
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.NoAuth
      }
    };

    mockHistory.push(AppRoute.Root);

    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, fakeState);

    render(withStoreComponent);

    expect(
      await screen.findByTestId('main-page', {}, { timeout: 3000 })
    ).toBeInTheDocument();
  });

  it('should render Login page when user navigates to "/login"', () => {
    fakeState = {
      ...fakeState,
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.NoAuth,
      },
      [NameSpace.Offers]: {
        ...fakeState[NameSpace.Offers],
        isOffersLoading: false,
      },
    };

    mockHistory.push(AppRoute.Login);

    const { withStoreComponent } = withStore(
      withHistory(<App />, mockHistory),
      fakeState
    );

    render(withStoreComponent);
    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render Favorites page with offers when user is authorized and has favorite offers', () => {
    fakeState = {
      ...fakeState,
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.Auth,
        authInfo: makeFakeAuthInfo(),
        favorites: [...makeFakeOffers(), makeFakeOffer()],
      },
      [NameSpace.Offers]: {
        ...fakeState[NameSpace.Offers],
        isOffersLoading: false,
      },
    };

    mockHistory.push(AppRoute.Favorites);
    const { withStoreComponent } = withStore(
      withHistory(<App />, mockHistory),
      fakeState
    );

    render(withStoreComponent);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  });

  it('should render Favorites empty page when user is authorized but has no favorite offers', () => {
    fakeState = {
      ...fakeState,
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.Auth,
        authInfo: makeFakeAuthInfo(),
        favorites: [],
      },
      [NameSpace.Offers]: {
        ...fakeState[NameSpace.Offers],
        isOffersLoading: false,
      },
    };

    mockHistory.push(AppRoute.Favorites);
    const { withStoreComponent } = withStore(
      withHistory(<App />, mockHistory),
      fakeState
    );

    render(withStoreComponent);

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Save properties to narrow down search or plan your future trips/i)
    ).toBeInTheDocument();
  });

  it('should render Offer page when user navigates to "/offer/:id"', () => {
    const fakeOffer = makeFakeFullOffer();
    const fakeOffers = makeFakeOffers();
    fakeOffers[0].id = fakeOffer.id;
    const offerId = fakeOffer.id;
    fakeState = {
      ...fakeState,
      [NameSpace.Offer]: {
        ...fakeState[NameSpace.Offer],
        offer: fakeOffer,
        comments: makeFakeComments(),
        offersNearby: [],
        isOfferPageLoading: false,
      },
      [NameSpace.Offers]: {
        ...fakeState[NameSpace.Offers],
        offers: fakeOffers,
        isOffersLoading: false,
      },
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.Auth,
        authInfo: makeFakeAuthInfo(),
      },
    };

    mockHistory.push(`${AppRoute.Offer.replace(':id', offerId)}`);

    const { withStoreComponent } = withStore(
      withHistory(<App />, mockHistory),
      fakeState
    );

    render(withStoreComponent);

    expect(screen.queryByText(TextNotFound.ID_IS_NOT_CORRECT)).not.toBeInTheDocument();
    expect(screen.getByTestId('offer-page')).toBeInTheDocument();
  });

  it('should render NotFound page when user navigates to an unknown route', () => {
    fakeState = {
      ...fakeState,
      [NameSpace.Offers]: {
        ...fakeState[NameSpace.Offers],
        isOffersLoading: false,
      },
      [NameSpace.Offer]: {
        ...fakeState[NameSpace.Offer],
        offer: null,
        comments: [],
        offersNearby: [],
        isOfferPageLoading: false,
      },
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.NoAuth,
      }
    };
    mockHistory.push('/unknown-route');
    const { withStoreComponent } = withStore(
      withHistory(<App />, mockHistory),
      fakeState
    );

    render(withStoreComponent);

    expect(screen.getByTestId('text-not-found')).toBeInTheDocument();
    expect(screen.getByAltText('Not-found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
