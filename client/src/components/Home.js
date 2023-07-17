import React from 'react'
import FlightSearchResult from "./FlightSearchResult";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";






const Home = ({origin, setOrigin, destination, setDestination, getFlightEmissions, emissions, searchSuccessful, addSearchedFlight, addFlight, userFlights, removeFlight}) => {

    console.log(
        {origin, setOrigin, destination, setDestination, getFlightEmissions, emissions }
    )


return (

<div>
<h2>Main Container</h2>
<SearchForm origin={origin}
    setOrigin={setOrigin}
    destination={destination}
    setDestination={setDestination}
    getFlightEmissions={getFlightEmissions}
 />

 <FlightSearchResult
    origin={origin}
    destination={destination}
    emissions={emissions}
    searchSuccessful={searchSuccessful}
    addSearchedFlight={addSearchedFlight}
/> 

<FlightList
    addFlight={addFlight}
    userFlights={userFlights}
    removeFlight={removeFlight}
/> 

</div> 

)
}

export default Home;