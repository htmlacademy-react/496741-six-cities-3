import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType, ReviewType } from '../types/types';
import { AppRoute, AuthorizationStatus, SortTypeOptions } from '../const';
import { AuthInfo } from '../types/auth';

export const changeCity = createAction<CityType>('data/changeCity');
export const setOffers = createAction<OfferType[]>('data/setOffers');
export const setOffer = createAction<OfferType>('data/setOffer');
export const setOffersNearby = createAction<OfferType[]>('data/setOffersNearby');
export const setComments = createAction<ReviewType[]>('data/setComments');
export const changeSortType = createAction<SortTypeOptions>('data/changeSortType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
export const setAuthInfo = createAction<AuthInfo | null>('user/setAuthInfo');
export const setFavorite = createAction<OfferType[]>('setFavorite');
