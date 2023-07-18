import React from "react";
import { deleteFlight } from "../Services/FlightService";
import MainContainer from "../containers/MainContainer";

const FlightItem = ({ flight, removeFlight, viewTrip }) => {
    
  const handleDelete = () => {
    deleteFlight(flight._id).then(() => {
      removeFlight(flight._id);
    
    });
  };

  const handleViewTrip = () => {
    viewTrip(flight);
  }

  return (
    <div>
      <h2>Flight Deets</h2>
      <p>{flight.origin}</p>
      <p>{flight.destination}</p>
      <p>{flight.footprint}</p>
      <p>{flight.date}</p>
      <p>{flight.footprint * 0.7 / 21}</p>
      
      <button onClick={handleDelete}>Delete Trip</button>
      <button onClick={handleViewTrip}>View Trip</button>
    </div>
  );
};

export default FlightItem;
