import React, { useState } from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function TodoEditForm({ editTask, task }) {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();
        editTask(value, task.id);
    };

    return (
        <form className='flex w-full justify-center items-center gap-4 border p-1 rounded-md' onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="Edit todo"
                className='rounded-md pl-2 w-[75%] focus:shadow-green-400'
            />
            <IoMdCheckmarkCircleOutline className=' cursor-pointer text-2xl' onClick={handleSubmit} color='blue' />
        </form>
    );
};

export default TodoEditForm
