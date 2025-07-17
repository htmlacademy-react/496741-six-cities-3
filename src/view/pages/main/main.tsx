import { useState } from 'react';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import PlaceList from '../../components/place-list/place-list.tsx';
import Map from '../../components/map/map.tsx';
import { useAppSelector } from '../../../hooks/index.ts';
import { selectCity, selectErrorStatus, selectOffers } from '../../../store/selectors/offers.ts';
import { OfferType } from '../../../types/offer.ts';
import MainEmpty from '../../components/main-empty/main-empty.tsx';
import { getFilteredCityOffers } from '../../../utils/utils.ts';

function Main(): JSX.Element {
  const city = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);
  const hasError = useAppSelector(selectErrorStatus);
  const filteredOffers = getFilteredCityOffers(offers, city);
  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || undefined);
  };

  return (
    <main className={`page__main page__main--index ${hasError && 'page__main--index-empty'}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList />
      </div>
      <div className="cities">
        <div
          className={`cities__places-container ${hasError && 'cities__places-container--empty'} container`}
        >
          {hasError
            ? <MainEmpty city={city} />
            :
            <>
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
            </>}
        </div>
      </div>
    </main>
  );
}

export default Main;
