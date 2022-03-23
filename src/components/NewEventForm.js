import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './css/NewEventForm.css'

const initialFormState = {
  title: '',
  date: '',
  location: 'London'
}

export default function NewEventForm({ addMarioEvent }) {
  const [ formProp, setFormProp ] = useState(initialFormState)
  const { title, date, location } = formProp

  const handleSubmit = (event) => {
    event.preventDefault()
    const marioEvent = {
      title,
      date,
      location,
      id: uuidv4()
    }

    addMarioEvent(marioEvent)
    event.currentTarget.reset()
  }

  const handleChange = (event) => {
    const {name, value} = event.target
    setFormProp({...formProp, [name]: value})
  }

  return (
    <form className='new-event-form' onSubmit={handleSubmit}>
      <label htmlFor='event-title-id'>
        Event Title:
        <input
          id='event-title-id'
          type='text'
          name='title'
          onChange={handleChange}
          value={title}
          required
        />
      </label>
      <label htmlFor='event-date-id'>
        Event Date:
        <input
          id='event-date-id'
          type='date'
          name='date'
          onChange={handleChange}
          value={date}
          required
        />
      </label>
      <label htmlFor='event-date-location'>
        Event Date:
        <select
          id='event-date-location'
          type='select'
          name='location'
          onChange={handleChange}
          value={location}
          defaultValue={initialFormState.location}
          required
        >
          <option>London</option>
          <option>Manchester</option>
          <option>Cardiff</option>
        </select>
      </label>
      <button type='submit'>Submit</button>
    </form>
  )
}