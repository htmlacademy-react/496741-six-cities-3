import { SortTypeOptions } from '../const.ts';
import { OfferType, ReviewType } from '../types/offer.ts';
import { CityType } from '../types/offers.ts';

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

const getFormattedDate = (dateString: string): string => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return '';
  }

  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
  });
};

const getSortedReviews = (reviews: ReviewType[], length: number): ReviewType[] => {
  const sortedReviews = [...reviews].sort((firstReview, secondReview) =>
    new Date(secondReview.date).getTime() - new Date(firstReview.date).getTime());
  return sortedReviews.slice(0, length);
};

const capitalize = (str: string): string => {
  if (!str) {
    return '';
  }
  return str[0].toUpperCase() + str.slice(1);
};

export { getFilteredCityOffers, getSortedOffers, getFormattedDate, getSortedReviews, capitalize };
