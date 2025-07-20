import faker from 'faker';
import { changeCity, changeSortType, offersReducer, updateOffer } from './offers-reducer';
import { getRandomSortOption, makeFakeCity, makeFakeOffer, makeFakeOffers } from '../../utils/mocks';
import { cities, SortTypeOptions } from '../../const';
import { fetchOffersAction } from '../api-actions';

describe('OffersReducer Slice', () => {
  const fakeState = {
    offers: makeFakeOffers(),
    city: makeFakeCity(),
    sortOption: getRandomSortOption(),
    isOffersLoading: faker.datatype.boolean(),
    hasError: faker.datatype.boolean(),
  };

  const fakeInitialState = {
    offers: [],
    city: cities[0],
    sortOption: SortTypeOptions.Popular,
    isOffersLoading: false,
    hasError: false,
  };

  const fakeOffer = makeFakeOffer();
  const fakeOffers = makeFakeOffers();
  const fakeCity = makeFakeCity();
  const fakeSortType = getRandomSortOption();
  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const result = offersReducer.reducer(fakeState, emptyAction);

    expect(result).toEqual(fakeState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const result = offersReducer.reducer(undefined, emptyAction);

    expect(result).toEqual(fakeInitialState);
  });

  it('should change city with "changeCity" action', () => {
    const result = offersReducer.reducer(fakeState, changeCity(fakeCity));

    expect(result.city).toEqual(fakeCity);
  });
  it('should change sort type with "changeSortType" action', () => {
    const result = offersReducer.reducer(fakeState, changeSortType(fakeSortType));

    expect(result.sortOption).toBe(fakeSortType);
  });
  it('should update offer with "updateOffer" action', () => {
    const stateWithOffers = { ...fakeState, offers: [...fakeOffers, fakeOffer] };
    const updatedOffer = { ...fakeOffer, title: 'Updated Title' };

    const result = offersReducer.reducer(stateWithOffers, updateOffer(updatedOffer));

    expect(result.offers).toContainEqual(updatedOffer);
    expect(result.offers.find((offer) => offer.id === fakeOffer.id)?.title).toBe('Updated Title');
  });
  it('should set isOffersLoading true and hasError false with "fetchOffersAction.pending"', () => {
    const result = offersReducer.reducer(fakeState, fetchOffersAction.pending);

    expect(result.isOffersLoading).toBe(true);
    expect(result.hasError).toBe(false);
  });
  it('should set offers and isOffersLoading false with "fetchOffersAction.fulfilled"', () => {
    const result = offersReducer.reducer(
      fakeState, fetchOffersAction.fulfilled(fakeOffers, 'requestId', undefined));

    expect(result.offers).toEqual(fakeOffers);
    expect(result.isOffersLoading).toBe(false);
  });
  it('should set isOffersLoading false and hasError true with "fetchOffersAction.rejected"', () => {
    const result = offersReducer.reducer(
      fakeState, fetchOffersAction.rejected(new Error(), 'requestId', undefined));

    expect(result.isOffersLoading).toBe(false);
    expect(result.hasError).toBe(true);
  });
});
