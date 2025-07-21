import { fireEvent, render, screen } from '@testing-library/react';
import PlaceCard from './place-card';
import { getRandomCardName, makeFakeOffer, makeFakeState } from '../../../utils/mocks';
import { withStore, withHistory } from '../../../utils/mock-component';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import * as hooks from '../../../hooks';
import * as authHooks from '../../../hooks/auth';
import * as actions from '../../../store/api-actions';
import { capitalize } from '../../../utils/utils';

describe('Component: PlaceCard', () => {
  const offer = makeFakeOffer();
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render correctly with given props', () => {
    const { withStoreComponent } = withStore(
      <PlaceCard offer={offer} cardName={getRandomCardName()} />,
      mockState
    );

    render(withHistory(withStoreComponent, mockHistory));

    expect(screen.getByText(offer.title)).toBeInTheDocument();
    expect(screen.getByText(/night/i)).toBeInTheDocument();
    expect(screen.getByText(capitalize(offer.type))).toBeInTheDocument();
    expect(screen.getByAltText(/place image/i)).toHaveAttribute('src', offer.previewImage);
  });

  it('should dispatch postFavoriteAction on favorite button click', async () => {
    const user = userEvent.setup();
    const mockDispatch = vi.fn();

    vi.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch);
    const useAuthSpy = vi.spyOn(authHooks, 'useAuth').mockReturnValue(true);
    const postFavoriteSpy = vi.spyOn(actions, 'postFavoriteAction');
    const { withStoreComponent } = withStore(
      <PlaceCard offer={offer} cardName={getRandomCardName()} />,
      mockState
    );

    render(withHistory(withStoreComponent, mockHistory));

    const favoriteButton = screen.getByRole('button');
    await user.click(favoriteButton);

    expect(useAuthSpy).toHaveBeenCalled();
    expect(postFavoriteSpy).toHaveBeenCalledWith({ offer, userIsAuth: true });
    expect(mockDispatch).toHaveBeenCalledWith(postFavoriteSpy.mock.results[0].value);
  });


  it('should call onOfferHover when mouse enters and leaves', () => {
    const handleHover = vi.fn();

    const { withStoreComponent } = withStore(
      <PlaceCard offer={offer} cardName={getRandomCardName()} onOfferHover={handleHover} />,
      mockState
    );

    render(withHistory(withStoreComponent, mockHistory));

    const card = screen.getByRole('article');
    fireEvent.mouseEnter(card);
    fireEvent.mouseLeave(card);

    expect(handleHover).toHaveBeenCalledWith(offer);
    expect(handleHover).toHaveBeenCalledWith(undefined);
  });
});
