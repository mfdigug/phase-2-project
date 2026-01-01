import { useState } from 'react'
import { format, parseISO } from 'date-fns'


function AddTodo({ onHandleAddTodo }){
  
  const [newTodo, setNewTodo] = useState({
      title: "",
      category: "home",
      start: "",
      end: "",
      allDay: false,
      completed: false
  })

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
    console.log(formattedTodo) 
  }

  function handleChange(e) {
    const key = e.target.id
    const value = e.target.value

    setNewTodo({
      ...newTodo,
      [key]: value
    })
  }
  console.log(newTodo)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>New Todo</h2>
        <label htmlFor="title">Description:</label>
        <input
          type="text"
          id="title"
          value={newTodo.title}
          onChange={handleChange}
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


        

        <button type="submit">Add todo</button>
      </form>
    </div>
  )
}

export default AddTodo