
import { CityName, SortTypeOptions } from '../const';
import { makeFakeCity, makeFakeOffer } from '../utils/mocks';
import { getFilteredCityOffers, getSortedOffers } from './utils';

describe('Functions: getFilteredCityOffers & getSortedOffers', () => {
  describe('getFilteredCityOffers', () => {
    it('should return only offers matching the specified city', () => {
      const city = {...makeFakeCity(), name: 'Amsterdam' as CityName};
      const offers = [
        { ...makeFakeOffer(), city },
        { ...makeFakeOffer(), city: { ...makeFakeCity(), name: 'Paris' as CityName } },
        { ...makeFakeOffer(), city },
      ];

      const result = getFilteredCityOffers(offers, city);

      expect(result).toHaveLength(2);
      result.forEach((offer) => {
        expect(offer.city.name).toBe(city);
      });
    });
  });

  describe('getSortedOffers', () => {
    const offers = [
      { ...makeFakeOffer(), price: 200, rating: 5 },
      { ...makeFakeOffer(), price: 100, rating: 3 },
      { ...makeFakeOffer(), price: 300, rating: 4 },
    ];

    it('should return offers unsorted when sort is Popular', () => {
      const result = getSortedOffers(offers, SortTypeOptions.Popular);
      expect(result).toEqual(offers);
    });

    it('should sort offers by price low to high', () => {
      const result = getSortedOffers(offers, SortTypeOptions.PriceLowToHigh);
      const prices = result.map((offer) => offer.price);
      expect(prices).toEqual([100, 200, 300]);
    });

    it('should sort offers by price high to low', () => {
      const result = getSortedOffers(offers, SortTypeOptions.PriceHighToLow);
      const prices = result.map((offer) => offer.price);
      expect(prices).toEqual([300, 200, 100]);
    });

    it('should sort offers by top rated first', () => {
      const result = getSortedOffers(offers, SortTypeOptions.TopRatedFirst);
      const ratings = result.map((offer) => offer.rating);
      expect(ratings).toEqual([5, 4, 3]);
    });
  });
});
