import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferType, ReviewType } from '../types/types';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import {
  setOffer,
  setOffers,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo,
  setError,
  setFavorite,
  setOffersLoadingStatus,
  setOffersNearby,
  setComments} from './action';
import { AuthInfo } from '../types/auth.ts';
import { dropToken, saveToken } from '../services/token.ts';
import { AuthData } from '../types/auth.ts';
import { store } from './index.ts';

export const setOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(setOffers(data));
  },
);

export const setOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType>(APIRoute.Offer + offerId);
    dispatch(setOffer(data));
  },
);


export const setOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setOffersNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offer + offerId + APIRoute.OffersNearby);
    dispatch(setOffersNearby(data));
  },
);

export const setCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/setComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewType[]>(APIRoute.Comments + offerId);
    dispatch(setComments(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get<AuthInfo>(APIRoute.Login);
      dispatch(setAuthInfo(data));
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<AuthInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setAuthInfo(data));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const fetchFavoriteAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'setFavorite',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
    dispatch(setFavorite(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setAuthInfo(null));
  },
);

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
