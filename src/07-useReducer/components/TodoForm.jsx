import { useState } from "react";
import { useForm } from "../../hooks";

export const TodoForm = () => {

    const { description, update, reset } = useForm({
        description: ""
    })

    const onSubmit = (ev) => {
        ev.preventDefault();

        const { target: { description }} = ev;

        if (!description) return;

        reset();
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="New todo"
                className="form-control"
                value={description}
                onChange={({ target: { value: description } }) => update({ ...description })}
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