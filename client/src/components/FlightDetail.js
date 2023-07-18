import React from "react";

const FlightDetail = ({ flight }) => {
  return (
    <div>
      <h2>Flight Detail</h2>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Emissions: {flight.footprint}</p>
      <p>Departure Date: {flight.date}</p>
      <p>Arrival Date: {flight.arrivalDate}</p>
      <button>Plant a tree</button>
    </div>
  );
};

export default FlightDetail;
