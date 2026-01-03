import './styles/TodoDashboard.css'
import TaskCard from './TaskCard'

function TodoDashboard({ allTodos, onHandleDeleteTask, onHandleEditTask, onHandleCheck }){
  return (
    <div className="todo-dashboard">
        <h3>Task Dashboard</h3>

      {/* add filter and/or sort buttons here */}

        {allTodos.map(todo => (
          <TaskCard 
            key={todo.id} 
            todo={todo} 
            onHandleDeleteTask={onHandleDeleteTask} 
            onHandleEditTask={onHandleEditTask} 
            onHandleCheck={onHandleCheck} 
          />
        ))}
    </div>
  )
}

export default TodoDashboard