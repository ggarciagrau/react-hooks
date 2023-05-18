import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

export const TodoApp = () => {

    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: "Ir al gym",
        //     done: false
        // },
        // {
        //     id: new Date().getTime() * 3,
        //     description: "Compra mercadona",
        //     done: false
        // }
    ]

    const init = () => JSON.parse(localStorage.getItem('todos')) || [];

    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(state || []));

    }, [state]);

    const handleNewTodo = description => {

        dispatch({ type: "ADD_TODO", payload: description });
    }

    const handleRemoveTodo = id => {

        dispatch({ type: "REMOVE_TODO", payload: id });
    }

    const toggleTodo = id => {

        dispatch({ type: "TOGGLE_TODO", payload: id });
    }

    return (
        <>
            <h1>Todo App x, <small>pendientes: x</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList>
                        {
                            state.map(({ id, description, done }) =>
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