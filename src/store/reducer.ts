import { createReducer } from '@reduxjs/toolkit';
import { cities } from '../const.ts';
import { changeCity, getOffersList } from './action';
import { CityType, OfferType } from '../types/types.ts';

type StateType = {
  offers: OfferType[];
  city: CityType;
}

const initialState: StateType = {
  offers: [],
  city: cities[0],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffersList, (state, action) => {
      state.offers = action.payload;
    });
});

export {reducer};
