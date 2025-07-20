import { render, screen } from '@testing-library/react';
import FavoritesList from './favorites-list';
import { makeFakeFavoriteOffers, makeFakeState } from '../../../utils/mocks';
import { withHistory, withStore } from '../../../utils/mock-component';
import { createMemoryHistory } from 'history';
import { CityName } from '../../../const';
describe('Component: FavoritesList', () => {
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();
  it('should render correct', () => {
    const fakeFavoriteOffers = makeFakeFavoriteOffers();
    const fakeCities: CityName[] = [...new Set(fakeFavoriteOffers.map((offer) => offer.city.name))];
    const favoritesListTestId = 'favorites-list';
    const favoritesCityItemTestId = 'favorites-city-item';

    const { withStoreComponent } = withStore(
      <FavoritesList cityNames={fakeCities} favoriteOffers={fakeFavoriteOffers} />, mockState);

    render(withHistory(withStoreComponent, mockHistory));

    const favoritesList = screen.getByTestId(favoritesListTestId);
    const favoritesCityItems = screen.getAllByTestId(favoritesCityItemTestId);

    expect(favoritesList).toBeInTheDocument();
    expect(favoritesCityItems.length).toBe(fakeCities.length);
  });
});
