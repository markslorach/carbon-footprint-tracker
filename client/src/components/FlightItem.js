import React from 'react'
import { deleteFlight } from '../Services/FlightService';


const FlightItem = ({ flight, removeFlight }) => {

    const handleDelete = () => {
      deleteFlight(flight._id).then(() => {
        removeFlight(flight._id)
      })
    }

   
  return (

    <div>
    <h2>Flight Deets</h2>
    <p>{flight.footprint}</p>
    <button onClick={handleDelete}>Delete Trip</button>
    </div>
  )
};

export default FlightItem;