// Here we are importing a styles module
// I have destructured the styles.card class
import {card} from './css/EventList.module.css'

// When rendered will output a unique className e.g. '.card' -> 'EventList_card__3GWGf'
// This prevents conflicts with other classes of the same name e.g. .card
export default function EventList({ marioEvents, deleteMarioEvent }) {
  return (
    <div>
      {marioEvents.map(({id, title, location, date}, index) => (
        <div key={id} className={card}>
          <h2>{index} - {title}</h2>
          <p>{location}: {date}</p>
          <button onClick={() => deleteMarioEvent(id)}>delete event</button>
        </div>
      ))}
    </div>
  )
}
