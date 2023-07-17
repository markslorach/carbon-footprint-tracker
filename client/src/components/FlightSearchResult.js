import React from "react";

const FlightSearchResult = ({
  origin,
  destination,
  emissions,
  date,
  searchSuccessful,
  addSearchedFlight
}) => {

  return (
    <div>
      <p>{origin}</p>
      <p>{destination}</p>
      <p>{emissions}</p>
      <p>{date}</p>
      {searchSuccessful && <button onClick={addSearchedFlight}>Add to My Trips</button>}
    </div>
  );
};

export default FlightSearchResult;
