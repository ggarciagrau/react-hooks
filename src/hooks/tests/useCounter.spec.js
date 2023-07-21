import { renderHook, act } from "@testing-library/react";
import { useCounter } from "../useCounter";

const defaultValue = 10;

describe("Tests for useCounter", () => {
  it("should return the default values", () => {
    const { result } = renderHook(() => useCounter(defaultValue));
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(defaultValue);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  it("should increment the counter", () => {
    const { result } = renderHook(() => useCounter(defaultValue));

    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(defaultValue + 1);
  });

  it("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(defaultValue));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.counter).toBe(defaultValue - 1);
  });

  it("should reset the counter", () => {
    const { result } = renderHook(() => useCounter(defaultValue));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.increment();
    });

    act(() => {
      result.current.reset();
    });

    expect(result.current.counter).toBe(0);
  });
});
