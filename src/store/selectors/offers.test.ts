import { NameSpace } from '../../const.ts';
import faker from 'faker';
import { fakeSortOption, makeFakeCity, makeFakeOffers } from '../../utils/mocks.ts';
import { selectOffers } from './offers.ts';

describe('Selectors offers', () => {
  const state = {
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      city: makeFakeCity(),
      sortOption: fakeSortOption,
      isOffersLoading: faker.datatype.boolean(),
      hasError: faker.datatype.boolean(),
    }
  };

  it('should return offers from the state', () => {
    const { offers } = state[NameSpace.Offers];
    const result = selectOffers(state);
    expect(result).toBe(offers);
  });

});
