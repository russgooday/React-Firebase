import { useState, useEffect, useCallback } from 'react'
import './TripList.css'

const tripsEndPoint = 'http://localhost:3001/trips'

export default function TripList () {
    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState(tripsEndPoint)

    const fetchTrips = useCallback(async (url) => {
        const response = await fetch(url)
        const trips = await response.json()
        setTrips(trips)
    }, [])

    useEffect(() => { fetchTrips(url) }, [url, fetchTrips])

    return (
        <div className='trip-list'>
            <h2>Trip List</h2>
            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>
                ))}
            </ul>
            <div className='filters'>
                <button onClick={() => setUrl(`${tripsEndPoint}?loc=europe`)}>
                    European Trips
                </button>
                <button onClick={() => setUrl(tripsEndPoint)}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
