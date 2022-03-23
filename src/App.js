import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [marioEvents, setMarioEvents] = useState([])

  const addMarioEvent = (marioEvent) => {
    setMarioEvents((prevEvents) => ([...prevEvents, marioEvent]))
    handleClose()
  }

  const deleteMarioEvent = (id) => {
    setMarioEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Marioland Events" subtitle={subtitle} />
      <div>
        <button onClick={() => setShowEvents(!showEvents)}>{showEvents? 'Hide' : 'Show'} Events</button>
      </div>
      { showEvents ? <EventList marioEvents={marioEvents} deleteMarioEvent={deleteMarioEvent} /> : null }

      { showModal
          ? (
            <Modal
              handleClose={handleClose}
              isSalesModal={false}
            >
              <NewEventForm
                addMarioEvent={addMarioEvent}
              />
            </Modal>
          )
          : null
      }

      <div>
        <button onClick={() => setShowModal(true)}>Add New Events</button>
      </div>
    </div>
  );
}

export default App;
