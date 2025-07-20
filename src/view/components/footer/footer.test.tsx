import { render, screen } from '@testing-library/react';
import Footer from './footer';
import { withHistory } from '../../../utils/mock-component';

describe('Component: Footer', () => {
  it('should render correct', () => {
    const footerTestId = 'footer-container';

    render(withHistory(<Footer />));
    const footerContainer = screen.getByTestId(footerTestId);

    expect(footerContainer).toBeInTheDocument();
  });
});
