import { createAction } from '@reduxjs/toolkit';
import { CityType } from '../types/offers.ts';
import { AppRoute, SortTypeOptions } from '../const';
import { OfferType, ReviewType } from '../types/offer.ts';

export const changeCity = createAction<CityType>('data/changeCity');
export const setOffers = createAction<OfferType[]>('data/setOffers');
export const setOffer = createAction<OfferType | null>('data/setOffer');
export const setOffersNearby = createAction<OfferType[]>('data/setOffersNearby');
export const setComments = createAction<ReviewType[]>('data/setComments');
export const addComment = createAction<ReviewType>('data/addComment');
export const changeSortType = createAction<SortTypeOptions>('data/changeSortType');
export const setError = createAction<string | null>('setError');
export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
