import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import { Action } from 'redux';
import {
  AppThunkDispatch,
  extractActionsTypes,
  getRandomAuthorizationStatus,
  getRandomSortOption,
  makeFakeAuthData,
  makeFakeAuthInfo,
  makeFakeCity,
  makeFakeComments,
  makeFakeFavoriteOffers,
  makeFakeFullOffer,
  makeFakeOffer,
  makeFakeOffers,
  makeFakeOffersNearby,
  makeFakeToken } from '../utils/mocks';
import { State } from '../types/state';
import { checkAuthAction, fetchCommentsAction, fetchFavoritesAction, fetchOfferAction, fetchOffersAction, fetchOffersNearbyAction, loginAction, logoutAction, postCommentAction, postFavoriteAction } from './api-actions';
import { APIRoute, NameSpace } from '../const';
import faker from 'faker';
import { AuthData } from '../types/user';
import { redirectToRoute } from './action';
import * as tokenStorage from '../services/token';
import { updateOffer } from './offers/offers-reducer';

describe('Async actions', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    const fakeFullOffer = makeFakeFullOffer();
    store = mockStoreCreator({
      [NameSpace.Offer]: {
        offer: fakeFullOffer,
        offersNearby: makeFakeOffersNearby(fakeFullOffer.city),
        comments: makeFakeComments(),
        isOfferPageLoading: faker.datatype.boolean(),
      },
      [NameSpace.Offers]: {
        offers: makeFakeOffers(),
        city: makeFakeCity(),
        sortOption: getRandomSortOption(),
        isOffersLoading: faker.datatype.boolean(),
        hasError: faker.datatype.boolean(),
      },
      [NameSpace.User]: {
        authorizationStatus: getRandomAuthorizationStatus(),
        authInfo: makeFakeAuthInfo(),
        favorites: makeFakeFavoriteOffers(),
      }
    });
  });

  describe('fetchOffersAction', () => {
    const fakeOffers = makeFakeOffers();
    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.fulfilled", when server response 200', async() => {

      mockAxiosAdapter.onGet(APIRoute.Offers).reply(200, fakeOffers);

      await store.dispatch(fetchOffersAction());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffersAction.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload)
        .toEqual(fakeOffers);
    });

    it('should dispatch "fetchOffersAction.pending", "fetchOffersAction.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(APIRoute.Offers).reply(400, []);

      await store.dispatch(fetchOffersAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersAction.pending.type,
        fetchOffersAction.rejected.type,
      ]);
    });
  });

  describe('fetchCommentsAction', () => {
    const offerId = faker.datatype.uuid();
    const comments = makeFakeComments();

    it('should dispatch pending and fulfilled when 200', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}${offerId}`).reply(200, comments);

      await store.dispatch(fetchCommentsAction(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.fulfilled.type,
      ]);
    });

    it('should dispatch pending and rejected when error', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Comments}${offerId}`).reply(400);

      await store.dispatch(fetchCommentsAction(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchCommentsAction.pending.type,
        fetchCommentsAction.rejected.type,
      ]);
    });
  });

  describe('fetchOffersNearbyAction', () => {
    const offerId = faker.datatype.uuid();
    const offers = makeFakeOffersNearby(makeFakeCity());

    it('should dispatch pending and fulfilled when 200', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offer}${offerId}${APIRoute.OffersNearby}`).reply(200, offers);

      await store.dispatch(fetchOffersNearbyAction(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOffersNearbyAction.pending.type,
        fetchOffersNearbyAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchOfferAction', () => {
    const offerId = faker.datatype.uuid();
    const fullOffer = makeFakeFullOffer();

    it('should dispatch pending and fulfilled when 200', async () => {
      mockAxiosAdapter.onGet(`${APIRoute.Offer}${offerId}`).reply(200, fullOffer);

      await store.dispatch(fetchOfferAction(offerId));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchOfferAction.pending.type,
        fetchOfferAction.fulfilled.type,
      ]);
    });
  });

  describe('checkAuthAction', () => {
    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.fulfilled" with thunk "checkAuthAction', async () => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(200);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should dispatch "checkAuthAction.pending" and "checkAuthAction.rejected" when server response 400', async() => {
      mockAxiosAdapter.onGet(APIRoute.Login).reply(400);

      await store.dispatch(checkAuthAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        checkAuthAction.rejected.type,
      ]);
    });
  });

  describe('postCommentAction', () => {
    const offerId = faker.datatype.uuid();
    const commentPayload = {
      offerId,
      comment: faker.lorem.sentence(),
      rating: faker.datatype.number({ min: 1, max: 5 }),
    };
    const response = makeFakeComments()[0];

    it('should dispatch pending and fulfilled when 200', async () => {
      mockAxiosAdapter.onPost(`${APIRoute.Comments}${offerId}`).reply(200, response);

      await store.dispatch(postCommentAction(commentPayload));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        postCommentAction.pending.type,
        postCommentAction.fulfilled.type,
      ]);
    });
  });

  describe('fetchFavoritesAction', () => {
    const favorites = makeFakeFavoriteOffers();

    it('should dispatch pending and fulfilled when 200', async () => {
      mockAxiosAdapter.onGet(APIRoute.Favorite).reply(200, favorites);

      await store.dispatch(fetchFavoritesAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavoritesAction.pending.type,
        fetchFavoritesAction.fulfilled.type,
      ]);
    });
  });

  describe('loginAction', () => {
    const fakeUser: AuthData = makeFakeAuthData();
    const fakeServerReplay = { token: makeFakeToken() };

    it('should dispatch "loginAction.pending", "redirectToRoute", "loginAction.fulfilled" when server response 200', async() => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);

      await store.dispatch(loginAction(fakeUser));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginAction.pending.type,
        redirectToRoute.type,
        fetchOffersAction.pending.type,
        fetchFavoritesAction.pending.type,
        loginAction.fulfilled.type,
      ]);
    });

    it('should call "saveToken" once with the received token', async () => {
      mockAxiosAdapter.onPost(APIRoute.Login).reply(200, fakeServerReplay);
      const mockSaveToken = vi.spyOn(tokenStorage, 'saveToken');

      await store.dispatch(loginAction(fakeUser));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(fakeServerReplay.token);
    });

  });

  describe('postFavoriteAction', () => {
    const fakeOffer = makeFakeOffer();

    it('should redirect if user is not auth', async () => {
      await store.dispatch(postFavoriteAction({ offer: fakeOffer, userIsAuth: false }));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toContain(redirectToRoute.type);
    });

    it('should dispatch updateOffer and fulfilled if user is auth and server responds 200', async () => {
      const updatedOffer = { ...fakeOffer, isFavorite: !fakeOffer.isFavorite };
      mockAxiosAdapter
        .onPost(`${APIRoute.Favorite}/${fakeOffer.id}/${Number(!fakeOffer.isFavorite)}`)
        .reply(200, updatedOffer);

      await store.dispatch(postFavoriteAction({ offer: fakeOffer, userIsAuth: true }));
      const actions = store.getActions().map((action) => action.type);

      expect(actions).toContain(postFavoriteAction.fulfilled.type);
      expect(actions).toContain(updateOffer.type);
    });
  });

  describe('logoutAction', () => {
    it('should dispatch "logoutAction.pending", "logoutAction.fulfilled" when server response 204', async() => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);

      await store.dispatch(logoutAction());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logoutAction.pending.type,
        fetchOffersAction.pending.type,
        logoutAction.fulfilled.type,
      ]);
    });

    it('should one call "dropToken" with "logoutAction"', async () => {
      mockAxiosAdapter.onDelete(APIRoute.Logout).reply(204);
      const mockDropToken = vi.spyOn(tokenStorage, 'dropToken');

      await store.dispatch(logoutAction());

      expect(mockDropToken).toBeCalledTimes(1);
    });
  });
});
