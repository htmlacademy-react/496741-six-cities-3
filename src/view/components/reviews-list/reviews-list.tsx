import { AuthorizationStatus } from '../../../const.ts';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectAuthorizationStatus } from '../../../store/selectors/auth.ts';
import { ReviewType } from '../../../types/types.ts';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  reviews: ReviewType[];
};

function ReviewsList({reviews}: ReviewsListProps) {

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
    </section>
  );
}

export default ReviewsList;
