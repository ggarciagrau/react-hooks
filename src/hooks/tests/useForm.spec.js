import { renderHook, act } from "@testing-library/react";
import { useForm } from "../useForm";
import { number } from "prop-types";

const initialForm = {
  name: "Roberto",
  lastname: "Martínez",
  age: 33,
};

describe("Tests for useForm", () => {
  it("should return the default values", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const { name, lastname, age, data, update, reset } = result.current;

    expect(name).toBe(initialForm.name);
    expect(lastname).toBe(initialForm.lastname);
    expect(age).toBe(initialForm.age);
    expect(data).toEqual({
      name: expect.any(String),
      lastname: expect.any(String),
      age: expect.any(Number),
    });
    expect(update).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  it("should update a value", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const newAge = 55;

    act(() => {
        result.current.update({target: {name: "age", value: newAge}});
    });

    expect(result.current.age).toBe(newAge);
    expect(result.current.data.age).toBe(newAge);
  });

  it("should reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm));

    const newAge = 55;

    act(() => {
        result.current.update({target: {name: "age", value: newAge}});
    });
    
    act(() => {
        result.current.reset();
    });

    expect(result.current.age).toBe(initialForm.age);
    expect(result.current.data.age).toBe(initialForm.age);
  });
});
