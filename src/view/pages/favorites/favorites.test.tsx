import { render, screen } from '@testing-library/react';
import Favorites from './favorites';
import * as hooks from '../../../hooks';
import { vi } from 'vitest';
import FavoritesList from '../../components/favorites-list/favorites-list';

vi.mock('../../components/favorites-list/favorites-list', () => ({
  __esModule: true,
  default: vi.fn(() => <div data-testid="favorites-list" />),
}));

describe('Component: Favorites', () => {
  const mockFavoriteOffers = [
    { id: 1, city: 'Paris', title: 'Offer 1' },
    { id: 2, city: 'Amsterdam', title: 'Offer 2' },
    { id: 3, city: 'Paris', title: 'Offer 3' },
  ];

  beforeEach(() => {
    vi.spyOn(hooks, 'useAppSelector').mockImplementation((selector) => {
      if (selector.name === 'selectFavorites') {
        return mockFavoriteOffers;
      }
      return undefined;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render with correct title and pass correct props to FavoritesList', () => {
    render(<Favorites />);

    expect(screen.getByText(/saved listing/i)).toBeInTheDocument();
    expect(FavoritesList).toHaveBeenCalledWith(
      {
        cities: ['Amsterdam', 'Paris'],
        favoriteOffers: mockFavoriteOffers,
      },
      {}
    );

    expect(screen.getByTestId('favorites-list')).toBeInTheDocument();
  });
});
