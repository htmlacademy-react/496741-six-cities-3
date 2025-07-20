import { NameSpace } from '../../const.ts';
import faker from 'faker';
import { makeFakeCity, makeFakeOffers, getRandomSortOption } from '../../utils/mocks.ts';
import { selectCity, selectErrorStatus, selectOffers, selectOffersLoadingStatus, selectSortOption } from './offers.ts';

describe('Selectors offers', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      city: makeFakeCity(),
      sortOption: getRandomSortOption(),
      isOffersLoading: faker.datatype.boolean(),
      hasError: faker.datatype.boolean(),
    }
  };

  it('should return offers from the state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = selectOffers(state);
    expect(result).toEqual(offers);
  });

  it('should return city from the state', () => {
    const { city } = state[NameSpace.Offers];
    const result = selectCity(state);
    expect(result).toBe(city);
  });

  it('should return sortOption from the state', () => {
    const { sortOption } = state[NameSpace.Offers];
    const result = selectSortOption(state);
    expect(result).toBe(sortOption);
  });

  it('should return isOffersLoading from the state', () => {
    const { isOffersLoading } = state[NameSpace.Offers];
    const result = selectOffersLoadingStatus(state);
    expect(result).toBe(isOffersLoading);
  });

  it('should return hasError from the state', () => {
    const { hasError } = state[NameSpace.Offers];
    const result = selectErrorStatus(state);
    expect(result).toBe(hasError);
  });

});
