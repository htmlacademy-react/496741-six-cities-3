import { CityName, Placement } from '../const';

type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}
type CityType = {
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
};
