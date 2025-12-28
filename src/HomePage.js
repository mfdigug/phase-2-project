import React from 'react'
import TaskCard from './TaskCard'

const HomePage = ({ allTodos }) => {
  return (
    <div>
    <h2>Home Page</h2>
    <h3>Today's Tasks</h3>
    {allTodos.map(todo => (
        <TaskCard key={todo.id} todo={todo} />
    ))
    }
    
    </div>
  )
}

export default HomePage