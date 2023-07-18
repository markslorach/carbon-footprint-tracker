use flight_information;

db.dropDatabase();

db.flights.insertMany([
    {
        origin: "LAX",
        destination: "JFK",
        footprint: 2200,
        date: "2023-07-13",
        arrivalDate: "2023-07-13"
    },
    {
        origin: "GLA",
        destination: "SIN",
        footprint: 6300,
        date: "2023-07-13",
        arrivalDate: "2023-07-13"
    },
    {
        origin: "ABZ",
        destination: "PEK",
        footprint: 4300,
        date: "2023-07-13",
        arrivalDate: "2023-07-13"
    }
]);