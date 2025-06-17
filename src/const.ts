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
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const getTitle = (pathname: AppRoute) => {
  let title: string = '6 cities';

  switch (pathname) {
    case AppRoute.Root:
      title = 'Главная страница';
      break;
    case AppRoute.Favorites:
      title = 'Фавориты';
      break;
    case AppRoute.Login:
      title = 'Страница регистрации';
      break;
    case AppRoute.Offer:
      title = 'Наше предложение';
      break;
    default:
      break;
  }
  return title;
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
