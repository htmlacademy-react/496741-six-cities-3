import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewsForm from './reviews-form';
import { withStore } from '../../../utils/mock-component';
import { makeFakeCommentForPost, makeFakeState } from '../../../utils/mocks';
import { vi } from 'vitest';
import * as actions from '../../../store/api-actions';
import * as hooks from '../../../hooks';

describe('Component: ReviewsForm', () => {
  const mockDispatch = vi.fn();
  const mockState = makeFakeState();
  const user = userEvent.setup();
  const fakeCommentForPost = makeFakeCommentForPost();
  const offerId = '123';
  const reviewText = /Your review/i;
  const placeholderText = /Tell how was your stay, what you like and what can be improved/i;
  const buttonName = /submit/i;

  beforeEach(() => {
    vi.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch);
  });

  it('should render all required elements', () => {
    const { withStoreComponent } = withStore(<ReviewsForm offerId={offerId} />, mockState);
    render(withStoreComponent);

    expect(screen.getByText(reviewText)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: buttonName })).toBeInTheDocument();
  });

  it('should allow typing and selecting a rating', async () => {
    const { withStoreComponent } = withStore(
      <ReviewsForm offerId={offerId} />,
      mockState
    );
    render(withStoreComponent);

    const textarea = screen.getByPlaceholderText(placeholderText);
    const ratingInput = screen.getByDisplayValue('5');

    await user.type(textarea, 'This is a test review with more than 50 characters.');
    await user.click(ratingInput);

    expect((textarea as HTMLTextAreaElement).value).toBe(
      'This is a test review with more than 50 characters.'
    );
    expect((ratingInput as HTMLInputElement).checked).toBe(true);
  });

  it('should dispatch postCommentAction on form submit', async () => {
    const comment = fakeCommentForPost.comment;
    const rating = 5;

    const postCommentSpy = vi.spyOn(actions, 'postCommentAction');

    const { withStoreComponent } = withStore(<ReviewsForm offerId={offerId} />, mockState);
    render(withStoreComponent);

    const textarea = screen.getByPlaceholderText(placeholderText);
    const ratingInput = screen.getByTitle('perfect');
    const submitButton = screen.getByRole('button', { name: buttonName });

    await user.type(textarea, comment);
    await user.click(ratingInput);
    await user.click(submitButton);

    expect(postCommentSpy).toHaveBeenCalledWith({ offerId, rating, comment });
    expect(mockDispatch).toHaveBeenCalledWith(postCommentSpy.mock.results[0].value);
  });

  it('should disable submit button with invalid form data', () => {
    const { withStoreComponent } = withStore(<ReviewsForm offerId={offerId} />, mockState);
    render(withStoreComponent);

    const submitButton = screen.getByRole('button', { name: /submit/i });
    expect(submitButton).toBeDisabled();
  });
});
