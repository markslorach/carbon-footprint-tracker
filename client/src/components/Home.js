import React, { useState } from "react";
import FlightSearchResult from "./FlightSearchResult";
import FlightList from "./FlightList";
import SearchForm from "./SearchForm";
import UserGraph from "./UserGraph";
import Modal from "react-modal";
import "./Home.css";
import Map2 from "./Map2";

const Home = ({
  setDate,
  date,
  origin,
  setOrigin,
  destination,
  setDestination,
  getFlightEmissions,
  emissions,
  searchSuccessful,
  addSearchedFlight,
  userFlights,
  arrivalDate,
  setArrivalDate,
}) => {
  const data = [2, 3, 4, 5];
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "500px",
            height: "500px",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
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
      
    </>
  );
};

export default Home;
