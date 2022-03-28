import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import './TripList.css'

const tripsEndPoint = 'http://localhost:3001/trips'

export default function TripList () {
    const [url, setUrl] = useState(tripsEndPoint)
    const { data, pending } = useFetch(url)
    const trips = data || []

    return (
        <div className='trip-list'>
            <h2>Trip List</h2>
            <ul>
                {
                    pending
                        ? <span>Loading...</span>
                        : trips.map(
                            trip => (
                                <li key={trip.id}>
                                    <h3>{trip.title}</h3>
                                    <p>{trip.price}</p>
                                </li>
                            )
                        )
                }
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
