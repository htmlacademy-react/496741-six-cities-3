import { makeFakeComment, makeFakeCommentForPost, makeFakeComments, makeFakeFullOffer, makeFakeOffer, makeFakeOffersNearby } from '../../utils/mocks';
import faker from 'faker';
import { offerReducer, resetOfferData } from './offer-reducer';
import { fetchCommentsAction, fetchOfferAction, fetchOffersNearbyAction, postCommentAction } from '../api-actions';

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

  const fakeOffer = makeFakeOffer();
  const fakeComment = makeFakeComment();
  const fakeComments = makeFakeComments();
  const fakeCommentForPost = makeFakeCommentForPost();
  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const result = offerReducer.reducer(fakeState, emptyAction);

    expect(result).toEqual(fakeState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const result = offerReducer.reducer(undefined, emptyAction);

    expect(result).toEqual(fakeInitialState);
  });

  it('should reset offer data with "resetOfferData" action', () => {
    const result = offerReducer.reducer(fakeState, resetOfferData());
    expect(result).toEqual({
      ...fakeState,
      offer: null,
      comments: [],
      offersNearby: [],
    });
  });

  it('should set isOfferPageLoading true with "fetchOfferAction.pending"', () => {
    const result = offerReducer.reducer(fakeState, fetchOfferAction.pending);
    expect(result.isOfferPageLoading).toBe(true);
  });

  it('should set offer and isOfferPageLoading false with "fetchOfferAction.fulfilled"', () => {
    const result = offerReducer.reducer(
      fakeState,
      fetchOfferAction.fulfilled(fakeFullOffer, 'requestId', fakeFullOffer.id)
    );
    expect(result.offer).toEqual(fakeFullOffer);
    expect(result.isOfferPageLoading).toBe(false);
  });

  it('should set isOfferPageLoading false with "fetchOfferAction.rejected"', () => {
    const result = offerReducer.reducer(
      fakeState,
      fetchOfferAction.rejected(new Error(), 'requestId', fakeFullOffer.id)
    );
    expect(result.isOfferPageLoading).toBe(false);
  });

  it('should set offersNearby with "fetchOffersNearbyAction.fulfilled"', () => {
    const fakeOffersNearby = makeFakeOffersNearby(fakeOffer.city);
    const result = offerReducer.reducer(
      fakeState,
      fetchOffersNearbyAction.fulfilled(fakeOffersNearby, 'requestId', fakeOffer.id)
    );
    expect(result.offersNearby).toEqual(fakeOffersNearby);
  });

  it('should set comments with "fetchCommentsAction.fulfilled"', () => {
    const result = offerReducer.reducer(
      fakeState,
      fetchCommentsAction.fulfilled(fakeComments, 'requestId', fakeOffer.id)
    );
    expect(result.comments).toEqual(fakeComments);
  });

  it('should add new comment with "postCommentAction.fulfilled"', () => {
    const result = offerReducer.reducer(
      fakeState,
      postCommentAction.fulfilled(fakeComment, 'requestId', fakeCommentForPost)
    );
    expect(result.comments).toContainEqual(fakeComment);
  });

});
