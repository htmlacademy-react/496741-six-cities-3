import { useAppSelector } from './index.ts';
import { selectAuthorizationStatus } from '../store/selectors/auth.ts';
import { AuthorizationStatus } from '../const';

const useAuth = () => useAppSelector(selectAuthorizationStatus) === AuthorizationStatus.Auth;

export { useAuth };
