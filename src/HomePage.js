import React from 'react'
import TaskCard from './TaskCard'

const HomePage = ({ allTodos }) => {

    const day = new Date();
    const today = day.toDateString()
    const doToday = allTodos.filter(todo => {return today === todo.start.toDateString()})
    const todaysTasks = doToday.map(todo => <li key={todo.id}>{todo.title}</li>)
    // alternative display option const todaysTasks = doToday.map(todo => <TaskCard key={todo.id} todo={todo} />)


  return (
    <div>
      <h2>Home Page</h2>
        <h3>Today's Tasks</h3>
          <ul>
            {todaysTasks}
        </ul>
    </div>
  )
}

export default HomePage