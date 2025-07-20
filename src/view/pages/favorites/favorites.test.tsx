import { render, screen } from '@testing-library/react';
import Favorites from './favorites';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { makeFakeFavoriteOffers, makeFakeState } from '../../../utils/mocks';
import { createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../utils/mock-component';


describe('Component: Favorites', () => {
  it('should render favorites list when favorite offers exist', () => {
    const mockHistory = createMemoryHistory();
    const fakeState = makeFakeState();
    const fakeFavoriteOffers = makeFakeFavoriteOffers();

    const store = {
      ...fakeState,
      [NameSpace.User]: {
        ...fakeState[NameSpace.User],
        authorizationStatus: AuthorizationStatus.Auth,
        favorites: fakeFavoriteOffers,
      }
    };

    const withHistoryComponent = withHistory(<Favorites />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, store);

    render(withStoreComponent);

    expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
    expect(screen.getByText(fakeFavoriteOffers[0].title)).toBeInTheDocument();
  });
});
