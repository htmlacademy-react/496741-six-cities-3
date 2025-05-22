import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/components/app/app';
import { mockOffers } from './model/mock.ts';
import { OfferType } from './types/types.ts';
import { DEFAULT_ACTIVE_LOCATION } from './const.ts';

const offers: OfferType[] = mockOffers;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <React.StrictMode>
      <App offers = {offers} activeLocation={DEFAULT_ACTIVE_LOCATION}/>
    </React.StrictMode>
  </React.StrictMode>
);
