import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LocationsList from './locations-list';
import * as hooks from '../../../hooks';
import { changeCity } from '../../../store/offers/offers-reducer';
import { cities } from '../../../const';

describe('Component: LocationsList', () => {
  const mockDispatch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch);
  });

  it('should render all city names as clickable items', () => {
    vi.spyOn(hooks, 'useAppSelector').mockReturnValue(cities[0]);

    render(<LocationsList />);

    cities.forEach((city) => {
      expect(screen.getByText(city.name)).toBeInTheDocument();
    });

    const activeCityLink = screen.getByText(cities[0].name).closest('a');
    expect(activeCityLink).toHaveClass('tabs__item--active');
  });

  it('should dispatch changeCity action with correct city on click', async () => {
    vi.spyOn(hooks, 'useAppSelector').mockReturnValue(cities[0]);
    const user = userEvent.setup();

    render(<LocationsList />);

    const cityToClick = cities[1];
    const cityLink = screen.getByText(cityToClick.name).closest('a');

    await user.click(cityLink!);

    expect(mockDispatch).toHaveBeenCalledWith(changeCity(cityToClick));
  });
});
