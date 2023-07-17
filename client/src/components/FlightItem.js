import React from "react";
import { deleteFlight } from "../Services/FlightService";
import MainContainer from "../containers/MainContainer";

const FlightItem = ({ flight, removeFlight}) => {
  // console.log(flight.footprint)
    
  const handleDelete = () => {
    deleteFlight(flight._id).then(() => {
      removeFlight(flight._id);
    
    });
  };

//   const treesNeeded = () => {
//     // let flightFootprint = flight.footprint
//     // var footprint = flightFootprint;
//     const treesPerKg = 1 
    

//     // var treesNeeded = treesNeeded(footprint);
//   console.log(flight.footprint)
//     return treesNeeded = treesPerKg * flight.footprint;
  
// }
  
  


  return (
    <div>
      <h2>Flight Deets</h2>
      <p>{flight.origin}</p>
      <p>{flight.destination}</p>
      <p>{flight.footprint}</p>
      <p>{flight.date}</p>
      <p>{flight.footprint * 0.7 / 21}</p>
      
      <button onClick={handleDelete}>Delete Trip</button>
      <button>View Trip</button>
    </div>
  );
};

export default FlightItem;
