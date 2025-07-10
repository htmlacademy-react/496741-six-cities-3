import { State } from '../../types/state';

const selectAuthorizationStatus = (state: State) => state.authorizationStatus;

export {selectAuthorizationStatus};
