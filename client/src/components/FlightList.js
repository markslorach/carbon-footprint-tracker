import React, { useState } from "react";
import FlightItem from "./FlightItem";
import FlightDetail from "./FlightDetail";
import Modal from "react-modal";
import UserGraph from "./UserGraph";

const FlightList = ({ userFlights, removeFlight, data }) => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const viewTrip = (flight) => {
    setSelectedTrip(flight);
    setIsOpen(true);
  };

  function closeModal(){
    setIsOpen(false);
  }

  const allFlights = userFlights.map((flight, index) => {
    return (
      <FlightItem
        key={index}
        flight={flight}
        removeFlight={removeFlight}
        viewTrip={viewTrip}
      />
    );
  });

  return (
    <div>
      <h2>FlightList</h2>
      <p>My Trips</p>
      {allFlights}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button onClick={closeModal}>close</button>
        {selectedTrip && <FlightDetail flight={selectedTrip} />}
      </Modal>

      <UserGraph data={data} userFlights={userFlights}/> 
    </div>
  );
};

export default FlightList;