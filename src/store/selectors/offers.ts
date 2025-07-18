import { NameSpace } from '../../const.ts';
import { State } from '../../types/state.ts';

const selectCity = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].city;
const selectOffers = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].offers;
const selectOffersLoadingStatus = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].isOffersLoading;
const selectSortOption = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].sortOption;
const selectErrorStatus = (state: Pick<State, NameSpace.Offers>) => state[NameSpace.Offers].hasError;

export {
  selectCity,
  selectOffers,
  selectOffersLoadingStatus,
  selectSortOption,
  selectErrorStatus };
