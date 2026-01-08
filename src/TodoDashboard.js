import "./styles/TodoDashboard.css";
import TaskCard from "./TaskCard";
import { useState } from "react";

function TodoDashboard({
  allTodos,
  onHandleDeleteTask,
  onHandleEditTask,
  onHandleCheck,
}) {
  const [filter, setFilter] = useState("All");

  function displayTodos() {
    if (filter === "All") {
      return allTodos;
    } else {
      return allTodos.filter((todo) => todo.category === filter);
    }
  }

  function handleCategoryFilterSelection(e) {
    e.preventDefault();
    setFilter(e.target.value);
  }

  return (
    <div className="todo-dashboard">
      <h3>Task Dashboard</h3>

      <label htmlFor="category">Choose a category:</label>
      <select
        id="category"
        value={filter}
        onChange={(e) => handleCategoryFilterSelection(e)}
      >
        <option value="All">All</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="finance">Finance</option>
        <option value="social">Social</option>
      </select>

      {/* add filter and/or sort buttons here */}

      {displayTodos().map((todo) => (
        <TaskCard
          key={todo.id}
          todo={todo}
          onHandleDeleteTask={onHandleDeleteTask}
          onHandleEditTask={onHandleEditTask}
          onHandleCheck={onHandleCheck}
        />
      ))}
    </div>
  );
}

export default TodoDashboard;
