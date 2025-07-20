import { render, screen } from '@testing-library/react';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correct', () => {
    const loadingScreenTestId = 'loading-screen';

    render(<LoadingScreen />);
    const LoadingScreenContainer = screen.getByTestId(loadingScreenTestId);

    expect(LoadingScreenContainer).toBeInTheDocument();
  });
});
