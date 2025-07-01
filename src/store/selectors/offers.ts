import { State } from '../../types/state.ts';

const selectCity = (state: State) => state.city;
const selectOffers = (state: State) => state.offers;

export { selectCity, selectOffers };
