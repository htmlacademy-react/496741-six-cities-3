import { useAppSelector } from '../../../hooks/index.ts';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { useAuth } from '../../../hooks/auth.ts';
import { selectComments } from '../../../store/selectors/offer.ts';
import { MAX_REVIEWS_COUNT } from '../../../const.ts';

type ReviewsListProps = {
  id: string;
}

function ReviewsList({ id }: ReviewsListProps) {

  const userIsAuth = useAuth();
  const reviews = useAppSelector(selectComments);

  return (
    <section className="offer__reviews reviews" data-testid="reviews-container">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list" data-testid="reviews-list">
        {reviews.slice(0, MAX_REVIEWS_COUNT).map((review) => (
          <ReviewsItem key={review.id} review={review} />
        ))}
      </ul>
      {userIsAuth && id && <ReviewsForm offerId={id} />}
    </section>
  );
}

export default ReviewsList;
