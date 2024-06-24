import React from 'react'
import circle_icon from '../assets/circle.png'
import check_circle_icon from '../assets/check.png'
import cross_circle_icon from '../assets/cross-circle.png'

const TodoItems = ( {text, id, isComplete, deleteTask, toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={() => {toggle(id)}} className='flex flex-1 items-center
        cursor-pointer'>
            <img className=' w-7 
              ' src={ isComplete ? check_circle_icon : circle_icon} alt="" />
            <p className={`text-slate-700 ml-4 text-[17px] 
                  decoration-slate-500 ${isComplete ? "line-through" : ""}`}>{text}</p>
        </div>
        <img onClick={() => {deleteTask(id)}} className='w-7 cursor-pointer'  src={cross_circle_icon} alt="" />
    </div>
  )
}

export default TodoItems