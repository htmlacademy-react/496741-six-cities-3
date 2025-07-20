import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import { getRandomKeyForTextNotFound } from '../../../utils/mocks';
import { withHistory } from '../../../utils/mock-component';

describe('Component: NotFound', () => {
  it('should render correct', () => {
    const randomKey = getRandomKeyForTextNotFound();

    render(withHistory(<NotFound type={randomKey} />));

    expect(screen.getByTestId('text-not-found')).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
