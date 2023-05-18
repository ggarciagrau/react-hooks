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
        default:
            return state;
    }
}