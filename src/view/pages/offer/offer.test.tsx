import { render, screen } from '@testing-library/react';
import { withStore, withHistory } from '../../../utils/mock-component';
import Offer from './offer';
import { createMemoryHistory } from 'history';
import { makeFakeFullOffer, makeFakeOffers, makeFakeOffersNearby, makeFakeState } from '../../../utils/mocks';
import { vi } from 'vitest';
import * as offerSelectors from '../../../store/selectors/offer';
import * as offersSelectors from '../../../store/selectors/offers';

describe('Component: Offer', () => {
  const fakeOffer = makeFakeFullOffer();
  const fakeOffers = makeFakeOffers();
  const fakeOffersNearby = makeFakeOffersNearby(fakeOffer.city);
  const fakeState = makeFakeState();
  const mockHistory = createMemoryHistory();

  it('should show loading screen when loading', () => {
    vi.spyOn(offerSelectors, 'selectOfferPageLoading').mockReturnValue(true);
    vi.spyOn(offerSelectors, 'selectOffer').mockReturnValue(null);

    const { withStoreComponent } = withStore(<Offer />, fakeState);
    render(withHistory(withStoreComponent, mockHistory));

    expect(screen.getByTestId('loading-screen')).toBeInTheDocument();
  });

  it('should render NotFound when no offer', () => {
    vi.spyOn(offerSelectors, 'selectOfferPageLoading').mockReturnValue(false);
    vi.spyOn(offerSelectors, 'selectOffer').mockReturnValue(null);

    const { withStoreComponent } = withStore(<Offer />, fakeState);
    render(withHistory(withStoreComponent, mockHistory));

    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });

  it('should render offer content when data is loaded', () => {
    vi.spyOn(offerSelectors, 'selectOfferPageLoading').mockReturnValue(false);
    vi.spyOn(offerSelectors, 'selectOffer').mockReturnValue(fakeOffer);
    vi.spyOn(offerSelectors, 'selectOffersNearby').mockReturnValue(fakeOffersNearby);
    vi.spyOn(offersSelectors, 'selectOffers').mockReturnValue(fakeOffers);

    const { withStoreComponent } = withStore(<Offer />, fakeState);
    render(withHistory(withStoreComponent, mockHistory));

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    expect(screen.getByText(`${fakeOffer.bedrooms} Bedrooms`)).toBeInTheDocument();
    expect(screen.getByText(`Max ${fakeOffer.maxAdults} adults`)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
  });
});
