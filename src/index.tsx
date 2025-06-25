import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/components/app/app';
import { mockReviews, mockOffers } from './model/mock.ts';
import { ReviewType, OfferType } from './types/types.ts';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';

const offers: OfferType[] = mockOffers;
const reviews: ReviewType[] = mockReviews;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
