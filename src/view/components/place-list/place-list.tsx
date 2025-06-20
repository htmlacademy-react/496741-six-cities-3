import { OfferType } from '../../../types/types.ts';
import PlaceCard from '../place-card/place-card.tsx';

type PlaceListProps = {
  offers: OfferType[];
  onOfferHover: (offer?: OfferType) => void;
}

function PlaceList({offers, onOfferHover}: PlaceListProps): JSX.Element {

  const handleOfferHover = (offer?: OfferType) => {
    onOfferHover(offer || undefined);
  };

  return (
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
  );
}

export default PlaceList;
