import { CityName, Placement } from '../const.ts';
import { ReviewType, OfferType } from '../types/types.ts';

const AVATAR_URL = 'https://i.pravatar.cc/128';

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
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
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
    isFavorite: true,
    isPremium: false,
    rating: 1.1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
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
    rating: 3,
    images: [
      'img/room.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
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
    rating: 4.2,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
    ],
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
    rating: 4.5,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
    ],
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
    rating: 2.7,
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
    ],
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
    rating: 2.3,
    images: [],
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
    rating: 4.2,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
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
    rating: 1.8,
    images: [
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
    ],
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
    rating: 2.1,
    images: [
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
      'img/room.jpg',
    ],
  },
  {
    id: 'efa41965-bd6b-40be-bc57-f9b679e9233a',
    title: 'House in countryside',
    type: 'house' as Placement,
    price: 418,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.930361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
  },
  {
    id: '91d68510-f386-401b-a964-826de603f372',
    title: 'The Joshua Tree House',
    type: 'hotel' as Placement,
    price: 108,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
  },
  {
    id: '5a1394d1-61f7-4f93-ad6d-764186b0fc43',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel' as Placement,
    price: 117,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.957361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.3,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
  },
  {
    id: 'b2e91ac0-8fee-4e7e-b6dc-aa22b5ebb5c3',
    title: 'House in countryside',
    type: 'house' as Placement,
    price: 160,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.951361,
      longitude: 6.944974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.5,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
  },
  {
    id: '455a32eb-6387-4259-b7fa-28ded13aca80',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house' as Placement,
    price: 545,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.959361,
      longitude: 6.978974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
  },
  {
    id: '79c39e14-9c4f-4e3a-a0a8-a5fdb3eb81c8',
    title: 'Wood and stone place',
    type: 'house' as Placement,
    price: 596,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.932361,
      longitude: 6.960974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    images: [
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-01.jpg',
    ],
  },
  {
    id: '75773783-bf7e-4f5d-82fb-0ed50013a4dd',
    title: 'The house among olive ',
    type: 'room' as Placement,
    price: 174,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.954361,
      longitude: 6.982974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.2
  },
  {
    id: 'bd43944c-aa07-485f-9516-bbb0d9a4dce5',
    title: 'Waterfront with extraordinary view',
    type: 'hotel' as Placement,
    price: 350,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.945361,
      longitude: 6.962974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.9
  },
  {
    id: 'fcf28c4e-1a4a-4119-a432-f3a7b581c4d5',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel' as Placement,
    price: 297,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.917361,
      longitude: 6.977974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
  {
    id: 'ec3573a6-f878-48d6-9791-bafb93a4228c',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel' as Placement,
    price: 340,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Cologne' as CityName,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.945361,
      longitude: 6.935974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.9
  },
  {
    id: '36c3b801-998c-4209-8f3b-58eaed454987',
    title: 'Wood and stone place',
    type: 'hotel' as Placement,
    price: 253,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.839557,
      longitude: 4.346697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.7
  },
  {
    id: '293abbba-8162-4e77-a5b6-b562f368e8a2',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel' as Placement,
    price: 285,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.844556999999995,
      longitude: 4.346697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3
  },
  {
    id: '72589029-e33a-4959-9519-aa3cc769398a',
    title: 'Tile House',
    type: 'room' as Placement,
    price: 247,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.865556999999995,
      longitude: 4.371696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.9
  },
  {
    id: 'e3256a65-5c9e-4772-b623-da629373b1ad',
    title: 'Canal View Prinsengracht',
    type: 'hotel' as Placement,
    price: 275,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.869557,
      longitude: 4.332697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.7
  },
  {
    id: 'bc6ee572-182e-4509-974b-9e249d430452',
    title: 'Wood and stone place',
    type: 'hotel' as Placement,
    price: 264,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.860557,
      longitude: 4.376697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1
  },
  {
    id: 'b67c998d-546d-4b4c-94c8-420f66f8c549',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house' as Placement,
    price: 449,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.862556999999995,
      longitude: 4.375697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1
  },
  {
    id: '35e81649-fb8d-4662-9e16-2208419002d9',
    title: 'Tile House',
    type: 'hotel' as Placement,
    price: 191,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.3536969999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5
  },
  {
    id: 'e3c8c602-0a37-484a-ab19-60f92a0b50c5',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'room' as Placement,
    price: 266,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.822556999999996,
      longitude: 4.347697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.9
  },
  {
    id: '72874fe2-af88-4e00-a3b2-262727906510',
    title: 'Tile House',
    type: 'room' as Placement,
    price: 207,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.357697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9
  },
  {
    id: '76716a24-44c8-4479-b725-9969d6701a9d',
    title: 'The Joshua Tree House',
    type: 'hotel' as Placement,
    price: 340,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Brussels' as CityName,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.363696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5
  },
  {
    id: '4c8128bd-05ac-481e-ace3-ecf2223adf41',
    title: 'Loft Studio in the Central Area',
    type: 'apartment' as Placement,
    price: 311,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36554,
      longitude: 4.911976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.2
  },
  {
    id: '0ce2a1f4-d881-494b-b43d-3b9768af4ea0',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel' as Placement,
    price: 133,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: '4b0536cd-22f5-448d-a1d7-47fb68a9fd98',
    title: 'Perfectly located Castro',
    type: 'room' as Placement,
    price: 134,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'ac7edad3-7c5c-4b36-9eea-50e39c9fc57b',
    title: 'The Joshua Tree House',
    type: 'house' as Placement,
    price: 486,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.9
  },
  {
    id: '227d9a3d-ba03-498e-98fa-e2691bf94407',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment' as Placement,
    price: 412,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.4
  },
  {
    id: '50917a31-a0f2-4b44-99e9-e97d6d846ab4',
    title: 'Tile House',
    type: 'house' as Placement,
    price: 284,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.361540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: 'a7a66d28-49d3-4341-bfea-685a836c92ce',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel' as Placement,
    price: 383,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.35754,
      longitude: 4.9179759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3
  },
  {
    id: '02360cb8-0830-485f-9baf-5dbeba1a9a2f',
    title: 'Waterfront with extraordinary view',
    type: 'apartment' as Placement,
    price: 123,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37854,
      longitude: 4.894976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.5
  },
  {
    id: '45929cf8-2dd7-4c65-8446-fa7501397625',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'house' as Placement,
    price: 533,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Amsterdam' as CityName,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.36854,
      longitude: 4.887976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
];

const mockReviews: ReviewType[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver Conner',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    rating: 1
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b01a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Jim Beam',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    comment: 'test2',
    rating: 2
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b02a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'John Snow',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true
    },
    comment: 'test3',
    rating: 3
  },
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b03a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Jack Daniels',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: false
    },
    comment: 'test4',
    rating: 4
  },
];

export {
  mockOffers,
  mockReviews,
};
