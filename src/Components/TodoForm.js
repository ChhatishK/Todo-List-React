import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [task, setTask] = useState('');

   const todo = document.getElementById("todo")
    const handleSubmit = e => {
        e.preventDefault();
        if (task !== ''){
            if (task.trim()) {
                addTodo(task);
                setTask('');
            }
        } else {
            todo.style.boxShadow = '0.5px 0.5px 0.5px 1px red'
        }
    };
    
    document.body.addEventListener("click", () =>{
        todo.style.boxShadow = 'none';
    })

    return (
        <form className="flex flex-col gap-2 items-center" onSubmit={handleSubmit}>
            <input
                autocomplete=off
                id='todo'
                type="text"
                value={task}
                onChange={e => setTask(e.target.value)}
                placeholder="Add a todo"
                className='appearance-none p-2 text-xl rounded-md focus:border-green-400'
            />
            <button type="submit" className='w-[120px] text-xl bg-blue-300 hover:bg-sky-900 p-1 rounded-lg  hover:text-white transition-all duration-400'>Add Todo</button>
        </form>
    );
};

export default TodoForm
