import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities, NameSpace, SortTypeOptions } from '../../const';
import { CityType, OffersReducerType } from '../../types/offers.ts';
import { fetchOffersAction } from '../api-actions.ts';
import { OfferType } from '../../types/offer.ts';

const initialState: OffersReducerType = {
  offers: [],
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
  isOffersLoading: false,
  hasError: false,
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
    },
    updateOffer: (state, action: PayloadAction<OfferType>) => {
      state.offers = state.offers.map((offer) =>
        offer.id === action.payload.id ? action.payload : offer
      );
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
        state.hasError = false;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.hasError = true;
      });
  }
});

export const { changeCity, changeSortType, updateOffer } = offersReducer.actions;
