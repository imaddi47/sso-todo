import { useState } from 'react'

const TodoTemplate = ({ todoAction, actionType, todo = {} }) => {
  const [todoTemplate, setTodoTemplate] = useState({
    title: todo.title || '',
    text: todo.text || '',
    isCompleted: todo.isCompleted,
    id: todo.id
  })

  const performTodoAction = () => {
    if(actionType === 'Create') {
      todoAction(todoTemplate.title, todoTemplate.text)
    } else if (actionType === 'Update') {
      todoAction(todoTemplate)
    }
  }

  return (
    <div className='flex flex-col p-1 h-40 w-1/3'>
      <div className={'flex-1 flex-col flex p-2 border-2 shadow-lg rounded-md bg-amber-50'}>
        <input className='font-bold border-b-white border-b-2 mb-1 focus:outline-none text-amber-500' onChange={(e) => setTodoTemplate({ ...todoTemplate, title: e.target.value})} placeholder='Title...' value={todoTemplate.title} />
        <textarea className='font font-mono flex-1 focus:outline-none resize-none text-amber-500' onChange={(e) => setTodoTemplate({ ...todoTemplate, text: e.target.value})} placeholder='Todo Text...' value={todoTemplate.text} />
        <button className='bg-black hover:bg-blue-700 text-white font-bold p-0.5 rounded mt-0.5' onClick={performTodoAction}>{actionType}</button>
      </div>
    </div>
  )
}

export default TodoTemplate