import { NameSpace } from '../../const.ts';
import { makeFakeComments, makeFakeFullOffer, makeFakeOffersNearby, makeFakeState } from '../../utils/mocks';
import { selectComments, selectOffer, selectOfferPageLoading, selectOffersNearby } from './offer';
import faker from 'faker';

describe('Selectors offer', () => {
  const fakeFullOffer = makeFakeFullOffer();
  const fakeState = makeFakeState();
  const state = {
    ...fakeState,
    [NameSpace.Offer]: {
      ...fakeState[NameSpace.Offer],
      offer: fakeFullOffer,
      offersNearby: makeFakeOffersNearby(fakeFullOffer.city),
      comments: makeFakeComments(),
      isOfferPageLoading: faker.datatype.boolean(),
    }
  };

  it('should return offer from the state', () => {
    const { offer } = state[NameSpace.Offer];
    const result = selectOffer(state);
    expect(result).toBe(offer);
  });

  it('should return offersNearby from the state', () => {
    const { offersNearby } = state[NameSpace.Offer];
    const result = selectOffersNearby(state);
    expect(result).toBe(offersNearby);
  });

  it('should return comments from the state', () => {
    const { comments } = state[NameSpace.Offer];
    const result = selectComments(state);
    expect(result).toBe(comments);
  });

  it('should return isOfferPageLoading from the state', () => {
    const { isOfferPageLoading } = state[NameSpace.Offer];
    const result = selectOfferPageLoading(state);
    expect(result).toBe(isOfferPageLoading);
  });

});
