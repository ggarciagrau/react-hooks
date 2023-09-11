import { todoReducer } from "../../../07-useReducer/todoReducer";

const id = new Date().getTime();

const initialState = [
  {
    id,
    description: "Go shopping",
    done: false,
  },
];

describe("Tests for todoReducer", () => {
  it("should return the initial state", () => {
    const returnedState = todoReducer(initialState, {});

    expect(returnedState).toBe(initialState);
  });

  it("should toggle a todo", () => {
    const returnedState = todoReducer(initialState, {
      type: "TOGGLE_TODO",
      payload: id,
    });

    const targetTodo = returnedState.find((todo) => todo.id == id);

    expect(targetTodo.done).toBeTruthy();
  });

  it("should add a todo", () => {
    const payload = "Go WC";

    const returnedState = todoReducer(initialState, {
      type: "ADD_TODO",
      payload,
    });

    const targetTodo = returnedState.slice(-1)[0];

    const newTodo = {
      id: targetTodo.id,
      description: payload,
      done: false,
    };
    expect(returnedState).toHaveLength(2);
    expect(returnedState).toContainEqual(newTodo);
  });

  it("should remove a todo", () => {
    const returnedState = todoReducer(initialState, {
      type: "REMOVE_TODO",
      payload: { id },
    });

    expect(returnedState).toHaveLength(1);
  });
});
