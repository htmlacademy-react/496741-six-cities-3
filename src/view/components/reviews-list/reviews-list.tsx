import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../../const.ts';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectAuthorizationStatus } from '../../../store/selectors/auth.ts';
import { selectComments } from '../../../store/selectors/offers.ts';
import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';

function ReviewsList() {

  const { id } = useParams();
  const reviews = useAppSelector(selectComments);
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
      {authorizationStatus === AuthorizationStatus.Auth && id && <ReviewsForm offerId={id} />}
    </section>
  );
}

export default ReviewsList;
