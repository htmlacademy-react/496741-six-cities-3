import { State } from '../../types/state';

const selectAuthInfo = (state: State) => state.authInfo;
const selectFavorite = (state: State) => state.favorite;

export {selectAuthInfo, selectFavorite};
