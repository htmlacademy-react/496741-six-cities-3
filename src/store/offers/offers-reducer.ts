import { createSlice } from '@reduxjs/toolkit';
import { cities, NameSpace, SortTypeOptions } from '../../const';
import { OffersReducerType } from '../../types/offers.ts';
import { fetchOffersAction } from '../api-actions.ts';

const initialState: OffersReducerType = {
  offers: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  isOffersLoading: false,
  error: null,
};

export const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.isOffersLoading = false;
        state.offers = action.payload;
      })
      .addCase(changeCity, (state, action) => {
        state.city = action.payload;
      })
      .addCase(changeSortType, (state, action) => {
        state.sortOption = action.payload;
      })
      .addCase(setError, (state, action) => {
        state.error = action.payload;
      });;
  }
});
