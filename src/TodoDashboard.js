import React from 'react'
import TaskCard from './TaskCard'

function TodoDashboard({ allTodos, onHandleDeleteTask, onHandleEditTask }){
  return (
    <div>
        <h2>Task Dashboard</h2>
        {allTodos.map(todo => (
        <TaskCard key={todo.id} todo={todo} onHandleDeleteTask={onHandleDeleteTask} onHandleEditTask={onHandleEditTask} />
    ))
    }
    </div>
  )
}

export default TodoDashboard