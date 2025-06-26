import { createReducer } from '@reduxjs/toolkit';
import { cities, SortTypeOptions } from '../const.ts';
import { changeCity, changeSortType, getOffersList } from './action';
import { CityType, OfferType } from '../types/types.ts';
import { mockOffers } from '../model/mock.ts';

type StateType = {
  offers: OfferType[];
  city: CityType;
  sortOption: SortTypeOptions;
}

const initialState: StateType = {
  offers: mockOffers,
  city: cities[0],
  sortOption: SortTypeOptions.Popular,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortOption = action.payload;
    });
});

export {reducer};
