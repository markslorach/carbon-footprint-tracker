import React from "react";

const FlightDetail = ({ flight }) => {
  
  return (
    <div>
      <h2>Flight Detail</h2>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Emissions: {flight.footprint}</p>
      <p>Date: {flight.date}</p>
    </div>
  );
};

export default FlightDetail;
