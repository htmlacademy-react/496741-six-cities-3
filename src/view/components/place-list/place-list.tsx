import { useEffect, useRef } from 'react';
import { CityType, OfferType } from '../../../types/types.ts';
import PlaceCard from '../place-card/place-card.tsx';
import PlacesSorting from '../places-sorting/places-sorting.tsx';

type PlaceListProps = {
  onOfferHover: (offer?: OfferType) => void;
  city: CityType;
  offers: OfferType[];
}

function PlaceList({city, offers, onOfferHover}: PlaceListProps): JSX.Element {

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
        {`${offers.length} places to stay in ${city.name}`}
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
