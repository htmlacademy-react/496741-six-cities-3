import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { UserReducerType } from '../../types/user.ts';
import {
  checkAuthAction,
  fetchFavoritesAction,
  loginAction,
  logoutAction,
  postFavoriteAction} from '../api-actions.ts';

const initialState: UserReducerType = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: null,
  favorites: [],
};

export const userReducer = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authInfo = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.authInfo = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
        state.authInfo = null;
        state.favorites = [];
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites = [...state.favorites, action.payload];
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
      });
  }
});
