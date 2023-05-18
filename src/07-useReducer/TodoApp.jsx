import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            description: "Ir al gym",
            done: false
        },
        {
            id: new Date().getTime() * 3,
            description: "Compra mercadona",
            done: false
        }
    ]

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>Todo App x, <small>pendientes: x</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList>
                        {
                            state.map(({ id, description }) =>
                                <TodoItem key={id} {...{ id, description }} />
                            )
                        }
                    </TodoList>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />

                    <TodoForm dispatch={dispatch} />
                </div>
            </div>
        </>
    );
}