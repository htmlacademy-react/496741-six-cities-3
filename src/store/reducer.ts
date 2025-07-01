import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities, SortTypeOptions } from '../const.ts';
import { changeCity, changeSortType, getOffers, requireAuthorization } from './action';
import { CityType, OfferType } from '../types/types.ts';

type StateType = {
  offers: OfferType[];
  city: CityType;
  sortOption: SortTypeOptions;
  authorizationStatus: AuthorizationStatus;
}

const initialState: StateType = {
  offers: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export {reducer};
