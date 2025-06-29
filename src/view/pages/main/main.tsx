import { useState } from 'react';
import { OfferType } from '../../../types/types.ts';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import PlaceList from '../../components/place-list/place-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../../hooks/index.ts';
import { getFilteredCityOffers } from '../../../utils.ts';

function Main(): JSX.Element {
  const city = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const filteredOffers = getFilteredCityOffers(offers, city);

  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || undefined);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList city={city} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <PlaceList
            city={city}
            offers={filteredOffers}
            onOfferHover={handleOfferHover}
          />
          <div className="cities__right-section">
            <Map
              city={city}
              offers={filteredOffers}
              activeOffer = {activeOffer}
              mapName='CITIES'
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
