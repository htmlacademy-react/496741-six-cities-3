import { CityType } from './types/offers.ts';

export const DISPLAYED_NEARBY_OFFERS = 3;
export const MAX_COMMENT_LENGTH = 300;
export const MIN_COMMENT_LENGTH = 50;

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

export enum SortTypeOptions {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
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

export const cities: CityType[] = [
  {
    name: 'Paris' as CityName,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: 'Cologne' as CityName,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: 'Brussels' as CityName,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: 'Amsterdam' as CityName,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: 'Hamburg' as CityName,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: 'Dusseldorf' as CityName,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
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

export enum APIRoute {
  Offer = '/offers/',
  Offers = '/offers',
  OffersNearby = '/nearby',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/',
  Favorite = '/favorite',
}

export enum NameSpace {
  Offer = 'OFFER',
  Offers = 'OFFERS',
  User = 'USER',
}
