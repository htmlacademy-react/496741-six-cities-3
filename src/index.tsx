import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './view/components/app/app';
import { mockOffers } from './model/mock.ts';
import { OfferType } from './types/types.ts';
import { CityName } from './const.ts';

const DEFAULT_ACTIVE_LOCATION: CityName = CityName.Amsterdam;

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
