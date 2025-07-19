import {
  AuthorizationStatus,
  CityName,
  DISPLAYED_NEARBY_OFFERS,
  NameMap,
  Placement,
  SortTypeOptions } from '../const';
import { CityType, LocationType } from '../types/offers';
import { AuthData, AuthInfo, UserReviewType, UserType } from '../types/user';
import { FullOfferType, OfferType, ReviewType } from '../types/offer';
import faker from 'faker';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { State } from '../types/state';

const ZOOM = 10;
const NUMBER_OF_FAKE_CASES = 10;
const MIN_PRICE = 50;
const MAX_PRICE = 500;
const MAX_RATING = 5;
const PRECISION_RATING = 1;

export const randomMapName = faker.helpers.randomize(Object.keys(NameMap));
export const randomOfferType = faker.helpers.randomize(Object.values(Placement));
export const randomCityName = faker.helpers.randomize(Object.values(CityName));
export const randomSortOption = faker.helpers.randomize(Object.values(SortTypeOptions));
export const randomAuthorizationStatus = faker.helpers.randomize(Object.values(AuthorizationStatus));

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeToken = (): string => faker.datatype.uuid();

export const makeFakeLocation = (): LocationType => ({
  latitude: Number(faker.address.latitude()),
  longitude: Number(faker.address.longitude()),
  zoom: ZOOM,
} as LocationType);

export const makeFakeCity = (): CityType => ({
  location: makeFakeLocation(),
  name: faker.helpers.randomize(Object.values(CityName)),
} as CityType);

export const makeFakeUser = (): UserType => ({
  avatarUrl: faker.internet.avatar(),
  name: faker.internet.userName(),
  isPro: faker.datatype.boolean(),
} as UserType);

export const makeFakeOffer = (): OfferType => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  type: faker.helpers.randomize(Object.values(Placement)),
  price: faker.datatype.number({ min: MIN_PRICE, max: MAX_PRICE }),
  previewImage: faker.internet.url(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
});

export const makeFakeFavoriteOffer = (): OfferType => ({
  ...makeFakeOffer(),
  isFavorite: true,
});

export const makeFakeFullOffer = (): FullOfferType => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  type: faker.helpers.randomize(Object.values(Placement)),
  price: faker.datatype.number({ min: MIN_PRICE, max: MAX_PRICE }),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
  images: Array.from({ length: 6 }, () => faker.internet.url()),
  description: faker.commerce.productDescription(),
  bedrooms: faker.datatype.number({ min: 1, max: 5 }),
  goods: Array.from({ length: 4 }, () => faker.commerce.product()),
  host: makeFakeUser(),
  maxAdults: faker.datatype.number({ min: 1, max: 10 }),
});

export const makeFakeOffers = (): OfferType[] => (
  Array.from({ length: NUMBER_OF_FAKE_CASES + 1 }, () => makeFakeOffer())
);

export const makeFakeOffersNearby = (city: CityType): OfferType[] =>
  new Array(DISPLAYED_NEARBY_OFFERS).fill(null).map(() => {
    const offer = makeFakeOffer();
    return {
      ...offer,
      city,
    };
  });

export const makeFakeFavoriteOffers = (): OfferType[] => (
  Array.from({ length: NUMBER_OF_FAKE_CASES + 1 }, () => makeFakeFavoriteOffer())
);

export const makeFakeComment = (): ReviewType => ({
  comment: faker.commerce.productDescription(),
  date: faker.datatype.datetime().toISOString(),
  id: faker.datatype.uuid(),
  rating: faker.datatype.float({max: MAX_RATING, precision: PRECISION_RATING}),
  user: makeFakeUser(),
});

export const makeFakeCommentForPost = (): UserReviewType => ({
  comment: faker.commerce.productDescription(),
  offerId: faker.datatype.uuid(),
  rating: faker.datatype.float({max: MAX_RATING, precision: PRECISION_RATING}),
});

export const makeFakeAuthData = (): AuthData => ({
  email: faker.internet.email(),
  password: faker.datatype.uuid(),
});

export const makeFakeAuthInfo = (): AuthInfo => ({
  avatarUrl: faker.internet.avatar(),
  email: faker.internet.email(),
  isPro: faker.datatype.boolean(),
  name: faker.internet.userName(),
  token: faker.datatype.uuid(),
});

export const makeFakeComments = (): ReviewType[] => (
  new Array(faker.datatype.number(NUMBER_OF_FAKE_CASES)).fill(null).map(makeFakeComment));

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
