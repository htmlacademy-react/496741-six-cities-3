import { ReviewType, OfferType } from '../../../types/types.tsx';
import { useParams } from 'react-router-dom';
import ImageGallery from '../../components/image-gallery/image-gallery.tsx';
import NearPlaces from '../../components/near-places/near-places.tsx';
import NotFound from '../not-found/not-found.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import Map from '../../components/map/map.tsx';
import { DISPLAYED_NEARBY_OFFERS } from '../../../const.ts';

type OfferProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function Offer({offers, reviews}: OfferProps): JSX.Element {
  const { id } = useParams();
  const currentOffer: OfferType | undefined = offers.find((offer) => offer.id === id);

  if (!currentOffer) {
    return <NotFound type='ID_IS_NOT_CORRECT' />;
  }
  const {
    // id,
    city,
    // location,
    rating,
    title,
    type,
    price,
    // previewImage,
    isFavorite,
    isPremium,
    images,
  } = currentOffer;

  const displayedOffersNearby = offers.slice(0, DISPLAYED_NEARBY_OFFERS);

  return (
    <main className="page__main page__main--offer">
      <section className="offer">
        {(images && images.length > 0) && <ImageGallery images={images} />}
        <div className="offer__container container">
          <div className="offer__wrapper">
            {isPremium &&
            <div className="offer__mark">
              <span>Premium</span>
            </div>}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button
                className={isFavorite
                  ? 'offer__bookmark-button offer__bookmark-button--active button'
                  : 'offer__bookmark-button button'}
                type="button"
              >
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: '80%'}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{rating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                3 Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max 4 adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                <li className="offer__inside-item">
                  Wi-Fi
                </li>
                <li className="offer__inside-item">
                  Washing machine
                </li>
                <li className="offer__inside-item">
                  Towels
                </li>
                <li className="offer__inside-item">
                  Heating
                </li>
                <li className="offer__inside-item">
                  Coffee machine
                </li>
                <li className="offer__inside-item">
                  Baby seat
                </li>
                <li className="offer__inside-item">
                  Kitchen
                </li>
                <li className="offer__inside-item">
                  Dishwasher
                </li>
                <li className="offer__inside-item">
                  Cabel TV
                </li>
                <li className="offer__inside-item">
                  Fridge
                </li>
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                </div>
                <span className="offer__user-name">
                  Angelina
                </span>
                <span className="offer__user-status">
                  Pro
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                </p>
                <p className="offer__text">
                  An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                </p>
              </div>
            </div>
            <ReviewsList reviews={reviews} />
          </div>
        </div>
        <Map
          city = {city}
          offers={displayedOffersNearby}
          activeOffer = {undefined}
          mapName='OFFER'
        />
      </section>
      {offers && <NearPlaces offers={displayedOffersNearby} />}
    </main>
  );
}

export default Offer;
