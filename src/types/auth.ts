import { Token } from '../services/token.ts';

export type AuthInfo = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: Token;
};

export type AuthData = {
  email: string;
  password: string;
};
