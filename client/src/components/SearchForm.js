import React from 'react'


const SearchForm = ({setOrigin, setDestination, origin, destination, getFlightEmissions}) => {

  const airports = [
    { code: 'ABZ', name: 'Aberdeen Airport' },
    { code: 'GLA', name: 'Glasgow Internation Airport' },
  ];

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  }

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    getFlightEmissions(origin, destination);
  }



return (
  <div>
  <h3>Search Form</h3>

  <form onSubmit={handleSubmit} >
  <label>Origin: 
  <input type='text' onChange={handleOriginChange} value={origin}/>
  </label>

  <label>Destination: 
  <input type='text' onChange={handleDestinationChange} value={destination}/>
  </label>

  {/* <datalist id='airportList'>
    {airports.map(() => {
      <option key={airports.code} value={airports.code} />
    })}
  </datalist> */}

 <button type='submit' name='submit'>Search</button>


  </form>
  </div>


)
};

export default SearchForm;