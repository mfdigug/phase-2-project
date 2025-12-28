import React from 'react'

function TaskCard({ todo }){
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.category}</p>
        <ul>
            {todo.start.toLocaleString()}
            {todo.completed}
        </ul>
    </div>
  )
}

export default TaskCard