import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../types/types';
import { AuthorizationStatus, SortTypeOptions } from '../const';

export const changeCity = createAction<CityType>('changeCity');
export const getOffers = createAction<OfferType[]>('getOffers');
export const changeSortType = createAction<SortTypeOptions>('changeSortType');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
