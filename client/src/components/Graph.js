import React from 'react'

// const flights = [{date: '2020-06-30', footprint: '5000', origin: 'GLA', destination: 'ABZ'}, {date: '2021-08', footprint: '8000', origin: 'GLA', destination: 'ABZ'},{date: '2022', footprint: '3000', origin: 'GLA', destination: 'ABZ'},{date: '2023', footprint: '9000', origin: 'GLA', destination: 'ABZ'}]

// const averagePersonFlights = [{date: '2020-06-30', footprint: '3000', origin: 'GLA', destination: 'ABZ'}, {date: '2021-08', footprint: '6000', origin: 'GLA', destination: 'ABZ'},{date: '2022', footprint: '4000', origin: 'GLA', destination: 'ABZ'},{date: '2023', footprint: '5000', origin: 'GLA', destination: 'ABZ'}]
        
//         const dates = flights.map((flight) => {
//           return flight.date;
//         })

//         const footprints = flights.map((flight) => {
//           return flight.footprint;
//         })

//         const footprints_2 = flights.map((flight) => {
//           return flight.footprint + 2000;
//         })

//         const data = [
//             {labels: dates},
//             {datasets: footprints}
//     ];
        
//         console.log(dates)
        
//         const ctx = document.getElementById('myChart');
//         new Chart(ctx, {
//         //   SETUP
//           type: 'line',

//         //   DATA
    
//           data: {
//             labels: dates,
//             datasets: [{
//               label: 'Carbon Footprint',
//               data: flights,
//               borderWidth: 1,
//               fill: true, 
//               tension: 0.2,
//               parsing: {
//                 xAxisKey: 'date',
//                 yAxisKey: 'footprint'
//               }
//             },{
//               label: 'Average Carbon Footprint',
//               data: averagePersonFlights,
//               borderWidth: 1,
//               fill: true, 
//               tension: 0.3,
//               parsing: {
//                 xAxisKey: 'date',
//                 yAxisKey: 'footprint'
//               }
//             }
//         ]
//           },
//           options: {
//             scales: {
//                 x: {
//                 type: 'time',
//                 time: {
//                     unit: 'month'
//                 }
//               },
//               y: {
//                 beginAtZero: true
//               },
           
//             }
//           }
//         });

const Graph = () => {
    return (
    <div>Graph</div>
    )
}
                
export default Graph;