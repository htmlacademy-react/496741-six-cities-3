import { NameSpace } from '../../const.ts';
import { State } from '../../types/state';

const selectOffer = (state: State) => state[NameSpace.Offer].offer;
const selectOffersNearby = (state: State) => state[NameSpace.Offer].offersNearby;
const selectComments = (state: State) => state[NameSpace.Offer].comments;

export {
  selectOffer,
  selectOffersNearby,
  selectComments };
