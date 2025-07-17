import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { useAppSelector } from '../../../hooks';
import { selectFavorites } from '../../../store/selectors/user';
import { OfferType } from '../../../types/offer';
import { CityName } from '../../../const';

const renderFavoritesList = (cities: CityName[], favoriteOffers: OfferType[]) => (
  <ul className="favorites__list">
    {cities.map((city) => {
      const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city);

      return (
        <li className="favorites__locations-items" key={city}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            {cityOffers.map((offer) => (
              <PlaceCard
                key={offer.id}
                offer={offer}
                cardName="FAVORITES"
              />
            ))}
          </div>
        </li>
      );
    })}
  </ul>
);

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavorites);

  const citiesSet = new Set(favoriteOffers.map((offer) => offer.city.name));
  const cities = [...citiesSet].sort();
  const favoritesList = renderFavoritesList(cities, favoriteOffers);

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          {favoritesList}
        </section>
      </div>
    </main>
  );
}

export default Favorites;
