// useDebounce.test.tsx
import { renderHook, act } from '@testing-library/react';
import { vi } from 'vitest';
import useDebounce from './useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers(); // Use fake timers to control time in tests
  });

  afterEach(() => {
    vi.clearAllTimers();
  });

  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));

    expect(result.current).toBe('initial'); // Value should be the same as initially passed
  });

  it('should update the value after the debounce delay', () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: 'initial' },
    });

    expect(result.current).toBe('initial'); // Still 'initial'

    // Change the value
    rerender({ value: 'updated' });

    // Value should still be 'initial' as the delay hasn't passed
    expect(result.current).toBe('initial');

    // Fast-forward time
    act(() => {
      vi.advanceTimersByTime(500); // Move time forward by the delay
    });

    // Now the value should be 'updated'
    expect(result.current).toBe('updated');
  });

  it('should clear timeout on unmount', () => {
    const { result, unmount } = renderHook(() => useDebounce('initial', 500));

    expect(result.current).toBe('initial');

    // Unmount the hook to see if it clears the timeout
    unmount();

    // Check that no timers are left
    expect(vi.getTimerCount()).toBe(0);
  });
});
