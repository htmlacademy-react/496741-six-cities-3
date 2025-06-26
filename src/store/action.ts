import { createAction } from '@reduxjs/toolkit';
import { CityType, OfferType } from '../types/types';
import { SortTypeOptions } from '../const';

export const changeCity = createAction<CityType>('changeCity');
export const getOffersList = createAction<OfferType[]>('getOffersList');
export const changeSortType = createAction<SortTypeOptions>('changeSortType');
