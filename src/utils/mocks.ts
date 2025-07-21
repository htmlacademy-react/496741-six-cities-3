import {
  AuthorizationStatus,
  CityName,
  DISPLAYED_NEARBY_OFFERS,
  NameMap,
  NamePlaceCard,
  NameSpace,
  Placement,
  SortTypeOptions,
  TextNotFound} from '../const';
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
const MIN_ADULTS = 1;
const MAX_ADULTS = 10;
const MIN_RATING = 1;
const MAX_RATING = 5;
const MIN_BEDROOMS = 1;
const MAX_BEDROOMS = 5;
const PRECISION_RATING = 1;
const IMAGES_LENGTH = 6;
const GOODS_LENGTH = 4;
const CITY_OFFERS_MIN_COUNT = 1;
const CITY_OFFERS_MAX_COUNT = 3;

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const getRandomAuthorizationStatus = (): AuthorizationStatus =>
  faker.helpers.randomize(Object.values(AuthorizationStatus));

export const getRandomSortOption = (): SortTypeOptions =>
  faker.helpers.randomize(Object.values(SortTypeOptions));

export const getRandomOfferType = (): Placement =>
  faker.helpers.randomize(Object.values(Placement));


export const getRandomMapName = (): keyof typeof NameMap =>
  faker.helpers.randomize(Object.keys(NameMap)) as keyof typeof NameMap;

export const getRandomCardName = (): keyof typeof NamePlaceCard =>
  faker.helpers.randomize(Object.keys(NamePlaceCard)) as keyof typeof NamePlaceCard;

export const makeFakeId = (): string => faker.datatype.uuid();

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

export const makeFakeCities = (): CityType[] => {
  const allNames = Object.values(CityName);
  const count = faker.datatype.number({ min: 1, max: allNames.length });
  const shuffledNames = faker.helpers.shuffle(allNames).slice(0, count);

  return shuffledNames.map((name) => ({
    ...makeFakeCity(),
    name,
  }));
};

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
  rating: faker.datatype.number({ min: MIN_RATING, max: MAX_RATING, precision: PRECISION_RATING }),
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
  rating: faker.datatype.float({ min: MIN_RATING, max: MAX_RATING, precision: PRECISION_RATING }),
  images: Array.from({ length: IMAGES_LENGTH }, () => faker.internet.url()),
  description: faker.commerce.productDescription(),
  bedrooms: faker.datatype.number({ min: MIN_BEDROOMS, max: MAX_BEDROOMS }),
  goods: Array.from({ length: GOODS_LENGTH }, () => faker.commerce.product()),
  host: makeFakeUser(),
  maxAdults: faker.datatype.number({ min: MIN_ADULTS, max: MAX_ADULTS }),
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

export const makeFakeFavoriteCityOffers = (cities: CityType[]): OfferType[] => cities.flatMap((city) => {
  const count = faker.datatype.number({ min: CITY_OFFERS_MIN_COUNT, max: CITY_OFFERS_MAX_COUNT });

  return Array.from({ length: count }, () => ({
    ...makeFakeOffer(),
    city,
    isFavorite: true,
  }));
});

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

export const getRandomKeyForTextNotFound
= (): keyof typeof TextNotFound => {
  const keys = Object.keys(TextNotFound) as (keyof typeof TextNotFound)[];
  const index = Math.floor(Math.random() * keys.length);
  return keys[index];
};

export const makeFakeState = (initialState?: Partial<State>): State => {
  const fakeFullOffer = makeFakeFullOffer();
  const randomAuthorizationStatus = getRandomAuthorizationStatus();
  const randomSortOption = getRandomSortOption();

  return {
    [NameSpace.Offer]: {
      offer: fakeFullOffer,
      offersNearby: makeFakeOffersNearby(fakeFullOffer.city),
      comments: makeFakeComments(),
      isOfferPageLoading: faker.datatype.boolean(),
      isCommentPosting: false,
      reviewRating: 0,
      reviewComment: '',
    },
    [NameSpace.Offers]: {
      offers: makeFakeOffers(),
      city: makeFakeCity(),
      sortOption: randomSortOption,
      isOffersLoading: faker.datatype.boolean(),
      hasError: faker.datatype.boolean(),
    },
    [NameSpace.User]: {
      authorizationStatus: randomAuthorizationStatus,
      authInfo: makeFakeAuthInfo(),
      favorites: makeFakeFavoriteOffers(),
    },
    ...initialState ?? {},
  };
};
