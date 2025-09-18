import { useEffect, useState } from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

// Import Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// Import Config
import config from './config';
const { appName } = config;


const App = () => {
  const [todos, setTodos] = useState([])
  const [displayTodoTemplate, setDisplayTodoTemplate] = useState(false)

  useEffect(() => {
    // Set Dummy Todos, TODO:: Fetch from API
    
    const initTodoList = [
      {
        id: 1,
        title: 'Todo 1',
        text: 'Learn React',
        isCompleted: false,
      },
      {
        id: 2,
        title: 'Todo 2',
        text: 'Learn Vue',
        isCompleted: true,
      },
      {
        id: 3,
        title: 'Todo 3',
        text: 'Learn Angular',
        isCompleted: false,
      },
      {
        id: 4,
        title: 'Todo 4',
        text: 'Learn Svelte',
        isCompleted: true,
      },
      {
        id: 5,
        title: 'Todo 4',
        text: 'Learn Node',
        isCompleted: false,
      },
      {
        id: 6,
        title: 'Todo 100',
        text: 'Learn Express',
        isCompleted: false,
      },
      {
        id: 7,
        title: 'Todo 11',
        text: 'Learn MongoDB',
        isCompleted: false,
      },
    ]

    if(initTodoList.length > 0) setTodos(initTodoList)
  }, [])

  return (
    <>
      <div className="wrapper flex flex-col flex-1 min-h-[100vh]" style={{}}>
        <Header appName={appName} displayTodoTemplate={displayTodoTemplate} setDisplayTodoTemplate={setDisplayTodoTemplate} />
        <Main todos={todos} setTodos={setTodos} displayTodoTemplate={displayTodoTemplate} setDisplayTodoTemplate={setDisplayTodoTemplate} />
        <Footer />
      </div>
    </>
  )
}

export default App