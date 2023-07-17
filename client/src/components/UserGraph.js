import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

const UserGraph = ({userFlights}) => {
  
    
    const labels = userFlights.map((flight) => {
              return flight.date;
            })
    
    const footprintData = userFlights.map((flight) => {
            return flight.footprint;
    })
    
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: footprintData,
          tension: 0.2,
          fill: true,
          parsing:{
            xAxisKey: 'date',
            yAxisKey: 'footprint'
          }
        },
      ],
    };
  
  
  
  
    return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default UserGraph;