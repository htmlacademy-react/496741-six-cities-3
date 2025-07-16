import { NameSpace } from '../../const';
import { State } from '../../types/state';

const selectAuthorizationStatus = (state: State) => state[NameSpace.User].authorizationStatus;

export {selectAuthorizationStatus};
