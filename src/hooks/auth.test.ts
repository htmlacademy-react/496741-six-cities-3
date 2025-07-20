import { renderHook } from '@testing-library/react';
import { AuthorizationStatus } from '../const';
import * as SelectorHook from './index';
import { useAuth } from './auth';

vi.mock('./index');

describe('Hook: useAuth', () => {
  const mockedUseAppSelector = SelectorHook.useAppSelector as jest.MockedFunction<typeof SelectorHook.useAppSelector>;

  it('should return true if authorizationStatus is Auth', () => {
    mockedUseAppSelector.mockReturnValue(AuthorizationStatus.Auth);

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe(true);
  });

  it('should return false if authorizationStatus is not Auth', () => {
    mockedUseAppSelector.mockReturnValue(AuthorizationStatus.NoAuth);

    const { result } = renderHook(() => useAuth());

    expect(result.current).toBe(false);
  });
});
