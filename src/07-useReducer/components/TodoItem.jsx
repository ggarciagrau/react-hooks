
export const TodoItem = ({ id, description, checked, handleRemoveTodo, toggleTodo }) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{description}</span>
            <input type="checkbox" checked={checked} onChange={() => toggleTodo(id)} />
            <button
                className="btn btn-danger"
                onClick={() => handleRemoveTodo(id)}
            >
                Delete
            </button>
        </li>
    );
}