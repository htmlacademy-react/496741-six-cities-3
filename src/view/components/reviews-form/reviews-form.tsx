import { FormEvent, Fragment, useEffect } from 'react';
import { CommentLength, stars } from '../../../const';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { UserReviewType } from '../../../types/user';
import { postCommentAction } from '../../../store/api-actions';
import { selectIsCommentPosting } from '../../../store/selectors/offers';
import { selectReviewRating, selectReviewComment } from '../../../store/selectors/offer';
import { setReviewRating, setReviewComment } from '../../../store/offer/offer-reducer';

type ReviewsFormProps = {
  offerId: string;
};

function ReviewsForm({offerId}: ReviewsFormProps): JSX.Element {
  const rating = useAppSelector(selectReviewRating);
  const comment = useAppSelector(selectReviewComment);
  const isCommentPosting = useAppSelector(selectIsCommentPosting);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setReviewRating(0));
    dispatch(setReviewComment(''));
  }, [offerId, dispatch]);

  const handleCommentSubmit = (review: UserReviewType) => {
    dispatch(postCommentAction(review));
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setReviewRating(parseInt(evt.target.value, 10)));
  };
  const handleCommentChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setReviewComment(evt.target.value));
  };
  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleCommentSubmit({offerId, rating, comment});
  };

  return (
    <form
      className="reviews__form form"
      onSubmit={handleFormSubmit}
      action="#"
      method="post"
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {stars.map((star) => (
          <Fragment key={`${star.label}-${star.value}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star.value}
              onChange={handleRatingChange}
              id={`${star.value}-stars`}
              type="radio"
              checked={star.value === rating}
              disabled={isCommentPosting}
            />
            <label
              htmlFor={`${star.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={star.label}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
        minLength={CommentLength.MIN}
        disabled={isCommentPosting}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to
          set <span className="reviews__star">rating</span> and describe your stay with at
          least <b className="reviews__text-amount">{CommentLength.MIN} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={(
            comment.length < CommentLength.MIN
            || comment.length > CommentLength.MAX
            || rating === 0
            || isCommentPosting)}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
