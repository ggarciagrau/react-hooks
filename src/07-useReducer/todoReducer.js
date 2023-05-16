export const todoReducer = ({state, action}) => {
   switch (action) {
    case "ADD_TODO":
        throw new Error('ADD_TODO action not implemented');
        return state;
    default:
        return state;
   } 
}