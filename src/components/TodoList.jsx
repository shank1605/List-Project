import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import TodoItem from './TodoItem'

import { deleteAll } from '../redux/actions';

function TodoList() {
    let todos = useSelector(state=>state);
    let [name, setName] = useState();
    let dispatch = useDispatch();

    return (
        
        <div className="my-4">
            {todos.map((todo)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div>
       
        
    )
}

export default TodoList
