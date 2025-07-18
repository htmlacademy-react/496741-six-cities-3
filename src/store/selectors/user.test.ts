import { NameSpace } from '../../const.ts';
import { makeFakeAuthInfo, makeFakeFavoriteOffers, randomAuthorizationStatus } from '../../utils/mocks';
import { selectAuthInfo, selectAuthorizationStatus, selectFavorites } from './user.ts';

describe('Selectors user', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: randomAuthorizationStatus,
      authInfo: makeFakeAuthInfo(),
      favorites: makeFakeFavoriteOffers(),
    }
  };

  it('should return authorizationStatus from the state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = selectAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return authInfo from the state', () => {
    const { authInfo } = state[NameSpace.User];
    const result = selectAuthInfo(state);
    expect(result).toBe(authInfo);
  });

  it('should return favorites from the state', () => {
    const { favorites } = state[NameSpace.User];
    const result = selectFavorites(state);
    expect(result).toBe(favorites);
  });
});
