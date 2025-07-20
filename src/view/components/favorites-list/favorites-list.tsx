import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { OfferType } from '../../../types/offer';
import { CityType } from '../../../types/offers';

type FavoritesListProps = {
  cities: CityType[];
  favoriteOffers: OfferType[];
};

function FavoritesList({ cities, favoriteOffers }: FavoritesListProps): JSX.Element {

  return (
    <ul className="favorites__list" data-testid="favorites-list">
      {cities.map((city) => {
        const cityOffers = favoriteOffers.filter((offer) => offer.city.name === city.name);

        return (
          <li className="favorites__locations-items" key={city.name} data-testid="favorites-city-item">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{city.name}</span>
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
}

export default FavoritesList;
