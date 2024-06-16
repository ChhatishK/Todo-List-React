import React from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Todo({ task, toggleComplete, deleteTodo, editTodo }) {
    return (
        <div className="w-full flex justify-between items-center border pl-4 rounded-md">
            <p
                className={task.completed ? 'completed' : ''}
                onClick={() => toggleComplete(task.id)}
                
            >
                {task.task}
            </p>
            <div className='flex gap-3 p-1'>
                <FiEdit onClick={() => editTodo(task.id)} className='cursor-pointer text-2xl' color='white'  />
                <RiDeleteBin6Line onClick={() => deleteTodo(task.id)} className='text-red cursor-pointer text-2xl' color='red'/>
            </div>
        </div>
    );
};

export default Todo;
