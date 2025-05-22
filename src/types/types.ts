type HousingType = 'apartment' | 'room' | 'house' | 'hotel';
export type CityNameType = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}
type CityType = {
  name: CityNameType;
  location: LocationType;
}

export type OfferType = {
  id: string;
  title: string;
  type: HousingType;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
};
