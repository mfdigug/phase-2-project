import React from 'react'

function TaskCard({ todo }){
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.category}</p>
        <ul>
            <li>{todo.start.toLocaleString()}</li>
            {/* {todo.completed} create checkbox */}
        </ul>
    </div>
  )
}

export default TaskCard