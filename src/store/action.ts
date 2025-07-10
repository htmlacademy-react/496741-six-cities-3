import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType, ReviewType } from '../types/types';
import { AppRoute, AuthorizationStatus, SortTypeOptions } from '../const';
import { AuthInfo } from '../types/auth';

export const changeCity = createAction<CityType>('data/changeCity');
export const fetchOffers = createAction<OfferType[]>('data/fetchOffers');
export const fetchOffer = createAction<OfferType | null>('data/fetchOffer');
export const fetchOffersNearby = createAction<OfferType[]>('data/fetchOffersNearby');
export const fetchComments = createAction<ReviewType[]>('data/fetchComments');
export const fetchFavorites = createAction<OfferType[]>('fetchFavorites');
export const changeSortType = createAction<SortTypeOptions>('data/changeSortType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const setAuthInfo = createAction<AuthInfo | null>('user/setAuthInfo');
