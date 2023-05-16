const initialState = [
    {
        id: 1,
        todo: "Ir al gym",
        done: false
    },
    {
        id: 2,
        todo: "Compra mercadona",
        done: false
    }
];

const todoReducer = (state = initialState, action = {}) => {

    if (action.type == 'ADD_TODO') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

console.log(todos)

const newTodo = {
    id: 3,
    todo: "Ser un pro de React",
    done: false
}

todos = todoReducer(todos, {
    type: 'ADD_TODO',
    payload: newTodo
});

console.log(todos)