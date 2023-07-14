import React from 'react'


const FlightItem = ({ flight }) => {
   
  return (

    <div>
    <h2>Flight Deets</h2>
    <p>{flight.footprint}</p>
    </div>
  )
};

export default FlightItem;