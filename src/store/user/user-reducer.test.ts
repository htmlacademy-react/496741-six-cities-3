import { AuthorizationStatus } from '../../const';
import { userReducer } from './user-reducer';
import {
  checkAuthAction,
  fetchFavoritesAction,
  loginAction,
  logoutAction,
  postFavoriteAction } from '../api-actions';
import {
  makeFakeAuthData,
  makeFakeAuthInfo,
  makeFakeFavoriteOffer,
  makeFakeFavoriteOffers,
  randomAuthorizationStatus } from '../../utils/mocks';

describe('UserReducer Slice', () => {
  const fakeState = {
    authorizationStatus: randomAuthorizationStatus,
    authInfo: makeFakeAuthInfo(),
    favorites: makeFakeFavoriteOffers(),
  };

  const fakeInitialState = {
    authorizationStatus: AuthorizationStatus.Unknown,
    authInfo: null,
    favorites: [],
  };

  const fakeAuthInfo = makeFakeAuthInfo();
  const fakeAuthData = makeFakeAuthData();
  const fakeFavoriteOffer = makeFakeFavoriteOffer();
  const fakeFavoriteOffers = makeFakeFavoriteOffers();
  const emptyAction = { type: '' };

  it('should return initial state with empty action', () => {
    const result = userReducer.reducer(fakeState, emptyAction);

    expect(result).toEqual(fakeState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const result = userReducer.reducer(undefined, emptyAction);

    expect(result).toEqual(fakeInitialState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = { ...fakeState, authorizationStatus: AuthorizationStatus.NoAuth, authInfo: null };
    const expectedState = { ...fakeState, authorizationStatus: AuthorizationStatus.Auth, authInfo: fakeAuthInfo };

    const action = checkAuthAction.fulfilled(fakeAuthInfo, 'requestId', undefined);
    const result = userReducer.reducer(initialState, action);

    expect(result).toEqual(expectedState);
  });
  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const action = checkAuthAction.rejected(new Error(), 'requestId', undefined);
    const result = userReducer.reducer(fakeState, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
  });
  it('should set "Auth" and authInfo with "loginAction.fulfilled" action', () => {
    const action = loginAction.fulfilled(fakeAuthInfo, 'requestId', fakeAuthData);
    const result = userReducer.reducer(fakeState, action);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.Auth);
    expect(result.authInfo).toEqual(fakeAuthInfo);
  });
  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const result = userReducer.reducer(fakeState, loginAction.rejected(new Error(), 'requestId', fakeAuthData));

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
  });
  it('should reset authInfo and favorites with "logoutAction.fulfilled" action', () => {
    const result = userReducer.reducer(fakeState, logoutAction.fulfilled);

    expect(result.authorizationStatus).toBe(AuthorizationStatus.NoAuth);
    expect(result.authInfo).toBeNull();
    expect(result.favorites).toEqual([]);
  });
  it('should set favorites with "fetchFavoritesAction.fulfilled" action', () => {
    const result = userReducer.reducer(fakeState, fetchFavoritesAction.fulfilled(fakeFavoriteOffers, 'requestId', undefined));

    expect(result.favorites).toEqual(fakeFavoriteOffers);
  });
  it('should add offer to favorites when isFavorite is true in "postFavoriteAction.fulfilled"', () => {
    const fakeUpdateFavoriteData = {offer: fakeFavoriteOffer, userIsAuth: true};
    const result = userReducer.reducer(fakeState, postFavoriteAction.fulfilled(
      fakeFavoriteOffer, 'requestId', fakeUpdateFavoriteData));

    expect(result.favorites).toContainEqual(fakeFavoriteOffer);
  });
  it('should remove offer from favorites when isFavorite is false in "postFavoriteAction.fulfilled"', () => {
    const fakeOfferForRemove = {...fakeFavoriteOffer, isFavorite: false};
    const fakeFavorites = [...fakeFavoriteOffers, fakeOfferForRemove];
    const fakeStateWithFavorite = { ...fakeState, favorites: fakeFavorites };
    const fakeUpdateFavoriteData = {offer: fakeOfferForRemove, userIsAuth: true};

    const result = userReducer.reducer(fakeStateWithFavorite, postFavoriteAction.fulfilled(
      fakeOfferForRemove, 'requestId', fakeUpdateFavoriteData));

    expect(result.favorites).not.toContainEqual(fakeOfferForRemove);
  });
});
