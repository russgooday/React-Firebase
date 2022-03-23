import { useState } from 'react'
import DelayedInput from "./DelayedInput"

import './css/NewEventForm.css'

export default function NewEventForm({addMarioEvent}) {

    const initialInput = ''
    const [title, setTitle] = useState(initialInput)
    const [date, setDate] = useState(initialInput)

    const handleDate = (event) => {
        setDate(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        addMarioEvent({title, date})
    }

    return (
        <form className='new-event-form' onSubmit={handleSubmit}>
            <DelayedInput
                label='Event Title:'
                initialValue={initialInput}
                id='new-event-title'
                name='title'
                inputDelay={500}
                setInput={setTitle}
            />
            <label htmlFor='new-event-date'>Event Date:
                <input
                    type='date'
                    id='new-event-date'
                    name='date'
                    value={date}
                    onChange={handleDate}
                />
            </label>
            <button>Submit</button>
            <p>Title: {title}, Date: {date}</p>
        </form>
    )
}