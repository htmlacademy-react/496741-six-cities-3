import { Link } from 'react-router-dom';
import { OfferType } from '../../../types/types.ts';
import { AppRoute } from '../../../const.ts';

type PlaceCardProps = {
  offer: OfferType;
  isFavoriteCard?: boolean;
}

function PlaceCard({offer, isFavoriteCard}: PlaceCardProps): JSX.Element {
  const {
    title,
    type,
    price,
    previewImage,
    isFavorite,
    isPremium,
  } = offer;

  const cardName = isFavoriteCard ? 'favorites' : 'cities';
  return (
    <article className={`${cardName}__card place-card`}>
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardName}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer}>
          <img className="place-card__image" src={previewImage}
            width={isFavoriteCard ? '150' : '260'}
            height={isFavoriteCard ? '110' : '200'} alt="Place image"
          />
        </Link>
      </div>
      <div className={`${isFavoriteCard ? 'favorites__card-info' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={isFavorite
              ? 'place-card__bookmark-button place-card__bookmark-button--active button'
              : 'place-card__bookmark-button button'} type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
