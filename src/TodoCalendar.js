import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from "date-fns/format"
import parse from "date-fns/parse"
import startOfWeek from "date-fns/startOfWeek"
import getDay from "date-fns/getDay"
import "react-big-calendar/lib/css/react-big-calendar.css"
import DatePicker from "react-date-picker"

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
  return (
    <div>
      <Calendar 
        localizer={localizer}
        events={allTodos}
        startAccessor="start"
        endAccessor="end"
        style={{height: 500, margin: "50px"}}
      />
    </div>
  )
}

export default TodoCalendar