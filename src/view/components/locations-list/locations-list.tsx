import { cities } from '../../../const.ts';
import { CityType } from '../../../types/types.ts';

type LocationsListProps = {
  activeLocation: CityType;
  onLocationClick: (city: CityType) => void;
};

function LocationsList({activeLocation, onLocationClick}: LocationsListProps): JSX.Element {
  const handleLocationClick = (city: CityType) => {
    onLocationClick(city);
  };

  return (
    <section className="locations container">
      <ul
        className="locations__list tabs__list"
      >
        {cities.map((city) => (
          <li
            className="locations__item"
            key={city.name}
            onClick={() => handleLocationClick(city)}
          >
            <a className={activeLocation === city ?
              'locations__item-link tabs__item tabs__item--active' :
              'locations__item-link tabs__item'} href="#"
            >
              <span>{city.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
