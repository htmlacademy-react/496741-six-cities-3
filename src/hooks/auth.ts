import { useAppSelector } from './index.ts';
import { AuthorizationStatus } from '../const';
import { selectAuthorizationStatus } from '../store/selectors/user.ts';

const useAuth = () => useAppSelector(selectAuthorizationStatus) === AuthorizationStatus.Auth;

export { useAuth };
