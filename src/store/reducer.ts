import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, cities, SortTypeOptions } from '../const.ts';
import { changeCity, changeSortType, getOffers, requireAuthorization, setError } from './action';
import { CityType, OfferType } from '../types/types.ts';

type StateType = {
  offers: OfferType[];
  city: CityType;
  sortOption: SortTypeOptions;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: StateType = {
  offers: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
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
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
