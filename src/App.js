import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
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
  
  function handleDeleteTask(id){
     const updatedTodos = allTodos.filter(todo => todo.id !== id)
     setAllTodos(updatedTodos)
 }

  function handleEditTask(id){
    console.log(id)
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage allTodos={allTodos}/>} />
        <Route path="/tododashboard" element={<TodoDashboard allTodos={allTodos} onHandleDeleteTask={handleDeleteTask} onHandleEditTask={handleEditTask}/>} />
        <Route path="/todocalendar" element={<TodoCalendar />} />
      </Routes>
    </div>
  );
}

export default App;
