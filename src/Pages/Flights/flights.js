/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import {
  FHeader,
  FlightSearch,
  FlightTicket,
  Box,
  Content,
  Airline,
  Boarding,
  SubContent,
  ToPlace,
  FromPlace,
  Name,
  Flight,
  Gate,
  Ticket,
  Seat,
  BoardingTime,
  Transit,
  FlightsDisplay,
} from "./flights.style";
import Navbar from "../../Components/Navbar/Navbar";

var flightdata = [
  {
    from: "Bangalore",
    to: "Delhi",
    flightName: "Indigo",
    flightNumber: "x137c",
    id: 1,
  },
  {
    from: "Bangalore",
    to: "Hyderabad",
    flightName: "Indigo",
    flightNumber: "y137c",
    id: 2,
  },
  {
    from: "GOA",
    to: "BLR",
    flightName: "Indigo",
    flightNumber: "z137c",
    id: 3,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "IndigoW",
    flightNumber: "z137c",
    id: 4,
  },
  {
    from: "Bangalore",
    to: "Delhi",
    flightName: "Indigo",
    flightNumber: "x137c",
    id: 5,
  },
  {
    from: "Bangalore",
    to: "Hyderabad",
    flightName: "Indigo",
    flightNumber: "y137c",
    id: 6,
  },
  {
    from: "Bangalore",
    to: "Goa",
    flightName: "Indigo",
    flightNumber: "z137c",
    id: 7,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "IndigoW",
    flightNumber: "z137c",
    id: 8,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "Kingfisher",
    flightNumber: "z137c",
    id: 9,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "Air India",
    flightNumber: "z137c",
    id: 10,
  },
];

var avlFlights = [];

const Flights = () => {
  const [from, setFrom] = useState([]);
  const [to, setTo] = useState([]);
  const [name, setName] = useState([]);
  // const [flightName, setFlightName] = useState("");
  const [isShowTicket, setIsShowTicket] = useState(false);
  const [isFlight, setFlight] = useState(false);

  const searchFlight = () => {
    flightdata.forEach((x) => {
      if (x.from === from && x.to === to) {
        avlFlights.push(x);
      }
    });
    showFlight();
    console.log(avlFlights.length);
    //  showticket();
  };

  const viewTicket = () => {
    showticket();
  };

  // const planeId = () => {};

  const showFlight = () => {
    setFlight(true);
  };

  const showticket = () => {
    setIsShowTicket(true);
  };

  return (
    <>
      <Navbar />

      <FHeader>
        <div>Flights</div>
      </FHeader>

      <FlightSearch>
        <div>
          <div>
            From{" "}
            <input
              id="From"
              onChange={(e) => setFrom(e.target.value.toUpperCase())}
            />
          </div>
          <div>
            To{" "}
            <input
              id="To"
              onChange={(e) => setTo(e.target.value.toUpperCase())}
            />
          </div>
          <div>
            Name <input id="Name" onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div>
          <button onClick={searchFlight}>Submit</button>
        </div>
      </FlightSearch>
      <FlightsDisplay isFlight={isFlight}>
        {avlFlights.map((x) => {
          return (
            <div>
              {x.flightName}
              <div>
                {x.flightNumber}
                <button planeId={x.id} onClick={viewTicket}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </FlightsDisplay>

      <FlightTicket>
        <Box>
          <Ticket isShowTicket={isShowTicket}>
            <Airline></Airline>
            <Boarding>Boarding pass</Boarding>

            <Content>
              <FromPlace>{from}</FromPlace>
              <Transit>TO</Transit>
              <ToPlace>{to}</ToPlace>

              <SubContent>
                <Name>
                  PASSENGER NAME
                  <span>
                    <br />
                    {name}
                  </span>
                </Name>
                <Flight>
                  FLIGHT
                  <span>
                    <br />
                    X3-137C
                  </span>
                </Flight>
                <Gate>
                  GATE
                  <br />
                  <span>11B</span>
                </Gate>
                <Seat>
                  SEAT
                  <br />
                  <span>
                    45A
                    <br />
                  </span>
                </Seat>
                <BoardingTime>
                  BOARDING TIME
                  <br />
                  <span>10:25PM ON JUNE 2021</span>
                </BoardingTime>
              </SubContent>
            </Content>
          </Ticket>
        </Box>
      </FlightTicket>
    </>
  );
};
export default Flights;
