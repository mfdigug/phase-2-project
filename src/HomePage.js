import './styles/HomePage.css'
import TaskCard from './TaskCard'

function HomePage({  allTodos, onHandleDeleteTask, onHandleEditTask, onHandleCheck }) {

    const day = new Date();
    const today = day.toDateString()

    const doToday = allTodos.filter(todo => todo.start.toDateString() === today)    
    const todaysTasks = doToday.map(todo => 
      <TaskCard 
        key={todo.id} 
        todo={todo} 
        onHandleDeleteTask={onHandleDeleteTask} 
        onHandleEditTask={onHandleEditTask} 
        onHandleCheck={onHandleCheck} 
      />
    );
    

  return (
    <div className="home-page">
        <h3>Today's Tasks</h3>
        {todaysTasks}
    </div>
  )
}

export default HomePage