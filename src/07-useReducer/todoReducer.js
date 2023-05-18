export const todoReducer = (state, { type, payload }) => {

    switch (type) {
        case "ADD_TODO":
            return [
                ...state, {
                    id: new Date().getTime(),
                    description: payload,
                    done: false
                }
            ];

        case "REMOVE_TODO":
            return state.filter(todo => todo.id != payload);

        case "TOGGLE_TODO":
            return state.map(todo => {
                if (todo.id == payload) {
                    todo.done = !todo.done;
                }
                
                return todo;
            })

        default:
            return state;
    }
}