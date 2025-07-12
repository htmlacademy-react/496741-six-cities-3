import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities, SortTypeOptions } from '../const.ts';
import { CityType, OfferType, ReviewType } from '../types/types.ts';
import { AuthInfo } from '../types/auth.ts';
import {
  changeCity,
  changeSortType,
  setOffer,
  setOffers,
  requireAuthorization,
  setAuthInfo,
  setError,
  fetchFavorites,
  setOffersLoadingStatus,
  setOffersNearby,
  setComments,
  addComment} from './action';

type StateType = {
  offers: OfferType[];
  offer: OfferType | null;
  offersNearby: OfferType[];
  comments: ReviewType[];
  city: CityType;
  sortOption: SortTypeOptions;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  error: string | null;
  authInfo: AuthInfo | null;
  favorites: OfferType[];
}

const initialState: StateType = {
  offers: [],
  offer: null,
  offersNearby: [],
  comments: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  error: null,
  authInfo: null,
  favorites: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthInfo, (state, action) => {
      state.authInfo = action.payload;
    })
    .addCase(fetchFavorites, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
