import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { checkAuthAction, fetchOffersAction } from './store/api-actions.ts';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HistoryRouter from './view/components/history-router/history-router.tsx';
import browserHistory from './browser-history.ts';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ToastContainer />
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
