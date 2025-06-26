import { cities } from '../../../const.ts';
import { useAppDispatch } from '../../../hooks/index.ts';
import { changeCity } from '../../../store/action.ts';
import { CityType } from '../../../types/types.ts';

type LocationsListProps = {
  city: CityType;
};

function LocationsList({city}: LocationsListProps): JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul
        className="locations__list tabs__list"
      >
        {cities.map((cityItem) => (
          <li
            className="locations__item"
            key={cityItem.name}
            onClick={() => dispatch(changeCity(cityItem))}
          >
            <a className={city === cityItem ?
              'locations__item-link tabs__item tabs__item--active' :
              'locations__item-link tabs__item'} href="#"
            >
              <span>{cityItem.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
