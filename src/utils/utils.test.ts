
import { CityName, SortTypeOptions } from '../const';
import { ReviewType } from '../types/offer';
import { makeFakeCity, makeFakeComment, makeFakeOffer } from '../utils/mocks';
import { getFilteredCityOffers, getFormattedDate, getSortedOffers, getSortedReviews } from './utils';

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
        expect(offer.city.name).toBe(city.name);
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

describe('Function: getFormattedDate', () => {
  it('should format ISO date string as "Month Year"', () => {
    const inputDate = '2025-06-27T21:00:01.051Z';
    const formatted = getFormattedDate(inputDate);

    expect(formatted).toBe('June 2025');
  });

  it('should return empty string for invalid date', () => {
    const invalidDate = 'invalid-date';
    const formatted = getFormattedDate(invalidDate);
    expect(formatted).toBe('');
  });
});

describe('Function: getSortedReviews', () => {
  it('should sort reviews by date descending and limit the number of results', () => {
    const reviews: ReviewType[] = [
      { ...makeFakeComment(), date: '2024-06-01T10:00:00.000Z' },
      { ...makeFakeComment(), date: '2025-07-01T10:00:00.000Z' },
      { ...makeFakeComment(), date: '2023-05-01T10:00:00.000Z' },
    ];

    const result = getSortedReviews(reviews, 2);

    expect(result).toHaveLength(2);
    expect(new Date(result[0].date).getTime()).toBeGreaterThan(new Date(result[1].date).getTime());
    expect(result.map((r) => r.date)).toEqual([
      '2025-07-01T10:00:00.000Z',
      '2024-06-01T10:00:00.000Z',
    ]);
  });

  it('should return all reviews if length exceeds array length', () => {
    const reviews = [
      { ...makeFakeComment(), date: '2024-06-01T10:00:00.000Z' },
      { ...makeFakeComment(), date: '2025-07-01T10:00:00.000Z' },
    ];

    const result = getSortedReviews(reviews, 5);

    expect(result).toHaveLength(2);
  });

  it('should return an empty array when passed an empty array', () => {
    const result = getSortedReviews([], 5);

    expect(result).toEqual([]);
  });
});
