import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withHistory, withStore } from '../../../utils/mock-component';
import Login from './login';
import { makeFakeAuthData, makeFakeAuthInfo, makeFakeFavoriteOffers, makeFakeState } from '../../../utils/mocks';
import { createMemoryHistory } from 'history';
import { AuthorizationStatus, NameSpace } from '../../../const';

describe('Component: Login', () => {
  const mockHistory = createMemoryHistory();
  const fakeState = makeFakeState();
  const fakeAuthInfo = makeFakeAuthInfo();
  const fakeFavoriteOffers = makeFakeFavoriteOffers();
  const mockState = {
    ...fakeState,
    [NameSpace.User]: {
      ...fakeState[NameSpace.User],
      authInfo: fakeAuthInfo,
      favorites: fakeFavoriteOffers,
      authorizationStatus: AuthorizationStatus.NoAuth,
    }
  };

  it('should render correctly', () => {
    const loginText = 'Email';
    const passwordText = 'Password';
    const { withStoreComponent } = withStore(<Login />, mockState);
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    render(preparedComponent);

    expect(screen.getByPlaceholderText(loginText)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(passwordText)).toBeInTheDocument();
  });

  it('should render correctly when user enter login and password', async () => {
    const loginTestId = 'login';
    const passwordTestId = 'password';

    const fakeAuthData = makeFakeAuthData();

    const { withStoreComponent } = withStore(<Login />, mockState);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);
    await userEvent.type(
      screen.getByTestId(loginTestId),
      fakeAuthData.email,
    );
    await userEvent.type(
      screen.getByTestId(passwordTestId),
      fakeAuthData.password,
    );

    expect(screen.getByDisplayValue(fakeAuthData.email)).toBeInTheDocument();
    expect(screen.getByDisplayValue(fakeAuthData.password)).toBeInTheDocument();
  });
});
