export const DISPLAYED_NEARBY_OFFERS = 3;

export enum Placement {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const PageTitle = {
  [AppRoute.Root]: 'Главная страница',
  [AppRoute.Favorites]: 'Фавориты',
  [AppRoute.Login]: 'Страница регистрации',
  [AppRoute.Offer]: 'Наше предложение',
  [AppRoute.NotFound]: '6 cities',
};

export const stars = [
  {value: 5, label: 'perfect'},
  {value: 4, label: 'good'},
  {value: 3, label: 'not bad'},
  {value: 2, label: 'badly'},
  {value: 1, label: 'terribly'},
];

export const TextNotFound = {
  NOT_FOUND: '404. Page not found',
  ID_IS_NOT_CORRECT: 'There is no offer with this id, try entering another id',
};

export const NamePlaceCard = {
  CITIES: 'cities',
  FAVORITES: 'favorites',
  NEAR_PLACES: 'near-places',
};

export const NameMap = {
  CITIES: 'cities',
  OFFER: 'offer',
};
