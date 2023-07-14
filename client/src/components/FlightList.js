import React from 'react'
import FlightItem from './FlightItem'

const FlightList = ({ userFlights }) => {

  const allFlights = userFlights.map((flight, index) => {
    return <FlightItem key={index} flight={flight} />
    // console.log(flight.footprint)
  });




  return (

    <div>
    <h2>FlightList</h2>
    {allFlights}
    </div>
  )

}

export default FlightList;