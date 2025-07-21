import { ReviewType } from '../../../types/offer.ts';
import { convertRatingToPercent, getFormattedDate } from '../../../utils/utils.ts';

type ReviewsItemProps = {
  review: ReviewType;
}

function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {
    date,
    user,
    comment,
    rating,
  } = review;

  const formattedDate = getFormattedDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${convertRatingToPercent(rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={date}>{formattedDate}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
