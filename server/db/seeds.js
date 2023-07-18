use flight_information;

db.dropDatabase();

db.flights.insertMany([
    {
        origin: "GLA",
        destination: "JFK",
        footprint: 2800,
        date: "2020-07-13"
    },
    {
        origin: "GLA",
        destination: "LGW",
        footprint: 500,
        date: "2022-07-13"
    },
    {
        origin: "GLA",
        destination: "PEK",
        footprint: 4400,
        date: "2023-07-13"
    }
]);