import { State } from '../../types/state.ts';

const selectCity = (state: State) => state.city;
const selectOffers = (state: State) => state.offers;
const selectOffer = (state: State) => state.offer;
const selectOffersNearby = (state: State) => state.offersNearby;
const selectComments = (state: State) => state.comments;
const selectOffersLoadingStatus = (state: State) => state.isOffersLoading;

export {
  selectCity,
  selectOffers,
  selectOffer,
  selectOffersNearby,
  selectComments,
  selectOffersLoadingStatus };
