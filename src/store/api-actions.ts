import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferType, ReviewType } from '../types/types';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import {
  fetchOffer,
  fetchOffers,
  redirectToRoute,
  requireAuthorization,
  setAuthInfo,
  setError,
  fetchFavorites,
  setOffersLoadingStatus,
  fetchOffersNearby,
  fetchComments} from './action';
import { AuthInfo } from '../types/auth.ts';
import { dropToken, saveToken } from '../services/token.ts';
import { AuthData } from '../types/auth.ts';
import { store } from './index.ts';
import { UserReviewType } from '../types/user.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersLoadingStatus(true));
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);
    dispatch(setOffersLoadingStatus(false));
    dispatch(fetchOffers(data));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchComments',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<ReviewType[]>(APIRoute.Comments + offerId);
    dispatch(fetchComments(data));
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offer + offerId + APIRoute.OffersNearby);
    dispatch(fetchOffersNearby(data));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType>(APIRoute.Offer + offerId);
    dispatch(fetchOffer(data));
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

export const postCommentAction = createAsyncThunk<void, UserReviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/postComment',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    const {data} = await api.post<ReviewType[]>(APIRoute.Comments + offerId, {comment, rating});
    //console.log(data);
    dispatch(fetchComments(data));
  }
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

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorites',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);
    dispatch(fetchFavorites(data));
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
