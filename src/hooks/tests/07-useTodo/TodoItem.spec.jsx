import { fireEvent, act, render } from "@testing-library/react";
import { TodoItem } from "../../../07-useReducer/components/TodoItem";

const id = 55;
let checked = false;

const mockToggleTodo = jest.fn();

mockToggleTodo.mockImplementation(() => {
  checked = !checked;
});

const mockHandleRemoveTodo = jest.fn();

// id, description, checked, handleRemoveTodo, toggleTodo

describe("Tests for TodoItem", () => {
  it("Should render by default", () => {
    const rendered = render(
      <TodoItem
        id={id}
        description={"Product"}
        checked={checked}
        handleRemoveTodo={mockHandleRemoveTodo}
        toggleTodo={mockToggleTodo}
      />
    );
    expect(rendered.container).toMatchSnapshot();
  });

  it("Should remove the todo", () => {
    const rendered = render(
      <TodoItem
        id={id}
        description={"Product"}
        checked={checked}
        handleRemoveTodo={mockHandleRemoveTodo}
        toggleTodo={mockToggleTodo}
      />
    );

    const removeButton = rendered.getByText("Delete");

    act(() => {
      fireEvent.click(removeButton);
    });

    expect(mockHandleRemoveTodo).toHaveBeenCalledWith(id);
  });

  it("Should toggle the todo", async () => {
    const rendered = render(
      <TodoItem
        id={id}
        description={"Product"}
        checked={checked}
        handleRemoveTodo={mockHandleRemoveTodo}
        toggleTodo={mockToggleTodo}
      />
    );

    const checkbox = rendered.getByRole("checkbox");
    act(() => {
      fireEvent.click(checkbox);
    });

    rendered.rerender(
        <TodoItem
          id={id}
          description={"Product"}
          checked={checked}
          handleRemoveTodo={mockHandleRemoveTodo}
          toggleTodo={mockToggleTodo}
        />
      );

    expect(mockToggleTodo).toHaveBeenCalled();
    expect(checkbox.checked).toBeTruthy();
  });
});
