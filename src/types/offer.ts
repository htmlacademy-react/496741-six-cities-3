import { Placement } from '../const.ts';
import { CityType, LocationType } from './offers.ts';
import { UserType } from './user.ts';

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

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type OfferRerucerType = {
  offer: OfferType | null;
  offersNearby: OfferType[];
  comments: ReviewType[];
  isOfferPageLoading: boolean;
};
