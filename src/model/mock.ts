import { ReviewType } from '../types/types.ts';

const AVATAR_URL = 'https://i.pravatar.cc/128';

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
  mockReviews,
};
