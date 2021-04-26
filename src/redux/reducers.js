import { ADD_TODO, UPDATE_TODO, DELETE_TODO,DELETEALL_TODO } from './actions';

const initstate= [];

export let reducer = (state = initstate, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

        case DELETEALL_TODO:
            
            
            return initstate;

        default:
            return initstate;


    }
    return state;
}