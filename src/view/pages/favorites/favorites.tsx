import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { fetchFavoritesAction } from '../../../store/api-actions';
import { selectFavorites } from '../../../store/selectors/user';
import FavoritesList from '../../components/favorites-list/favorites-list';

function Favorites(): JSX.Element {
  const favoriteOffers = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  const isEmpty = favoriteOffers.length === 0;
  const cityNamesSorted = [...new Set(favoriteOffers.map((offer) => offer.city.name))];

  return (
    <main className={`page__main page__main--favorites ${isEmpty ? 'page__main--favorites-empty' : ''}`}>
      <div className="page__favorites-container container">
        {isEmpty ? (
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
            </div>
          </section>
        ) : (
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList cityNames={cityNamesSorted} favoriteOffers={favoriteOffers} />
          </section>
        )}
      </div>
    </main>
  );
}

export default Favorites;
