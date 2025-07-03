import { useState } from 'react';
import { OfferType } from '../../../types/types.ts';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import PlaceList from '../../components/place-list/place-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../../hooks/index.ts';
import { getFilteredCityOffers } from '../../../utils.ts';
import { selectCity, selectOffers } from '../../../store/selectors/offers.ts';

function Main(): JSX.Element {
  const city = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);
  const filteredOffers = getFilteredCityOffers(offers, city);

  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || undefined);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <PlaceList
            offers={filteredOffers}
            onOfferHover={handleOfferHover}
          />
          <div className="cities__right-section">
            <Map
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
