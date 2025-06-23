import { useState } from 'react';
import { cities } from '../../../const.ts';
import { CityType, OfferType } from '../../../types/types.ts';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import PlaceList from '../../components/place-list/place-list.tsx';
import Map from '../../components/map/map.tsx';

const DEFAULT_ACTIVE_LOCATION: CityType = cities[0];

type MainProps = {
  offers: OfferType[];
};

function Main({offers}: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);
  const [activeLocation, setActiveLocation] = useState<CityType>(DEFAULT_ACTIVE_LOCATION);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || undefined);
  };

  const handleLocationClick = (city: CityType): void => {
    setActiveLocation(city);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === activeLocation.name);

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList
          activeLocation={activeLocation}
          onLocationClick={handleLocationClick}
        />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <PlaceList
            offers={filteredOffers}
            onOfferHover={handleOfferHover}
            activeLocation = {activeLocation}
          />
          <div className="cities__right-section">
            <Map
              city = {activeLocation}
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
