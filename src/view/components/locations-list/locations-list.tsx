import { CityName } from '../../../const';

type LocationsListProps = {
  activeLocation: CityName;
};

function LocationsList({activeLocation}: LocationsListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(CityName).map((city) => (
          <li className="locations__item" key={city}>
            <a className={activeLocation === city ?
              'locations__item-link tabs__item tabs__item--active' :
              'locations__item-link tabs__item'} href="#"
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default LocationsList;
