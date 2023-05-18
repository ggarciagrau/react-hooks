import { useTodo } from "../hooks/useTodo";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

export const TodoApp = () => {

    const {
        todos,
        handleNewTodo,
        handleRemoveTodo,
        toggleTodo
    } = useTodo();

    return (
        <>
            <h1>Todo App x, <small>pendientes: x</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList>
                        {
                            todos.map(({ id, description, done }) =>
                                <TodoItem
                                    key={id}
                                    {...{
                                        id,
                                        description,
                                        checked: done,
                                        handleRemoveTodo,
                                        toggleTodo
                                    }}
                                />
                            )
                        }
                    </TodoList>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoForm handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
}