import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Header from './Header'
import HomePage from './HomePage.js'
import TodoDashboard from './TodoDashboard'
import TodoCalendar from './TodoCalendar.js'
import AddTodo from './AddTodo.js'

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
  
  function handleAddTodo(newTodo){
    const updatedTodos = [...allTodos, newTodo]
    setAllTodos(updatedTodos)
  }

  function handleCheck(id){    
     const updatedTodos = allTodos.map(todo => {
      if(todo.id === id) {
        return{...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setAllTodos(updatedTodos)
  }

  function handleDeleteTask(id){
     const updatedTodos = allTodos.filter(todo => todo.id !== id)
     setAllTodos(updatedTodos)
 }

  function handleEditTask(id){
    console.log(id)
  }

  return (
    <div className="whole-window">
      <div className="header-container">
      <Header />
      </div>
      <div className="routes-container">
      <Routes>
        
        <Route 
          path="/" 
          element={
            <HomePage 
              allTodos={allTodos}
              onHandleDeleteTask={handleDeleteTask}
              onHandleEditTask={handleEditTask}
              onHandleCheck={handleCheck}
            />
          } 
        />
        
        <Route 
          path="/tododashboard" 
          element={
            <TodoDashboard 
              allTodos={allTodos}
              onHandleDeleteTask={handleDeleteTask}
              onHandleEditTask={handleEditTask}
              onHandleCheck={handleCheck}
            />
          } 
        />
        
        <Route 
          path="/todocalendar" 
          element={
            <TodoCalendar allTodos={allTodos}/>
          } 
        />
        
        <Route 
          path="/addtodo" 
          element={
            <AddTodo 
              onHandleAddTodo={handleAddTodo}
              />
            } 
          />

      </Routes>
      </div>
    </div>
  );
}

export default App;
