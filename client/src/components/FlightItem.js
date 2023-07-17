import React from "react";
import { deleteFlight } from "../Services/FlightService";
import MainContainer from "../containers/MainContainer";

<<<<<<< HEAD
const FlightItem = ({ flight, removeFlight}) => {
  // console.log(flight.footprint)
=======
const FlightItem = ({ flight, removeFlight, viewTrip }) => {
>>>>>>> main
    
  const handleDelete = () => {
    deleteFlight(flight._id).then(() => {
      removeFlight(flight._id);
    
    });
  };

<<<<<<< HEAD
//   const treesNeeded = () => {
//     // let flightFootprint = flight.footprint
//     // var footprint = flightFootprint;
//     const treesPerKg = 1 
    

//     // var treesNeeded = treesNeeded(footprint);
//   console.log(flight.footprint)
//     return treesNeeded = treesPerKg * flight.footprint;
  
// }
  
  

=======
  const handleViewTrip = () => {
    viewTrip(flight);
  }
>>>>>>> main

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
