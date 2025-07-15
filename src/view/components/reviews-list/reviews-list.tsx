import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectComments } from '../../../store/selectors/offers.ts';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { useAuth } from '../../../hooks/auth.ts';

function ReviewsList() {

  const { id } = useParams();
  const userIsAuth = useAuth();
  const reviews = useAppSelector(selectComments);

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
      {userIsAuth && id && <ReviewsForm offerId={id} />}
    </section>
  );
}

export default ReviewsList;
