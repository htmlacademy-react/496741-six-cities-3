import { render, screen } from '@testing-library/react';
import { makeFakeCity, makeFakeOffersNearby, makeFakeState } from '../../../utils/mocks';
import { withHistory, withStore } from '../../../utils/mock-component';
import { createMemoryHistory } from 'history';
import NearPlaces from './near-places';
describe('Component: NearPlaces', () => {
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();
  it('should render correct', () => {
    const fakeCity = makeFakeCity();
    const fakeOffers = makeFakeOffersNearby(fakeCity);
    const titleText = 'Other places in the neighbourhood';
    const nearPlacesContainerTestId = 'near-places-container';
    const nearPlacesListTestId = 'near-places-list';

    const { withStoreComponent } = withStore(
      <NearPlaces offers={fakeOffers} />, mockState);

    render(withHistory(withStoreComponent, mockHistory));

    const nearPlacesContainer = screen.getByTestId(nearPlacesContainerTestId);
    const nearPlacesList = screen.getByTestId(nearPlacesListTestId);

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(nearPlacesContainer).toBeInTheDocument();
    expect(nearPlacesList).toBeInTheDocument();
  });
});
