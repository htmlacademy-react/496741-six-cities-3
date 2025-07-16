import { CityType, OfferType } from './types/offers.ts';

const getFilteredCityOffers = (offers: OfferType[], city: CityType): OfferType[] =>
  offers.filter((offer) => offer.city.name === city.name);

export { getFilteredCityOffers };
