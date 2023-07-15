import React, { useState } from 'react'
import { postFlight } from '../Services/FlightService';


const SearchForm = ({setOrigin, setDestination, origin, destination, getFlightEmissions, addFlight}) => {

  const [formData, setFormData] = useState({
    origin: "",
    destination: "" 

  })
  const airports = [
    { code: 'ABZ', name: 'Aberdeen Airport' },
    { code: 'GLA', name: 'Glasgow International Airport' },
  ];


// THIS BIT DOESNT WORK FYI
  // const onChange = (event) => {
  //   const newFormData = Object.assign({}, formData);
  //   newFormData[event.target.name] = event.target.value;
  //   setFormData(newFormData)
  //   setOrigin(event.target.value);
    
  // }

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  }

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    getFlightEmissions(origin, destination)
    // postFlight(event).then((data) => {
    //   addFlight(data)
    // })

  }



return (
  <div>
  <h3>Search Form</h3>

  <form onSubmit={handleSubmit} >
  <label>Origin:
  <input
    type="text"
    onChange={handleOriginChange}
    value={origin}
    list="origin"
  />
  <datalist id="origin">
    {airports.map(airport => (
      <option key={airport.code} value={airport.code}>
        {airport.name}
      </option>
    ))}
  </datalist>
</label>

<label>Destination:
  <input
    type="text"
    onChange={handleDestinationChange}
    value={destination}
    list="destination"
  />
  <datalist id="destination">
    {airports.map(airport => (
      <option key={airport.code} value={airport.code}>
        {airport.name}
      </option>
    ))}
  </datalist>
</label>

 <button type='submit' name='submit'>Search</button>


  </form>
  </div>


)
};

export default SearchForm;