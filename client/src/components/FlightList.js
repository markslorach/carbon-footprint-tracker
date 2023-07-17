import React from "react";
import FlightItem from "./FlightItem";

const FlightList = ({ userFlights, removeFlight }) => {
    
  const allFlights = userFlights.map((flight, index) => {
    return (
      <FlightItem key={index} flight={flight} removeFlight={removeFlight} />
    );
  });

  return (
    <div>
      <h2>FlightList</h2>
      <p>My Trips</p>
      {allFlights}
    </div>
  );
};

export default FlightList;
 