import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/components/app/app';
import { mockReviews, mockOffers } from './model/mock.ts';
import { ReviewType, OfferType } from './types/types.ts';

const offers: OfferType[] = mockOffers;
const reviews: ReviewType[] = mockReviews;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.StrictMode>
      <App
        offers={offers}
        reviews={reviews}
      />
    </React.StrictMode>
  </React.StrictMode>
);
