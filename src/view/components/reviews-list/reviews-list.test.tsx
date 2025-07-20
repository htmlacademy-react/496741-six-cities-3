import { render, screen } from '@testing-library/react';
import { makeFakeId, makeFakeState } from '../../../utils/mocks';
import { withHistory, withStore } from '../../../utils/mock-component';
import { createMemoryHistory } from 'history';
import ReviewsList from './reviews-list';
describe('Component: ReviewsList', () => {
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();
  it('should render correct', () => {
    const fakeId = makeFakeId();
    const reviewsListTestId = 'reviews-list';
    const reviewsContainerTestId = 'reviews-container';

    const { withStoreComponent } = withStore(
      <ReviewsList id={fakeId} />, mockState);

    render(withHistory(withStoreComponent, mockHistory));

    const reviewsContainer = screen.getByTestId(reviewsContainerTestId);
    const reviewsList = screen.getByTestId(reviewsListTestId);

    expect(screen.getByRole('heading', { name: /Reviews/i })).toBeInTheDocument();
    expect(reviewsContainer).toBeInTheDocument();
    expect(reviewsList).toBeInTheDocument();
  });
});
