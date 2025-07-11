import { useEffect, useRef } from 'react';
import { OfferType } from '../../../types/types.ts';
import PlaceCard from '../place-card/place-card.tsx';
import PlacesSorting from '../places-sorting/places-sorting.tsx';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectCity } from '../../../store/selectors/offers.ts';

type PlaceListProps = {
  onOfferHover: (offer?: OfferType) => void;
  offers: OfferType[];
}

function PlaceList({offers, onOfferHover}: PlaceListProps): JSX.Element {

  const city = useAppSelector(selectCity);

  const handleOfferHover = (offer?: OfferType) => {
    onOfferHover(offer || undefined);
  };

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
        {offers.map((offer) => (
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
