import './App.css';
import Header from './Header'
import Home from './Home.js'
import TodoDashboard from './TodoDashboard'
import TodoCalendar from './TodoCalendar.js'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <TodoDashboard />
      <TodoCalendar />
    </div>
  );
}

export default App;
