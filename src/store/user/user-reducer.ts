import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { UserReducerType } from '../../types/user.ts';
import {
  checkAuthAction,
  fetchFavoritesAction,
  loginAction,
  logoutAction } from '../api-actions.ts';

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
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
      });
  }
});
