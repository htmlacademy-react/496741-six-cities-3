import { CityName, SortTypeOptions } from '../const';
import { OfferType } from './offer';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: CityName;
  location: LocationType;
}

export type OffersReducerType = {
  offers: OfferType[];
  city: CityType;
  sortOption: SortTypeOptions;
  isOffersLoading: boolean;
  error: string | null;
}
