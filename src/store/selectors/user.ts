import { State } from '../../types/state';

const selectAuthInfo = (state: State) => state.authInfo;
const selectFavorites = (state: State) => state.favorites;

export {selectAuthInfo, selectFavorites};
