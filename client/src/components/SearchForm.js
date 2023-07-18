import React, { useState } from "react";
import airports from "../data/airports";

const SearchForm = ({
  setOrigin,
  setDestination,
  origin,
  destination,
  date,
  getFlightEmissions,
  setDate,
  openModal,
  arrivalDate,
  setArrivalDate,
}) => {
  const [inputOrigin, setInputOrigin] = useState(origin);
  const [inputDestination, setInputDestination] = useState(destination);
  const [inputDate, setInputDate] = useState(date);
  const [inputArrivalDate, setInputArrivalDate] = useState(arrivalDate);

  const handleDestinationChange = (event) => {
    setInputDestination(event.target.value);
  };

  const handleOriginChange = (event) => {
    setInputOrigin(event.target.value);
  };

  const handleDateChange = (event) => {
    setInputDate(event.target.value);
  };

  const handleArrivalDateChange = (event) => {
    setInputArrivalDate(event.target.value);
  };

  const handleSubmit = (event) => {
    setOrigin(inputOrigin);
    setDestination(inputDestination);
    setDate(inputDate);
    setArrivalDate(inputArrivalDate);
    getFlightEmissions(inputOrigin, inputDestination);
    event.preventDefault();
    openModal();
    setInputOrigin("");
    setInputDestination("");
    setInputDate("");
    setInputArrivalDate("");
  };

  return (
    <div>
      <h3>Search Form</h3>
      <form id="form" onSubmit={handleSubmit}>
        <label>
          Origin:
          <input
            type="text"
            onChange={handleOriginChange}
            value={inputOrigin}
            list="origin"
          />
          <datalist id="origin">
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.name}
              </option>
            ))}
          </datalist>
        </label>
        <label>
          Departure Date:
          <input type="date" onChange={handleDateChange} value={inputDate} />
        </label>
        <label>
          Destination:
          <input
            type="text"
            onChange={handleDestinationChange}
            value={inputDestination}
            list="destination"
          />
          <datalist id="destination">
            {airports.map((airport) => (
              <option key={airport.code} value={airport.code}>
                {airport.name}
              </option>
            ))}
          </datalist>
        </label>
        <label>
          Arrival Date:
          <input
            type="date"
            onChange={handleArrivalDateChange}
            value={inputArrivalDate}
          />
        </label>
        <button type="submit" name="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
