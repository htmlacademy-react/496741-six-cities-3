import { useEffect, useMemo, useRef } from 'react';
import PlaceCard from '../place-card/place-card.tsx';
import PlacesSorting from '../places-sorting/places-sorting.tsx';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectCity, selectSortOption } from '../../../store/selectors/offers.ts';
import { OfferType } from '../../../types/offer.ts';
import { getSortedOffers } from '../../../utils.ts';

type PlaceListProps = {
  onOfferHover: (offer?: OfferType) => void;
  offers: OfferType[];
}

function PlaceList({offers, onOfferHover}: PlaceListProps): JSX.Element {

  const city = useAppSelector(selectCity);
  const sortOption = useAppSelector(selectSortOption);

  const handleOfferHover = (offer?: OfferType) => {
    onOfferHover(offer || undefined);
  };

  const sortedOffers = useMemo(
    () => getSortedOffers(offers, sortOption),
    [offers, sortOption]
  );

  const scrollRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [city]);

  return (
    <section className="cities__places places" ref={scrollRef}>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} place{offers.length > 1 && 's'} to stay in {city.name}
      </b>
      <PlacesSorting />
      <div className="cities__places-list places__list tabs__content">
        {sortedOffers.map((offer) => (
          <PlaceCard
            key={offer.id}
            offer={offer}
            onOfferHover={handleOfferHover}
            cardName='CITIES'
          />
        ))}
      </div>
    </section>
  );
}

export default PlaceList;
