import React, { useState } from 'react';
import FlightSearchResult from "./FlightSearchResult";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";
import UserGraph from "./UserGraph";
import Modal from 'react-modal';

const Home = ({ setDate, date, origin, setOrigin, destination, setDestination, getFlightEmissions, emissions, searchSuccessful, addSearchedFlight, userFlights, arrivalDate, setArrivalDate }) => {
  const data = [2,3,4,5];
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal(){
    setIsOpen(false);
  }

  return (
    <div>
      <h2>Main Container</h2>
      <SearchForm
        origin={origin}
        setOrigin={setOrigin}
        destination={destination}
        setDestination={setDestination}
        setDate={setDate}
        getFlightEmissions={getFlightEmissions}
        openModal={openModal}
        arrivalDate={arrivalDate}
        setArrivalDate={setArrivalDate}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal}>close</button>
        <FlightSearchResult
          origin={origin}
          destination={destination}
          emissions={emissions}
          searchSuccessful={searchSuccessful}
          addSearchedFlight={addSearchedFlight}
          date={date}
          arrivalDate={arrivalDate}
        />
      </Modal>

      
    </div>
  );
}

export default Home;
