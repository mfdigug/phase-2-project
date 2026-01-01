import { useState, useEffect } from 'react'
import Header from './Header'
import HomePage from './HomePage.js'
import TodoDashboard from './TodoDashboard'
import TodoCalendar from './TodoCalendar.js'

function App() {
  const [allTodos, setAllTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/allTodos")
    .then(r => r.json())
    .then(data => {
      const parsedEvents = data.map(item => ({
        ...item,
        start: new Date(item.start),
        end: new Date(item.end)
      }));
      setAllTodos(parsedEvents)
    });
  }, [])
  

  return (
    <div>
      <Header />
      <HomePage allTodos={allTodos}/>
      <TodoDashboard allTodos={allTodos}/>
      <TodoCalendar />
    </div>
  );
}

export default App;
