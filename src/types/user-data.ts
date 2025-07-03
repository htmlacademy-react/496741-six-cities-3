import { Token } from '../services/token.ts';

export type UserData = {
  id: number;
  email: string;
  token: Token;
};
