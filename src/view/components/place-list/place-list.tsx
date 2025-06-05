import { OfferType } from '../../../types/types.ts';
import PlaceCard from '../place-card/place-card.tsx';

type PlaceListProps = {
  offers: OfferType[];
  handleHover: (offer?: OfferType) => void;
}

function PlaceList({offers, handleHover}: PlaceListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          handleHover={handleHover}
        />
      ))}
    </div>
  );
}

export default PlaceList;
