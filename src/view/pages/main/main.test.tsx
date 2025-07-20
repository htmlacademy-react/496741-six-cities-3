import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import Main from './main';
import { makeFakeOffer, makeFakeState } from '../../../utils/mocks';
import { withHistory } from '../../../utils/mock-component';

describe('Component: Main', () => {

  it('should render main page', () => {
    const mockOffer = makeFakeOffer();
    const mockCity = mockOffer.city;
    const mockState = makeFakeState();
    mockState.OFFERS.city = mockCity;

    const { withStoreComponent } = withStore(<Main />, mockState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
