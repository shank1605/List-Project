import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteAll } from '../redux/actions';

function DeleteALL() {
    
    
    let dispatch = useDispatch();

    return (
        <div>
            <button className="btn btn-danger m-2"
                 onClick={()=> dispatch(deleteAll())}  
                >Delete ALL</button>

                
            </div>
        
    )
}

export default DeleteALL;
