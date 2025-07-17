import { CityName, Placement, SortTypeOptions } from '../const';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: CityName;
  location: LocationType;
}

export type OfferType = {
  id: string;
  title: string;
  type: Placement;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  images?: string[];
};

export type OffersReducerType = {
  offers: OfferType[];
  city: CityType;
  sortOption: SortTypeOptions;
  isOffersLoading: boolean;
  hasError: boolean;
}
