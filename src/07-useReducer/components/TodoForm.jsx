import { useState } from "react";
import { useForm } from "../../hooks";

export const TodoForm = ({ handleNewTodo }) => {

    const { description, update, reset } = useForm({
        description: ""
    })

    const onSubmit = (ev) => {
        ev.preventDefault();

        if (!description) return;

        handleNewTodo(description);

        reset();
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="New todo"
                className="form-control"
                value={description}
                name="description"
                onChange={update}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Add
            </button>
        </form>
    );
}