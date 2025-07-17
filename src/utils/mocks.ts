import { address, datatype, internet, random } from 'faker';
import { AuthorizationStatus, DISPLAYED_NEARBY_OFFERS, Placement, SortTypeOptions } from '../const';
import { CityType, LocationType } from '../types/offers';
import { AuthInfo, UserType } from '../types/user';
import { FullOfferType, OfferType, ReviewType } from '../types/offer';
import faker from 'faker';

const ZOOM = 10;

const NUMBER_OF_FAKE_CASES = 10;
const MIN_PRICE = 50;
const MAX_PRICE = 500;
const MAX_RATING = 5;
const PRECISION_RATING = 1;

export const makeFakeLocation = (): LocationType => ({
  latitude: Number(address.latitude()),
  longitude: Number(address.longitude()),
  zoom: ZOOM,
} as LocationType);

export const makeFakeCity = (): CityType => ({
  location: makeFakeLocation(),
  name: address.cityName(),
} as CityType);

export const makeFakeUser = (): UserType => ({
  avatarUrl: internet.avatar(),
  name: internet.userName(),
  isPro: datatype.boolean(),
} as UserType);

export const makeFakeOffer = (): OfferType => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  type: faker.helpers.randomize([Placement.Apartment, Placement.Room]),
  price: faker.datatype.number({ min: MIN_PRICE, max: MAX_PRICE }),
  previewImage: faker.internet.url(),
  city: makeFakeCity(),
  location: makeFakeLocation(),
  isFavorite: faker.datatype.boolean(),
  isPremium: faker.datatype.boolean(),
  rating: faker.datatype.float({ min: 1, max: 5, precision: 0.1 }),
});

export const makeFakeFullOffer = (): FullOfferType => ({
  id: faker.datatype.uuid(),
  title: faker.commerce.productName(),
  type: faker.helpers.randomize([Placement.Apartment, Placement.Room]),
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

export const makeFakeOffersNearby = (): OfferType[] => (
  Array.from({ length: DISPLAYED_NEARBY_OFFERS + 1 }, () => makeFakeOffer())
);

export const makeFakeFavoriteOffers = (): OfferType[] => (
  makeFakeOffers().map((offer) => (
    {...offer, isFavorite: true})) as OfferType[]);

export const makeFakeComment = (): ReviewType => ({
  comment: faker.commerce.productDescription(),
  date: faker.datatype.datetime().toISOString(),
  id: faker.datatype.uuid(),
  rating: datatype.float({max: MAX_RATING, precision: PRECISION_RATING}),
  user: makeFakeUser(),
});

export const makeFakeAuthInfo = (): AuthInfo => ({
  avatarUrl: internet.avatar(),
  email: internet.email(),
  isPro: datatype.boolean(),
  name: internet.userName(),
  token: datatype.string(),
});

export const makeFakeComments = (): ReviewType[] => (
  new Array(datatype.number(NUMBER_OF_FAKE_CASES)).fill(null).map(makeFakeComment));

export const getRandomSortOptions = (): SortTypeOptions => (
  random.arrayElement(Object.values(SortTypeOptions)) as SortTypeOptions);

export const getAuthorizationStatus = (): AuthorizationStatus => (
  random.arrayElement(Object.values(AuthorizationStatus)) as AuthorizationStatus);
