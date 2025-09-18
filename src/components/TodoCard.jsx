import React from 'react'

import { pencil as pencilSvg, bucket as bucketSvg } from '../assets/svg'

const TodoCard = ({ todo: { id, title, text, isCompleted } = {}, toggleEditMode, deleteTodo, toggleTodoCompletionState }) => {
  return (
    <div className='flex flex-col p-1 h-40 w-1/3'>
      <div className={'flex flex-1 p-2 border-2 shadow-lg rounded-md' + (isCompleted ? ' bg-green-500 line-through' : ' bg-blue-500')}>
        <div className='flex flex-col flex-1'>
          <span className='text-white font-bold border-b-white border-b-2 mb-1'>{title}</span>
          <span className='text-black font font-mono flex-1'>{text}</span>
        </div>
        <div>
          <div className='flex align flex-col'>
            <span className='flex items-center p-2 ml-2 mb-1 bg-black text-white rounded-[5px] hover:cursor-pointer' onClick={() => toggleEditMode()}>
              {pencilSvg}
            </span>
            <span className='flex items-center p-2 ml-2 mb-1 bg-black text-white rounded-[5px] hover:cursor-pointer' onClick={() => deleteTodo(id)}>
              {bucketSvg}
            </span>
            <input type='checkbox' className=' items-center w-7 h-7 ml-2 bg-black text-white border-2 border-black rounded-[5px] hover:cursor-pointer' checked={isCompleted} onChange={() => toggleTodoCompletionState(id)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoCard