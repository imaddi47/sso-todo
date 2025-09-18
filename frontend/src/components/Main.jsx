import React from 'react'
import TodoTemplate from './TodoTemplate'
import Todo from './Todo'

const Main = ({ todos, setTodos, displayTodoTemplate, setDisplayTodoTemplate }) => {
  // Add Todo
  const addTodo = (title, text) => {
    const newTodo = {
      id: Date.now(),
      title,
      text,
      isCompleted: false,
    }
    setTodos([...todos, newTodo])
    setDisplayTodoTemplate(false)
  }

  return (
    <div className='flex flex-1 justify-center p-2' style={{ background: '#f5f5f5'}}>
        <div className='max-w-10/12 w-[900px] flex flex-wrap' style={{ alignContent: 'start' }}>
            {todos ? todos.map(todo => (
                <Todo todo={todo} key={todo.id} todos={todos} setTodos={setTodos} />
            )) : null}
            { displayTodoTemplate ? <TodoTemplate todoAction={addTodo} actionType='Create' /> : null}
        </div>
    </div>
  )
}

export default Main