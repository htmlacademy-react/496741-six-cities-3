import { Link } from 'react-router-dom';
import { NamePlaceCard } from '../../../const.ts';
import { isFavoriteName } from './utils.ts';
import cn from 'classnames';
import { OfferType } from '../../../types/offer.ts';
import React from 'react';
import { postFavoriteAction } from '../../../store/api-actions.ts';
import { useAppDispatch } from '../../../hooks/index.ts';
import { useAuth } from '../../../hooks/auth.ts';

type PlaceCardProps = {
  offer: OfferType;
  onOfferHover?: (offer?: OfferType) => void;
  cardName: keyof typeof NamePlaceCard;
}

function PlaceCard({
  offer,
  onOfferHover,
  cardName,
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

  const dispatch = useAppDispatch();

  const userIsAuth = useAuth();
  const handleFavoriteClick = React.useCallback(
    () => {
      dispatch(postFavoriteAction({offer, userIsAuth}));
    },
    [offer, dispatch, userIsAuth],
  );
  const handleMouseOn = () => onOfferHover && onOfferHover(offer);
  const handleMouseOff = () => onOfferHover && onOfferHover(undefined);
  const isFavoriteCard = isFavoriteName(cardName);

  return (
    <article
      className={`${NamePlaceCard[cardName]}__card place-card`}
      onMouseEnter={handleMouseOn}
      onMouseLeave={handleMouseOff}
    >
      {isPremium && <div className="place-card__mark"><span>Premium</span></div>}
      <div className={`${NamePlaceCard[cardName]}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={isFavoriteCard ? '150' : '260'}
            height={isFavoriteCard ? '110' : '200'} alt="Place image"
          />
        </Link>
      </div>
      <div
        className={cn(
          {'favorites__card-info': isFavoriteCard},
          'place-card__info'
        )}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={cn(
              'place-card__bookmark-button',
              {'place-card__bookmark-button--active': isFavorite},
              'button'
            )}
            onClick={handleFavoriteClick}
            type="button"
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
