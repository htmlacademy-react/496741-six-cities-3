import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../types/types';

export const changeCity = createAction<CityType>('changeCity');
export const getOffersList = createAction<OfferType[]>('getOffersList');
