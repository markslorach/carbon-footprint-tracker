import React from 'react'
import FlightSearchResult from "./FlightSearchResult";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";
import UserGraph from "./UserGraph";






const Home = ({ setDate, date, origin, setOrigin, destination, setDestination, getFlightEmissions, emissions, searchSuccessful, addSearchedFlight, addFlight, userFlights, removeFlight}) => {

    console.log(
        {origin, setOrigin, destination, setDestination, getFlightEmissions, emissions }
    )

    const data = [2,3,4,5]


return (

<div>
<h2>Main Container</h2>
<SearchForm origin={origin}
    setOrigin={setOrigin}
    destination={destination}
    setDestination={setDestination}
    setDate={setDate}
    getFlightEmissions={getFlightEmissions}
 />

 <FlightSearchResult
    origin={origin}
    destination={destination}
    emissions={emissions}
    searchSuccessful={searchSuccessful}
    addSearchedFlight={addSearchedFlight}
    date={date}
/> 

<FlightList
    addFlight={addFlight}
    userFlights={userFlights}
    removeFlight={removeFlight}
/> 

<UserGraph data={data} userFlights={userFlights}/>


</div> 

)
}

export default Home;