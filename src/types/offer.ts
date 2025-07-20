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
};


type RemovedKeys = 'previewImage';

export type FullOfferType = Omit<OfferType, RemovedKeys> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  maxAdults: number;
  images: string[];
};

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
};

export type OfferRerucerType = {
  offer: FullOfferType | null;
  offersNearby: OfferType[];
  comments: ReviewType[];
  isOfferPageLoading: boolean;
  isCommentPosting: boolean;
  reviewRating: number;
  reviewComment: string;
};
