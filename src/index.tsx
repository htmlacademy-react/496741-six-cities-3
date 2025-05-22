import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/components/app/app';
import { mockOffers } from './model/mock.ts';
import { OfferType } from './types/types.ts';

const offers: OfferType[] = mockOffers;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.StrictMode>
      <App offers = {offers}/>
    </React.StrictMode>
  </React.StrictMode>
);
