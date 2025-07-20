import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Map from './map';
import { makeFakeOffer, getRandomMapName, makeFakeState, makeFakeOffersNearby } from '../../../utils/mocks';
import { withHistory, withStore } from '../../../utils/mock-component';

describe('Component: Map', () => {
  const fakeOffer = makeFakeOffer();
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();
  mockState.OFFERS.city = fakeOffer.city;

  it('should render correctly', () => {
    const fakeOffers = makeFakeOffersNearby(fakeOffer.city);
    const randomMapName = getRandomMapName();
    const mapTestId = 'map';
    const { withStoreComponent } = withStore(
      <Map
        offers={fakeOffers}
        activeOffer={fakeOffer}
        mapName={randomMapName}
      />, mockState);
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);
    const mapSection = screen.getByTestId(mapTestId);

    expect(mapSection).toBeInTheDocument();
  });
});
