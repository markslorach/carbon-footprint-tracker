import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import { getFlights, postFlight } from "../Services/FlightService";
import FlightList from "../components/FlightList";
import FlightSearchResult from "../components/FlightSearchResult";


const MainContainer = () => {
  const [userFlights, setUserFlights] = useState([]);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [emissions, setEmissions] = useState(null);
  const [date, setDate] = useState("");
  const [searchSuccessful, setSearchSuccessful] = useState(false);

  const API_KEY = "7a2256a8afcf280c53cb5763";

  function getFlightEmissions(origin, destination) {
    let URL = `https://api.goclimate.com/v1/flight_footprint?segments[0][origin]=${origin}&segments[0][destination]=${destination}&segments[1][origin]=${destination}&segments[1][destination]=${origin}&cabin_class=economy`;
    fetch(URL, {
      method: "GET",
      headers: { Authorization: "Basic " + btoa(API_KEY) },
    }).then((response) => {
      response.json().then((result) => {
        console.log(result);
        setEmissions(result.footprint);
        setSearchSuccessful(true);
      });
    });
  }

  const addSearchedFlight = () => {
    const newFlight = {
      origin: origin,
      destination: destination,
      footprint: emissions,
      date: date
    };
    postFlight(newFlight).then(addFlight(newFlight)) 
  };
  

  useEffect(() => {
    getFlights().then((allFlights) => {
      setUserFlights(allFlights);
    });
  }, []);

  const addFlight = (flight) => {
    setUserFlights([...userFlights, flight]);
  };

  const removeFlight = (id) => {
    const flightsToKeep = userFlights.filter((f) => f._id !== id);
    setUserFlights(flightsToKeep);
  };

  return (
    <div>
      <h2>Main Container</h2>
      <SearchForm
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        getFlightEmissions={getFlightEmissions}
        emissions={emissions}
        setDate={setDate}
      />
      <FlightSearchResult
        origin={origin}
        destination={destination}
        emissions={emissions}
        date={date}
        searchSuccessful={searchSuccessful}
        addSearchedFlight={addSearchedFlight}
      />

      <FlightList
        addFlight={addFlight}
        userFlights={userFlights}
        removeFlight={removeFlight}
      />
    </div>
  );
};

export default MainContainer;
