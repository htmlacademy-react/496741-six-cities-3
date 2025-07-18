import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectAuthInfo = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].authInfo;
const selectFavorites = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].favorites;
const selectAuthorizationStatus = (state: Pick<State, NameSpace.User>) => state[NameSpace.User].authorizationStatus;

export {selectAuthInfo, selectFavorites, selectAuthorizationStatus};
