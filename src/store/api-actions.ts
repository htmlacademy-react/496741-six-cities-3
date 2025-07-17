import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { dropToken, saveToken } from '../services/token.ts';
import { AuthData, AuthInfo, UserReviewType } from '../types/user.ts';
import { OfferType, ReviewType } from '../types/offer.ts';
import { updateOffer } from './offers/offers-reducer.ts';

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

export const fetchOfferAction = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offer/fetchOffer',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<OfferType>(APIRoute.Offer + offerId);

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
  async (_arg, { extra: api }) => {
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

export const postFavoriteAction = createAsyncThunk<OfferType, OfferType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/postFavorite',
  async (offer, {dispatch, extra: api}) => {
    const newStatus = Number(!offer.isFavorite);
    const {data} = await api.post<OfferType>(`${APIRoute.Favorite}/${offer.id}/${newStatus}`);

    dispatch(updateOffer(data));
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
