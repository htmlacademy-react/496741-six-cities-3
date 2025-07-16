import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersReducer } from './offers/offers-reducer';
import { offerReducer } from './offer/offer-reducer';
import { userReducer } from './user/user-reducer';

export const rootReducer = combineReducers({
  [NameSpace.Offers]: offersReducer.reducer,
  [NameSpace.Offer]: offerReducer.reducer,
  [NameSpace.User]: userReducer.reducer,
});
