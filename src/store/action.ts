import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../types/types';
import { AppRoute, AuthorizationStatus, SortTypeOptions } from '../const';

export const changeCity = createAction<CityType>('data/changeCity');
export const getOffers = createAction<OfferType[]>('data/getOffers');
export const changeSortType = createAction<SortTypeOptions>('data/changeSortType');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
