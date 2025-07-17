import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectAuthInfo = (state: State) => state[NameSpace.User].authInfo;
const selectFavorites = (state: State) => state[NameSpace.User].favorites;
const selectAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

export {selectAuthInfo, selectFavorites, selectAuthorizationStatus};
