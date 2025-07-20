import { NameSpace } from '../../const.ts';
import { State } from '../../types/state';

const selectOffer = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].offer;
const selectOffersNearby = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].offersNearby;
const selectComments = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].comments;
const selectOfferPageLoading = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].isOfferPageLoading;
const selectReviewRating = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].reviewRating;
const selectReviewComment = (state: Pick<State, NameSpace.Offer>) => state[NameSpace.Offer].reviewComment;

export {
  selectOffer,
  selectOffersNearby,
  selectComments,
  selectOfferPageLoading,
  selectReviewRating,
  selectReviewComment };
