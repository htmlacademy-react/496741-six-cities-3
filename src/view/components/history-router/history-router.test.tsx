import { render, screen, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import HistoryRouter from './history-router';
import { Route, Routes } from 'react-router-dom';

describe('Component: HistoryRouter', () => {
  it('should render children and respond to history changes', async () => {
    const history = createMemoryHistory({ initialEntries: ['/initial'] });

    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/initial" element={<div>Initial Page</div>} />
          <Route path="/new" element={<div>New Page</div>} />
        </Routes>
      </HistoryRouter>
    );

    expect(screen.getByText('Initial Page')).toBeInTheDocument();
    history.push('/new');

    await waitFor(() => {
      expect(screen.getByText('New Page')).toBeInTheDocument();
    });
  });
});
