import { render, screen } from '@testing-library/react';
import { withStore } from '../../../utils/mock-component';
import MainEmpty from './main-empty';
import { makeFakeCity } from '../../../utils/mocks';

describe('Component: MainEmpty', () => {
  const fakeCity = makeFakeCity();
  it('should render correctly', () => {
    const firstExpectedText = 'No places to stay available';
    const secondExpectedText = `We could not find any property available at the moment in ${fakeCity.name}`;
    const { withStoreComponent } = withStore(<MainEmpty city={fakeCity} />, {});

    render(withStoreComponent);

    expect(screen.getByText(firstExpectedText)).toBeInTheDocument();
    expect(screen.getByText(secondExpectedText)).toBeInTheDocument();

  });
});
