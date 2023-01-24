import { Calendar, Views, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import React, { useState, useMemo } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import Sidebar from './Sidebar';
import './calender.css'

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
// or globalizeLocalizer
const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 0),
    end: new Date(2021, 6, 0),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
];


export function MyCalendar({
  dayLayoutAlgorithm = 'no-overlap',

}) {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [myEvents, setAllEvents] = useState(events);
  const slotInfo = {
    start: Date,
    end: Date,
    slots: (Array),
    action: Date,
  };
  // function handleAddEvent() {

  //     for (let i=0; i<allEvents.length; i++){

  //         const d1 = new Date (allEvents[i].start);
  //         const d2 = new Date(newEvent.start);
  //         const d3 = new Date(allEvents[i].end);
  //         const d4 = new Date(newEvent.end);
  //   /*
  //       console.log(d1 <= d2);
  //       console.log(d2 <= d3);
  //       console.log(d1 <= d4);
  //       console.log(d4 <= d3);
  //         */

  //          if (
  //           ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
  //             (d4 <= d3) )
  //           )
  //         {   
  //             alert("CLASH"); 
  //             break;
  //          }

  //     }

  const [data, setData] = useState();
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = (slot) => {
    setSidebar((prevState) => !prevState)
    var x = document.getElementById("sidebar");
    if (x.style.display === "none") {
      x.style.display = "block";

    }
    else {
      x.style.display = "none";
    }
    console.log(slot);
    setData(slotInfo);
  }
  // const handleSelectSlot = useCallback(
  //   ({ start, end }) => {
  //     const title = window.prompt('New Event Name')

  //     if (title) {
  //       setAllEvents((prev) => [...prev, { start, end, title }])
  //     }
  //   },
  //   [setAllEvents],
  //   console.log()
  // )
  // const handleSelectEvent = useCallback(
  //   (events) => window.alert('New Event'),
  //   []
  // )


  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2015, 1, 12),

    }),
    []
  )


  return (
    <div className="App">
    
      <div className="side_bar" id="sidebar">
        <Sidebar  />

      </div>


      {/* <div> */}
      {/* <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} /> */}
      {/* <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} /> */}
      {/* { <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
      {/* { <but style={{ marginTop: "10px" }} onClick={handleAddEvent}> */}
      {/* Add Event
                </but
              ton> */
      }

      {/* </div> */}

      <div className='calender' >
        <div className="calender_img"><img src="https://th.bing.com/th/id/OIP.F0kTZuZx-T-DDdKBJywFHAHaHP?pid=ImgDet&rs=1" style={{
          height: "50px ",
          margin: "20px", width: "50px"
        }} /></div>
        < div className='calender_text'><h1>Calendar</h1></div>

        <Calendar dayLayoutAlgorithm={dayLayoutAlgorithm}
          // defaultDate={defaultDate}
          defaultView={Views.WEEK}
          events={myEvents}
          localizer={localizer}
          // onSelectEvent={handleSelectEvent}
          onSelectSlot={(selectedSlot) => { toggleSidebar(selectedSlot.slots) }}
          selectable={true}
          startAccessor="start" endAccessor="end" style={{ height: "100%", margin: "50px", border: "0.5px solid black" }} />
      </div>

    </div>
  );
  // Rendering.propTypes = {
  //   localizer: PropTypes.instanceOf(dateFnsLocalizer),
  // }

}



export default MyCalendar;