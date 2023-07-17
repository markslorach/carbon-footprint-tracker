import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns';

const flights = [{date: '2020-06-30', footprint: '5000', origin: 'GLA', destination: 'ABZ'}, {date: '2021-08', footprint: '8000', origin: 'GLA', destination: 'ABZ'},{date: '2022', footprint: '3000', origin: 'GLA', destination: 'ABZ'},{date: '2023', footprint: '9000', origin: 'GLA', destination: 'ABZ'}]

// const labels = ["January", "February", "March", "April", "May", "June"];

const labels = flights.map((flight) => {
          return flight.date;
        })

const footprintData = flights.map((flight) => {
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

// const options = {
//     scales:{
//         x:{
//             type: 'time',

//         }
//     }
// }

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;