import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities, SortTypeOptions } from '../const.ts';
import { CityType, OfferType } from '../types/types.ts';
import { AuthInfo } from '../types/auth.ts';
import {
  changeCity,
  changeSortType,
  getOffers,
  requireAuthorization,
  setAuthInfo,
  setError,
  setFavorite,
  setOffersLoadingStatus } from './action';

type StateType = {
  offers: OfferType[];
  city: CityType;
  sortOption: SortTypeOptions;
  authorizationStatus: AuthorizationStatus;
  isOffersLoading: boolean;
  error: string | null;
  authInfo: AuthInfo | null;
  favorite: OfferType[];
}

const initialState: StateType = {
  offers: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersLoading: false,
  error: null,
  authInfo: null,
  favorite: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
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
    .addCase(setFavorite, (state, action) => {
      state.favorite = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
