import { AuthorizationStatus } from '../const';
import { Token } from '../services/token';
import { OfferType } from './offer';

export type AuthInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: Token;
};

export type AuthData = {
  email: string;
  password: string;
};

export type UserType = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type UserReviewType = {
  offerId: string;
  comment: string;
  rating: number;
};

export type UserFvoritesType = {
  offer: OfferType;
  userIsAuth: boolean;
}

export type UserReducerType = {
  authorizationStatus: AuthorizationStatus;
  authInfo: AuthInfo | null;
  favorites: OfferType[];
};
