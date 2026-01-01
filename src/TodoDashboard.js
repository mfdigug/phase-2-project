import React from 'react'
import TaskCard from './TaskCard'

function TodoDashboard({ allTodos }){
  return (
    <div>
        <h2>Task Dashboard</h2>
        {allTodos.map(todo => (
        <TaskCard key={todo.id} todo={todo} />
    ))
    }
    </div>
  )
}

export default TodoDashboard