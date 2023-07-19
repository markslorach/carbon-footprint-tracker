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

<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  style={{
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    content: {
      width: '500px',
      height: '500px',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }}
>


        <button onClick={closeModal}>close</button>
        {selectedTrip && <FlightDetail flight={selectedTrip} />}
      </Modal>

      <UserGraph data={data} userFlights={userFlights}/> 
    </div>
  );
};

export default FlightList;