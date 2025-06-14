import { Link } from 'react-router-dom';
import { OfferType } from '../../../types/types.ts';

type CardNameType = {
  isFavoriteCard: boolean | undefined;
  isNearPlacesCard: boolean | undefined;
}

const getCardName = ({isFavoriteCard, isNearPlacesCard}: CardNameType): string => {
  let cardName: string = 'cities';
  if (isFavoriteCard) {
    cardName = 'favorites';
  } else if (isNearPlacesCard) {
    cardName = 'near-places';
  }
  return cardName;
};

type PlaceCardProps = {
  offer: OfferType;
  onOfferHover?: (offer?: OfferType) => void;
  isFavoriteCard?: boolean;
  isNearPlacesCard?: boolean;
}

function PlaceCard({
  offer,
  onOfferHover,
  isFavoriteCard,
  isNearPlacesCard,
}: PlaceCardProps): JSX.Element {
  const {
    id,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    isPremium,
  } = offer;

  const cardName = getCardName({
    isFavoriteCard,
    isNearPlacesCard,
  });

  const handleMouseOn = () => onOfferHover && onOfferHover(offer);
  const handleMouseOff = () => onOfferHover && onOfferHover(undefined);

  return (
    <article
      className={`${cardName}__card place-card`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${cardName}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
