// Here we are importing a styles module
// I have destructured the styles.card class
import {card} from './css/EventList.module.css'

// When rendered will output a unique className e.g. '.card' -> 'EventList_card__3GWGf'
// This prevents conflicts with other classes of the same name e.g. .card
export default function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event, index) => (
        <div key={event.id} className={card}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}
