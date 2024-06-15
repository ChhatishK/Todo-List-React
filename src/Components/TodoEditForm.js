import React, { useState } from 'react';

function TodoEditForm({ editTask, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id);
    };

    return (
        <form className='flex w-full justify-around border p-1 rounded-md' onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Edit todo"
                className='rounded-md pl-2 w-[60%] focus:shadow-green-400'
            />
            <button type="submit" className='bg-green-400 hover:bg-green-600 hover:text-white rounded-md pl-2 pr-2'>Update Todo</button>
        </form>
    );
};

export default TodoEditForm