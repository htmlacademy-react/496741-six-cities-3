import { useState } from 'react';
import { CityName } from '../../../const.ts';
import { OfferType } from '../../../types/types.ts';
import LocationsList from '../../components/locations-list/locations-list.tsx';
import PlaceList from '../../components/place-list/place-list.tsx';
import Map from '../../components/map/map.tsx';

type MainProps = {
  offers: OfferType[];
  activeLocation: CityName;
};

function Main({offers, activeLocation}: MainProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<OfferType | undefined>(undefined);
  const handleOfferHover = (offer?: OfferType) => {
    setActiveOffer(offer || undefined);
  };

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <LocationsList activeLocation={activeLocation} />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                <li className="places__option" tabIndex={0}>Price: low to high</li>
                <li className="places__option" tabIndex={0}>Price: high to low</li>
                <li className="places__option" tabIndex={0}>Top rated first</li>
              </ul>
            </form>
            <PlaceList offers={offers} onOfferHover={handleOfferHover}/>
          </section>
          <div className="cities__right-section">
            <Map
              city = {offers[0].city}
              offers={offers}
              activeOffer = {activeOffer}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
