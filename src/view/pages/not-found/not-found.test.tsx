import { render, screen } from '@testing-library/react';
import NotFound from './not-found';
import { getRandomKeyForTextNotFound } from '../../../utils/mocks';
import { TextNotFound } from '../../../const';
import { withHistory } from '../../../utils/mock-component';

describe('Component: NotFound', () => {
  it('should render correct', () => {
    const randomKey = getRandomKeyForTextNotFound();
    const expectedText = TextNotFound[randomKey];

    render(withHistory(<NotFound type={randomKey} />));

    expect(screen.getByTestId('text-not-found')).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
    expect(screen.getByText('Go to main page')).toBeInTheDocument();
  });
});
