// import { screen, render } from '@testing-library/react';
// import { createMemoryHistory, MemoryHistory } from 'history';
// import App from './app';
// import { AppRoute, AuthorizationStatus } from '../../../const';
// import { withHistory, withStore } from '../../../utils/mock-component';
// import { makeFakeStore } from '../../../utils/mocks';

// describe('Application Routing', () => {
//   let mockHistory: MemoryHistory;

//   beforeEach(() => {
//     mockHistory = createMemoryHistory();
//   });

//   it('should render Main page when user navigates to "/"', () => {
//     mockHistory.push(AppRoute.Root);
//     const { withStoreComponent } = withStore(
//       withHistory(<App />, mockHistory),
//       makeFakeStore()
//     );

//     render(withStoreComponent);

//     expect(screen.getByTestId('main-page')).toBeInTheDocument();
//   });

//   it('should render Login page when user navigates to "/login"', () => {
//     mockHistory.push(AppRoute.Login);
//     const { withStoreComponent } = withStore(
//       withHistory(<App />, mockHistory),
//       makeFakeStore({ USER: { authorizationStatus: AuthorizationStatus.NoAuth } })
//     );

//     render(withStoreComponent);

//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
//   });

//   it('should render Favorites page when user is authorized and navigates to "/favorites"', () => {
//     mockHistory.push(AppRoute.Favorites);
//     const { withStoreComponent } = withStore(
//       withHistory(<App />, mockHistory),
//       makeFakeStore({
//         USER: {
//           authorizationStatus: AuthorizationStatus.Auth,
//           authInfo: makeFakeAuthInfo(),
//           favorites: [],
//         }
//       })
//     );

//     render(withStoreComponent);

//     expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
//   });

//   it('should render Offer page when user navigates to "/offer/:id"', () => {
//     const fakeOffer = makeFakeFullOffer();
//     const offerId = fakeOffer.id;
//     mockHistory.push(`${AppRoute.Offer.replace(':id', String(offerId))}`);

//     const { withStoreComponent } = withStore(
//       withHistory(<App />, mockHistory),
//       makeFakeStore({
//         OFFER: {
//           offer: fakeOffer,
//           comments: makeFakeComments(),
//           nearby: [],
//         }
//       })
//     );

//     render(withStoreComponent);

//     expect(screen.getByTestId('offer-page')).toBeInTheDocument();
//   });

//   it('should render NotFound page when user navigates to an unknown route', () => {
//     mockHistory.push('/unknown-route');
//     const { withStoreComponent } = withStore(
//       withHistory(<App />, mockHistory),
//       makeFakeStore()
//     );

//     render(withStoreComponent);

//     expect(screen.getByText('404. Page not found')).toBeInTheDocument();
//     expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
//   });
// });
