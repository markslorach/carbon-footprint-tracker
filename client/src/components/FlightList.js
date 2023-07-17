import React, { useState } from "react";
import FlightItem from "./FlightItem";
import FlightDetail from "./FlightDetail";

const FlightList = ({ userFlights, removeFlight }) => {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const viewTrip = (flight) => {
    setSelectedTrip(flight);
  };

  const allFlights = userFlights.map((flight, index) => {
    return (
      <FlightItem
        key={index}
        flight={flight}
        removeFlight={removeFlight}
        viewTrip={viewTrip}
      />
    );
  });

  return (
    <div>
      <h2>FlightList</h2>
      <p>My Trips</p>
      {allFlights}
      {selectedTrip && <FlightDetail flight={selectedTrip} />}
    </div>
  );
};

export default FlightList;