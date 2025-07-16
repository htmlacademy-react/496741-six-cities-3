import { SortTypeOptions } from './const.ts';
import { OfferType } from './types/offer.ts';
import { CityType } from './types/offers.ts';

const getFilteredCityOffers = (offers: OfferType[], city: CityType): OfferType[] =>
  offers.filter((offer) => offer.city.name === city.name);

const getSortFunction = (sortOption: SortTypeOptions):
((firstOffer: OfferType, secondOffer: OfferType) => number) => {
  switch (sortOption) {
    case SortTypeOptions.Popular:
      return () => 0;
    case SortTypeOptions.PriceLowToHigh:
      return (firstOffer, secondOffer) => firstOffer.price - secondOffer.price;
    case SortTypeOptions.PriceHighToLow:
      return (firstOffer, secondOffer) => secondOffer.price - firstOffer.price;
    case SortTypeOptions.TopRatedFirst:
      return (firstOffer, secondOffer) => secondOffer.rating - firstOffer.rating;
  }
};

const getSortedOffers = (offers: OfferType[], sortOption: SortTypeOptions): OfferType[] =>
  offers.slice().sort(getSortFunction(sortOption));

export { getFilteredCityOffers, getSortedOffers };
