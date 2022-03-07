import './App.css'
import { useState } from 'react'

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: "race on moo moo farm", id: 3}
  ])

  console.log(showEvents)

  const handleClick = (id) => {
    setEvents(prevEvents => prevEvents.filter(event => id !== event.id))
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setShowEvents(!showEvents)}>{showEvents ? 'Hide' : 'Show'} Events</button>
      </div>
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  );
}

export default App;
