import React from "react";
import { Link } from 'react-router-dom';

const FlightDetail = ({ flight }) => {
  return (
    <div>
      <h2>Flight Detail</h2>
      <p>Origin: {flight.origin}</p>
      <p>Destination: {flight.destination}</p>
      <p>Emissions: {flight.footprint}</p>
      <p>Departure Date: {flight.date}</p>
      <p>Arrival Date: {flight.arrivalDate}</p>
      <p>{Math.round((flight.footprint * 0.7) / 21)}</p>
      <Link to="/about">
        <button>Plant a tree</button>
      </Link>
    </div>
  );
};

export default FlightDetail;
