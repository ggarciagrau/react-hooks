import { render } from "@testing-library/react";
import { TodoApp } from "../../../07-useReducer/TodoApp";
import { useTodo } from "../../useTodo";

const todosList = [
  {
    id: 1,
    description: "Canary",
    done: false,
  },
  {
    id: 2,
    description: "Budgie",
    done: false,
  },
];

const mockHandleNewTodo = jest.fn();
const mockRemoveTodo = jest.fn();
const mockToggleTodo = jest.fn();

jest.mock("../../useTodo");

useTodo.mockReturnValue({
  todos: todosList,
  nPending: 2,
  handleNewTodo: mockHandleNewTodo,
  handleRemoveTodo: mockRemoveTodo,
  toggleTodo: mockToggleTodo,
});

describe("Tests for TodoApp", () => {
  it("Should display the component by default", () => {
    const rendered = render(<TodoApp />);

    expect(rendered.getByText("Todo App 2,"))
    expect(rendered.getByText("pendientes: 2"))
    expect(rendered.container).toMatchSnapshot();
  });
});
