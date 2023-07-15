import React, { useEffect, useState } from 'react'
import SearchForm from '../components/SearchForm';
import { getFlights } from '../Services/FlightService'
import FlightList from '../components/FlightList';

const MainContainer = () => {

    const [userFlights, setUserFlights] = useState([]);
    const [origin, setOrigin] = useState('');
    const [destination, setDestination] = useState('');
    const [emissions, setEmissions] = useState(null);

    const API_KEY = "7a2256a8afcf280c53cb5763"

 function getFlightEmissions(origin, destination) {
   let URL = `https://api.goclimate.com/v1/flight_footprint?segments[0][origin]=${origin}&segments[0][destination]=${destination}&segments[1][origin]=${destination}&segments[1][destination]=${origin}&cabin_class=economy`
   fetch(URL, {method:'GET', headers: {'Authorization': 'Basic ' + btoa(API_KEY)}}).then(response => {
     response.json().then(result => {
         console.log(result);
     })
   })
 }
 
//  getFlightEmissions("ABZ","MBW")


    useEffect(() => {
      getFlights().then((allFlights) => {
        setUserFlights(allFlights);
      })
    }, []);

    const addFlight = (flight) => {
      setUserFlights([...userFlights, flight])
    };

    const removeFlight = (id) => {
      const flightsToKeep = userFlights.filter(f => f._id !== id)
      setUserFlights(flightsToKeep);
    }



  return (
    <div>
    <h1>Main Container</h1>
    <SearchForm 
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        getFlightEmissions={getFlightEmissions}
    />
    <FlightList userFlights={userFlights} removeFlight={removeFlight} />
    </div>
  )
}




export default MainContainer;