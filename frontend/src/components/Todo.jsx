import { useState } from 'react';
import TodoCard from './TodoCard'
import TodoTemplate from './TodoTemplate'

const Todo = ({ todo, todos, setTodos, isInEditMode = false }) => {
  const [editMode, setEditMode] = useState(isInEditMode);

  const toggleEditMode = () => {
    setTodos
    setEditMode(!editMode);
  }

  const updateTodo = (updatedTodo) => {
    setEditMode(!editMode);
    setTodos(todos.map(t => t.id === todo.id ? updatedTodo : t))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const toggleTodoCompletionState = (id) => {
    setTodos(todos.map(t => t.id === id ? {...t, isCompleted: !t.isCompleted} : t))
  }

  return (
    <>
     {
        editMode ? 
        <TodoTemplate todoAction={updateTodo} key={todo.id} actionType='Update' todo={todo} /> : 
        <TodoCard todo={todo} key={todo.id} setTodos={setTodos} toggleEditMode={toggleEditMode} deleteTodo={deleteTodo} toggleTodoCompletionState={toggleTodoCompletionState} />
      }
    </>
  )
}

export default Todo