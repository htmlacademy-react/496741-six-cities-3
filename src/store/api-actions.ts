import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute, AuthorizationStatus } from '../const';
import { redirectToRoute } from './action';
import { dropToken, saveToken } from '../services/token.ts';
import { AuthData, AuthInfo, UserFvoritesType, UserReviewType } from '../types/user.ts';
import { FullOfferType, OfferType, ReviewType } from '../types/offer.ts';
import { updateOffer } from './offers/offers-reducer.ts';
import { selectAuthorizationStatus } from './selectors/user.ts';
import { selectOffer } from './selectors/offer.ts';
import { setOffer } from './offer/offer-reducer.ts';

export const fetchOffersAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offers);

    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<ReviewType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchComments',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<ReviewType[]>(APIRoute.Comments + offerId);

    return data;
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<OfferType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffersNearby',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferType[]>(APIRoute.Offer + offerId + APIRoute.OffersNearby);

    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<FullOfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<FullOfferType>(APIRoute.Offer + offerId);

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<AuthInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<AuthInfo>(APIRoute.Login);

    return data;
  },
);

export const postCommentAction = createAsyncThunk<ReviewType, UserReviewType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/postComment',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<ReviewType>(APIRoute.Comments + offerId, {comment, rating});

    return data;
  }
);

export const fetchFavoritesAction = createAsyncThunk<OfferType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/fetchFavorites',
  async (_arg, { getState, extra: api }) => {
    const state = getState();
    if (selectAuthorizationStatus(state) !== AuthorizationStatus.Auth) {
      return [];
    }
    const { data } = await api.get<OfferType[]>(APIRoute.Favorite);

    return data;
  },
);

export const loginAction = createAsyncThunk<AuthInfo, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<AuthInfo>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Root));
    dispatch(fetchOffersAction());
    dispatch(fetchFavoritesAction());
    return data;
  },
);

export const postFavoriteAction = createAsyncThunk<OfferType, UserFvoritesType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/postFavorite',
  async ({offer, userIsAuth}, {dispatch, extra: api, getState}) => {
    const state = getState();
    const currentOffer = selectOffer(state);

    if (!userIsAuth) {
      dispatch(redirectToRoute(AppRoute.Login));
      return offer;
    }
    const newStatus = Number(!offer.isFavorite);
    const {data} = await api.post<OfferType>(`${APIRoute.Favorite}/${offer.id}/${newStatus}`);

    dispatch(updateOffer(data));
    if (data.id === currentOffer?.id) {
      dispatch(setOffer(data as unknown as FullOfferType));
    }
    return data;
  }
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
    dispatch(fetchOffersAction());
  },
);
