import React from 'react'

const Header = ({ appName, displayTodoTemplate, setDisplayTodoTemplate }) => {

  return (
    <div className='flex flex-start justify-between p-2' style={{}}>
        <span className='text-3xl font-bold'>{appName}</span>
        <div>
            {/* <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setModalOpen(true)}>Add Todo</button> */}
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setDisplayTodoTemplate(!displayTodoTemplate)}>{displayTodoTemplate ? "Cancel Todo" : "Add Todo"}</button>
        </div>
    </div>
  )
}

export default Header