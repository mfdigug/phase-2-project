import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { useState } from 'react'
import "./styles/TodoCalendar.css"

const locales = {
  "en-AU": require('date-fns/locale/en-AU')
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

function TodoCalendar({ allTodos }){

  const [view, setView] = useState('month');
  const [date, setDate] = useState(new Date())


  return (
    <div style={{height: 500, margin: "50px"}}>
      <Calendar 
        localizer={localizer}
        events={allTodos}
        startAccessor="start"
        endAccessor="end"
        views={['month', 'week', 'day']}
        view={view}
        onView={(newView) => setView(newView)}
        date={date}
        onNavigate={(date) => {
        setDate(new Date(date))
        }}
      />
    </div>
  )
}

export default TodoCalendar