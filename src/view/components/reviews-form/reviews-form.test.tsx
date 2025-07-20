import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewsForm from './reviews-form';
import { withHistory, withStore } from '../../../utils/mock-component';
import { vi } from 'vitest';
import * as actions from '../../../store/api-actions';
import * as hooks from '../../../hooks';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { createMemoryHistory } from 'history';
import { makeFakeState } from '../../../utils/mocks';

describe('Component: ReviewsForm', () => {
  const mockHistory = createMemoryHistory();
  const fakeState = makeFakeState();

  const mockDispatch = vi.fn();
  const offerId = '123';
  const user = userEvent.setup();

  const reviewText = /Your review/i;
  const placeholderText = /Tell how was your stay, what you like and what can be improved/i;
  const buttonName = /submit/i;

  const mockState = {
    ...fakeState,
    [NameSpace.Offer]: {
      ...fakeState[NameSpace.Offer],
      reviewRating: 0,
      reviewComment: '',
    },
    [NameSpace.Offers]: {
      ...fakeState[NameSpace.Offers],
      isCommentPosting: false,
    },
    [NameSpace.User]: {
      ...fakeState[NameSpace.User],
      authorizationStatus: AuthorizationStatus.Auth,
      authInfo: null,
      favorites: [],
    }
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch);
  });

  it('should render all required elements', () => {
    const withHistoryComponent = withHistory(<ReviewsForm offerId={offerId} />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, mockState);
    render(withStoreComponent);

    expect(screen.getByText(reviewText)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: buttonName })).toBeInTheDocument();
  });

  it('should dispatch postCommentAction on form submit', async () => {
    const longComment = 'This is a valid test comment that is definitely long enough.';
    const rating = 5;
    const newState = {
      ...mockState,
      [NameSpace.Offer]: {
        ...mockState[NameSpace.Offer],
        reviewRating: rating,
        reviewComment: longComment,
      }
    };

    const postCommentSpy = vi.spyOn(actions, 'postCommentAction');

    const { withStoreComponent } = withStore(<ReviewsForm offerId={offerId} />, newState);

    render(withStoreComponent);

    const textarea = screen.getByPlaceholderText(placeholderText);
    const ratingInput = screen.getByTitle('perfect');
    const submitButton = screen.getByRole('button', { name: buttonName });

    await user.type(textarea, longComment);
    await user.click(ratingInput);
    await user.click(submitButton);

    expect(postCommentSpy).toHaveBeenCalledWith({ offerId, rating, comment: longComment });
    expect(mockDispatch).toHaveBeenCalledWith(postCommentSpy.mock.results[0].value);
  });

  it('should disable submit button with invalid form data', () => {
    const { withStoreComponent } = withStore(<ReviewsForm offerId={offerId} />, mockState);
    render(withStoreComponent);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
});
