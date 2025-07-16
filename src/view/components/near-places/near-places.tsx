import { OfferType } from '../../../types/offers.ts';
import PlaceCard from '../place-card/place-card.tsx';

type NearPlacesProps = {
  offers: OfferType[];
}

function NearPlaces({offers}: NearPlacesProps): JSX.Element {
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {offers.map((offer) =>
            <PlaceCard key={offer.id} offer={offer} cardName='NEAR_PLACES' />
          )}
        </div>
      </section>
    </div>
  );
}

export default NearPlaces;
