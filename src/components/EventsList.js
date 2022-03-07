import React from "react"

export default function EventsList({handleClick, events}) {
    return (
        <div className='marioEvents'>
          {
            events.map(({title, id}, index) => (
              <React.Fragment key={id}>
                <h2>{index} - {title}
                <span><button className='deleteButton' onClick={() => handleClick(id)}>&#10005;</button></span>
                </h2>
              </React.Fragment>
            ))
          }
        </div>
    )
}