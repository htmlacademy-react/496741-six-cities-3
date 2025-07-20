import { createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../../utils/mock-component';
import Logo from './logo';
import { render, screen } from '@testing-library/react';
import { makeFakeState } from '../../../utils/mocks';

describe('Component: Logo', () => {
  const mockHistory = createMemoryHistory();
  const mockState = makeFakeState();
  const expectedAltText = '6 cities logo';

  it('renders active logo with the active CSS class applied', () => {
    const { withStoreComponent } = withStore(<Logo isActive />, mockState);
    const preparedComponent = withHistory(withStoreComponent, mockHistory);

    const { container } = render(preparedComponent);
    const logoWrapper = container.querySelector('.header__logo-link');

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
    expect(logoWrapper).toHaveClass('header__logo-link--active');
  });

  it('renders inactive logo without the active CSS class', () => {
    const preparedComponent = withHistory(<Logo isActive={false} />);

    const { container } = render(preparedComponent);
    const logoWrapper = container.querySelector('.header__logo-link');

    expect(screen.getByAltText(expectedAltText)).toBeInTheDocument();
    expect(logoWrapper).not.toHaveClass('header__logo-link--active');
  });
});
