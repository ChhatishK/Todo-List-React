import React from 'react';

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
                <button className='w-[80px] bg-green-400 hover:bg-green-600 transition-all duration-200 rounded-md hover:text-white' onClick={() => editTodo(task.id)}>Edit</button>
                <button className='w-[80px] bg-red-400 hover:bg-red-600 transition-all duration-200 rounded-md hover:text-white' onClick={() => deleteTodo(task.id)}>Delete</button>
            </div>
        </div>
    );
};

export default Todo;