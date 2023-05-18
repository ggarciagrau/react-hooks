import { todoReducer } from "../07-useReducer/todoReducer";
import { useReducer, useEffect } from "react";

export const useTodo = (initialState) => {

    const init = () => JSON.parse(localStorage.getItem('todos')) || [];

    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    const nPending = state.filter(todo => todo.done != true).length;

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

    return {
        todos: state,
        nPending,
        handleNewTodo,
        handleRemoveTodo,
        toggleTodo
    }

}