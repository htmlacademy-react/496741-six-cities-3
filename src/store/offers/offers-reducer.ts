import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities, NameSpace, SortTypeOptions } from '../../const';
import { CityType, OffersReducerType } from '../../types/offers.ts';
import { fetchOffersAction } from '../api-actions.ts';

const initialState: OffersReducerType = {
  offers: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  isOffersLoading: false,
};

export const offersReducer = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityType>) => {
      state.city = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortTypeOptions>) => {
      state.sortOption = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      });
  }
});

export const { changeCity, changeSortType } = offersReducer.actions;
