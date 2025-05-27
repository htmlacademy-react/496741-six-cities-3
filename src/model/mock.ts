import { AuthorizationStatus, CityName, Placement } from '../const.ts';
import { OfferType } from '../types/types.ts';


const mockOffers: OfferType[] = [
  {
    id: '79478920-2c89-4b5b-840f-932fb4cf5cc4',
    title: 'Tile House',
    type: 'hotel' as Placement,
    price: 434,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1
  },
  {
    id: '857881e6-89be-449d-b899-c5faf68fa6a4',
    title: 'Waterfront with extraordinary view',
    type: 'apartment' as Placement,
    price: 194,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.1
  },
  {
    id: '2611963b-a59f-40f6-b4f0-e754873fc1b1',
    title: 'Perfectly located Castro',
    type: 'room' as Placement,
    price: 175,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3
  },
  {
    id: 'f5de0fc9-7d4c-4921-83db-c5a36acb5539',
    title: 'Wood and stone place',
    type: 'room' as Placement,
    price: 177,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },
  {
    id: '8f910bc6-80c7-4c05-a6a0-082e2ea8ef8d',
    title: 'Loft Studio in the Central Area',
    type: 'house' as Placement,
    price: 587,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'fa0bcfec-c348-43f8-952e-9f14148ad276',
    title: 'House in countryside',
    type: 'hotel' as Placement,
    price: 354,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.7
  },
  {
    id: '7568111c-f470-4782-b0ed-fc9637d3c773',
    title: 'Wood and stone place',
    type: 'hotel' as Placement,
    price: 365,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.3
  },
  {
    id: 'fa2ff465-84c2-4de8-8e62-f1568c81cb82',
    title: 'House in countryside',
    type: 'house' as Placement,
    price: 330,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.3454990000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.2
  },
  {
    id: '431d55b7-dff8-48c9-acbf-59503e633070',
    title: 'The Pondhouse - A Magical Place',
    type: 'apartment' as Placement,
    price: 225,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.84761,
      longitude: 2.356499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.8
  },
  {
    id: '8ec64adf-5b85-4124-825c-459096154eca',
    title: 'Tile House',
    type: 'hotel' as Placement,
    price: 255,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: {
      name: 'Paris' as CityName,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.862610000000004,
      longitude: 2.369499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.1
  }
];

const getAuthorizationStatus = () => AuthorizationStatus.NoAuth;

export {
  mockOffers,
  getAuthorizationStatus,
};
