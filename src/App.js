import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import EventsList from './components/EventsList'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
      {title: "Mario's Birthday Bash", id: 1},
      {title: "Bowser's Live Stream", id: 2},
      {title: "Race on Moo Moo Farm", id: 3}
  ])

  // Handlers
  const handleClick = (id) => {
      setEvents(prevEvents => prevEvents.filter(event => id !== event.id))
  }

  const handleClose = () => {
      setShowModal(false)
  }

  // Props
  const titleProps = {
      title: 'Marioland Events',
      subtitle: 'All the Latest Events in Marioland'
  }

  const eventsProps = {
      handleClick,
      events
  }

  const modalProps = {
      handleClose,
      showModal
  }

  // JSX
  return (
    <div className='App'>
      <Title {...titleProps} />
      <div className='eventsButtonWrapper'>
        <button onClick={() => setShowEvents(!showEvents)}>{showEvents ? 'HIDE' : 'SHOW'} EVENTS</button>
      </div>
      {
        (showEvents)
          ? <EventsList {...eventsProps} />
          : null
      }
      <Modal {...modalProps}>
        <h2>Terms and Conditions</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit iure deleniti sunt labore maiores ipsam consequatur voluptatum asperiores ducimus nulla.</p>
      </Modal>
      <div className='modalButtonWrapper'>
        <button onClick={() => setShowModal(true)}>SHOW MODAL</button>
      </div>
    </div>
  )
}

export default App;
