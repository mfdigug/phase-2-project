import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/AddTodo.css'



function AddTodo({ onHandleAddTodo }){

  const navigate = useNavigate();

  const [newTodo, setNewTodo] = useState({
      title: "",
      category: "home",
      start: "",
      end: "",
      allDay: false,
      completed: false
  })

  function handleChange(e) {
    const key = e.target.id
    const value = e.target.value

    setNewTodo({
      ...newTodo,
      [key]: value
    })
  }

  function toUtcISOString(localDateTime) {
   if (!localDateTime) return ""
   return new Date(localDateTime).toISOString()
  }

  function handleSubmit(e){
    e.preventDefault();

    const formattedTodo = {
    ...newTodo,
      start: toUtcISOString(newTodo.start),
      end: toUtcISOString(newTodo.end)
    }

    fetch(`http://localhost:3000/allTodos`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(formattedTodo)
     })
     .then(r => r.json())
     .then(newTodoObj => onHandleAddTodo(newTodoObj))
     //see if dashboard can reload immediately to fix time format?
     navigate('/tododashboard')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <h3>New Todo</h3>
        
        <label htmlFor="title">Description:</label>
        <input
          type="text"
          id="title"
          value={newTodo.title}
          onChange={handleChange}
          placeholder='Add your todo item here...'
        />
        <br />
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={newTodo.category}
          onChange={handleChange}
        >
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="finance">Finance</option>
          <option value="social">Social</option>
        </select>
        <br />
        <label htmlFor="start">Start:</label>
        <input
          type="datetime-local"
          id="start"
          value={newTodo.start}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="end">End:</label>
        <input
          type="datetime-local"
          id="end"
          value={newTodo.end}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add todo</button>
      </form>
    </div>
  )
}

export default AddTodo