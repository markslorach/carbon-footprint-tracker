import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

const UserGraph = ({userFlights}) => {
  
    const labels = userFlights.map((flight) => {
              return flight.date;
            })

    labels.sort((a,b) => Date.parse(b) - Date.parse(a))

    const footprintData = userFlights.map((flight) => {
            return flight.footprint;
    })

    const privateJetFootprintData = userFlights.map((flight) => {
      return flight.footprint * 100;
})

    const options = {
      legend: {
        display: false,
        align: 'start',
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'month'
          }
        },
        y: {
          beginAtZero: true
        }
      }
    }

    const data = {
      labels: labels,
      datasets: [
        {

          label: "Your Footprint",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: footprintData,
          tension: 0.2,
          fill: true,
          parsing:{
            xAxisKey: 'date',
            yAxisKey: 'footprint'
          }},
          {
            label: 'Private Jet Equivelant',
            data: privateJetFootprintData,
            borderWidth: 1,
            fill: true, 
            hidden: true,
            tension: 0.2,
            parsing: {
              xAxisKey: 'date',
              yAxisKey: 'footprint'
            }
          },
      ],
    }

return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default UserGraph;