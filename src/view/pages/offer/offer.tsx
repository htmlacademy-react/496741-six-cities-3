import ImageGallery from '../../components/image-gallery/image-gallery.tsx';
import NearPlaces from '../../components/near-places/near-places.tsx';
import NotFound from '../not-found/not-found.tsx';
import ReviewsList from '../../components/reviews-list/reviews-list.tsx';
import Map from '../../components/map/map.tsx';
import { DISPLAYED_NEARBY_OFFERS } from '../../../const.ts';
import { useAppDispatch, useAppSelector } from '../../../hooks/index.ts';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchCommentsAction, fetchOfferAction, fetchOffersNearbyAction } from '../../../store/api-actions.ts';
import { selectOffers } from '../../../store/selectors/offers.ts';
import { selectOffer, selectOfferPageLoading, selectOffersNearby } from '../../../store/selectors/offer.ts';
import { resetOfferData } from '../../../store/offer/offer-reducer.ts';
import LoadingScreen from '../loading-screen/loading-screen.tsx';
import { nanoid } from '@reduxjs/toolkit';

function Offer(): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const offer = useAppSelector(selectOffer);
  const offersNearby = useAppSelector(selectOffersNearby);
  const offerPageIsLoading = useAppSelector(selectOfferPageLoading);

  const { id } = useParams();

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchCommentsAction(id));
      dispatch(fetchOffersNearbyAction(id));
    }

    return () => {
      dispatch(resetOfferData());
    };
  }, [dispatch, id]);

  if (offerPageIsLoading) {
    return <LoadingScreen />;
  }

  if (!offer) {
    return <NotFound type='ID_IS_NOT_CORRECT' />;
  }

  const {
    rating,
    title,
    price,
    type,
    isFavorite,
    isPremium,
    description,
    bedrooms,
    goods,
    host,
    maxAdults,
    images,
  } = offer;

  const currentOffer = offers.find((offerItem) => offerItem.id === offer.id);
  const displayedOffersNearby = offersNearby.slice(0, DISPLAYED_NEARBY_OFFERS);
  const displayedOffers = currentOffer ? [...displayedOffersNearby, currentOffer] : [];

  return (
    <main className="page__main page__main--offer">
      <section className="offer" data-testid="offer-page">
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
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxAdults} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{price}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {goods.map((good) => {
                  const goodsId = nanoid();
                  return (
                    <li className="offer__inside-item" key={`${good}-${goodsId}`}>
                      {good}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="offer__avatar user__avatar"
                    src={host.avatarUrl} width="74" height="74" alt="Host avatar"
                  />
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                {host.isPro && <span className="offer__user-status">Pro</span>}
              </div>
              <div className="offer__description">
                <p className="offer__text">{description}</p>
              </div>
            </div>
            {id && <ReviewsList id={id} />}
          </div>
        </div>
        <Map
          offers={displayedOffers}
          activeOffer = {currentOffer}
          mapName='OFFER'
        />
      </section>
      {offers && <NearPlaces offers={displayedOffersNearby} />}
    </main>
  );
}

export default Offer;
