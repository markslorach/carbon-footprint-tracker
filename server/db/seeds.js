use flight_information;

db.dropDatabase();

db.flights.insertMany([
    {
        "footprint": 1400,
        "offset_prices": [
          {
            "amount": 4000,
            "currency": "SEK",
            "offset_url":"https://www.goclimate.com/se/flight_offsets/new?offset_params=economy%2CARN%2CBCN%2CBCN%2CARN",
            "locale":"sv-SE"
          },
          {
            "amount":400,
            "currency":"USD",
            "offset_url":"https://www.goclimate.com/us/flight_offsets/new?offset_params=economy%2CARN%2CBCN%2CBCN%2CARN",
            "locale":"en-US"
          }
        ],
        "details_url": "https://www.goclimate.com/flight_offsets/new?offset_params=economy%2CARN%2CBCN%2CBCN%2CARN"
      } 
]);