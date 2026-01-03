import './styles/HomePage.css'
// import TaskCard from './TaskCard'

function HomePage({ allTodos }) {

    const day = new Date();
    const today = day.toDateString()

    const doToday = allTodos.filter(todo => todo.start.toDateString() === today)    
    const todaysTasks = doToday.map(todo => <li key={todo.id}>{todo.title}</li>)
    // alternative display option const todaysTasks = doToday.map(todo => <TaskCard key={todo.id} todo={todo} />)
    

  return (
    <div className="home-page">
      <h2>Home Page</h2>
        <h3>Today's Tasks</h3>
          <ul>
            {todaysTasks}
        </ul>
    </div>
  )
}

export default HomePage