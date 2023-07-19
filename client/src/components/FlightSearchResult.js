import React from "react";

const FlightSearchResult = ({
  origin,
  destination,
  emissions,
  date,
  searchSuccessful,
  addSearchedFlight,
  arrivalDate,
  closeModal
}) => {

  return (
    <div>
      <p>{origin}</p>
      <p>{destination}</p>
      <p>{emissions}</p>
      <p>{date}</p>
      <p>{arrivalDate}</p>
      {searchSuccessful && (
        <button
          onClick={() => {
            addSearchedFlight();
            closeModal();
          }}
        >
          Add to My Trips
        </button>
      )}
    </div>
  );
};

export default FlightSearchResult;
