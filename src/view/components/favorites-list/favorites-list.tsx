import { Link } from 'react-router-dom';
import PlaceCard from '../../components/place-card/place-card';
import { OfferType } from '../../../types/offer';
import { CityName } from '../../../const';

type FavoritesListProps = {
  cityNames: CityName[];
  favoriteOffers: OfferType[];
};

function FavoritesList({ cityNames, favoriteOffers }: FavoritesListProps): JSX.Element {

  return (
    <ul className="favorites__list" data-testid="favorites-list">
      {cityNames.map((cityName) => {
        const cityOffers = favoriteOffers.filter((offer) => offer.city.name === cityName);

        return (
          <li className="favorites__locations-items" key={cityName} data-testid="favorites-city-item">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to="/">
                  <span>{cityName}</span>
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
