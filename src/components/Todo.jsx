import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../assets/to-do.png'
import TodoItems from './TodoItems'

const Todo = () => {

    const inputRef = useRef();
    const [todo, setTodo] = useState(localStorage.getItem('tasks')? JSON.parse(localStorage.getItem('tasks')) : []);

    const addTask = () => {
        const task = inputRef.current.value.trim();

        if (task === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: task,
            isComplete: false,
        }
        setTodo((prev) => [...prev, newTodo]);
        inputRef.current.value = "";

    }

    const deleteTask = (id) => {
        setTodo((prevTask) => {
            return prevTask.filter((task) => task.id !== id)
        })
    }

    const toggle = (id) => {
        setTodo((prevTask) => {
            return prevTask.map((task) => {
                if (task.id === id) {
                    return { ...task, isComplete: !task.isComplete };
                }
                return task;
            })
        })

    }

    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todo))

    },[todo])

    
    return (
        <div className='flex flex-col place-self-center w-11/12 max-w-md min-h-[550px] bg-purple-100 rounded-xl shadow-md p-7'>

            <div className='mt-7  flex gap-3 items-center'>
                <img src={todo_icon} alt="todo-list" className='w-8' />
                <h1 className='text-3xl font-semibold'>Todo-List</h1>
            </div>

            <div className='flex items-center my-7  gap-3'>
                <input ref={inputRef} className='bg-white rounded border-0 outline-none flex-1
            h-10 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Ajouter une tache' />
                <button onClick={addTask} className='border-none  rounded  bg-purple-600 w-32 h-10 text-white
            font-semibold txet-lg cursor-pointer hover:bg-purple-950'>Ajouter</button>
            </div>

            <div className=''>
                {todo.map((item, index) => {
                    return <TodoItems key={index} text={item.text} id={item.id}
                        isComplete={item.isComplete} deleteTask={deleteTask} toggle={toggle} />
                })}
            </div>

        </div>
    )
}

export default Todo