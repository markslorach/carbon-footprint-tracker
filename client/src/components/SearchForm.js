import React, { useState } from "react";
import airports from "../data/airports";

const SearchForm = ({
  setOrigin,
  setDestination,
  origin,
  destination,
  getFlightEmissions,
}) => {

  const [inputOrigin, setInputOrigin] = useState(origin);
  const [inputDestination, setInputDestination] = useState(destination);

  const handleDestinationChange = (event) => {
    setInputDestination(event.target.value);
  };

  const handleOriginChange = (event) => {
    setInputOrigin(event.target.value);
  };

  const handleSubmit = (event) => {
    
    setOrigin(inputOrigin);
    setDestination(inputDestination);
    getFlightEmissions(inputOrigin, inputDestination);
    event.preventDefault()

  };
//not working at the moment 
// const clearForm = () => {
//   document.getElementById("form").reset();

  return (
    <div>
      <h3>Search Form</h3>

      <form id = "form" onSubmit={handleSubmit}>
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
          <input type="date" />
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

        <button type="submit" name="submit" >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
