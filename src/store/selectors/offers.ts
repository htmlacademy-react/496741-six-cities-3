import { NameSpace } from '../../const.ts';
import { State } from '../../types/state.ts';

const selectCity = (state: State) => state[NameSpace.Offers].city;
const selectOffers = (state: State) => state[NameSpace.Offers].offers;
const selectOffersLoadingStatus = (state: State) => state[NameSpace.Offers].isOffersLoading;
const selectSortOption = (state: State) => state[NameSpace.Offers].sortOption;
const selectErrorStatus = (state: State) => state[NameSpace.Offers].hasError;

export {
  selectCity,
  selectOffers,
  selectOffersLoadingStatus,
  selectSortOption,
  selectErrorStatus };
