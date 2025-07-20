import { useAppSelector } from '../../../hooks';
import { selectFavorites } from '../../../store/selectors/user';
import FavoritesList from '../../components/favorites-list/favorites-list';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavorites);

  const citiesSet = new Set(favoriteOffers.map((offer) => offer.city));
  const cities = [...citiesSet].sort();

  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <FavoritesList cities={cities} favoriteOffers={favoriteOffers} />
        </section>
      </div>
    </main>
  );
}

export default Favorites;
