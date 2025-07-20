import { render, screen } from '@testing-library/react';
import PlaceList from './place-list';
import { makeFakeOffers, makeFakeState } from '../../../utils/mocks';
import { withStore, withHistory } from '../../../utils/mock-component';
import { createMemoryHistory } from 'history';

describe('Component: PlaceList', () => {
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();

  it('should render correctly with offers', () => {
    const fakeOffers = makeFakeOffers();
    const { withStoreComponent } = withStore(
      <PlaceList offers={fakeOffers} onOfferHover={vi.fn()} />,
      mockState
    );

    render(withHistory(withStoreComponent, mockHistory));

    expect(
      screen.getByText(new RegExp(`${fakeOffers.length} place`, 'i'))
    ).toBeInTheDocument();

    const images = screen.getAllByAltText(/place image/i);
    expect(images.length).toBe(fakeOffers.length);

    expect(screen.getByText(/sort/i)).toBeInTheDocument();
  });
});
