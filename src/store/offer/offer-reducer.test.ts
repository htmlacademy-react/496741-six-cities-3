import { makeFakeComments, makeFakeFullOffer, makeFakeOffersNearby } from '../../utils/mocks';
import faker from 'faker';
import { offerReducer } from './offer-reducer';

describe('OfferReducer Slice', () => {
  const fakeFullOffer = makeFakeFullOffer();
  const fakeState = {
    offer: fakeFullOffer,
    offersNearby: makeFakeOffersNearby(fakeFullOffer.city),
    comments: makeFakeComments(),
    isOfferPageLoading: faker.datatype.boolean(),
  };

  const fakeInitialState = {
    offer: null,
    offersNearby: [],
    comments: [],
    isOfferPageLoading: false,
  };

  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const result = offerReducer.reducer(fakeState, emptyAction);

    expect(result).toEqual(fakeState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const result = offerReducer.reducer(undefined, emptyAction);

    expect(result).toEqual(fakeInitialState);
  });
});
