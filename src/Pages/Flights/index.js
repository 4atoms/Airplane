import React, { useState, useEffect } from "react";
import TimePick from "../../Components/Timepicker";
import {
  MainBody,
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
  FlexOutter,
  BlueDiv,
  CloseButton,
} from "./flights.style";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";

var flightdata = [
  {
    from: "BLR",
    to: "DEL",
    flightName: "Indigo",
    flightNumber: "X137C",
    id: 1,
  },
  {
    from: "BLR",
    to: "HYD",
    flightName: "Go Indigo",
    flightNumber: "Y137C",
    id: 2,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "Yo Indigo",
    flightNumber: "Z137C",
    id: 3,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "Indigo Way",
    flightNumber: "Z137C",
    id: 4,
  },
  {
    from: "DEL",
    to: "BLR",
    flightName: "Indigo Air",
    flightNumber: "X137C",
    id: 5,
  },
  {
    from: "HYD",
    to: "BLR",
    flightName: "Indigo Nav",
    flightNumber: "Y137C",
    id: 6,
  },
  {
    from: "GOA",
    to: "BLR",
    flightName: "IndiGoa",
    flightNumber: "G137C",
    id: 7,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "IndigoW",
    flightNumber: "A137C",
    id: 8,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "Kingfisher",
    flightNumber: "Z137C",
    id: 9,
  },
  {
    from: "BLR",
    to: "GOA",
    flightName: "Air India",
    flightNumber: "Z137C",
    id: 10,
  },
];

var avlFlights = [];

const Flights = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [flightName, setFlightName] = useState("");
  const [isShowTicket, setIsShowTicket] = useState(false);
  const [isFlight, setFlight] = useState(false);
  const [isSearch, setSearch] = useState(true);
  useEffect(() => {}, [isFlight]);

  //Fucntion that runs through FlightData and calls for a display of flights that match the queries

  const searchFlight = () => {
    flightdata.forEach((x) => {
      if (x.from === from && x.to === to) {
        avlFlights.push(x);
      }
    });
    console.log(avlFlights);
    showFlight();
  };

  const showFlight = () => {
    setFlight(true);
  };

  //Function to fetch Plane Name and number from array and set it using setState

  const showticket = (planeid) => {
    setSearch(false);
    avlFlights.forEach((x) => {
      if (x.id == planeid) {
        setFlightName(x.flightName);
        setFlightNumber(x.flightNumber);
      }
    });
    setIsShowTicket(true);
  };

  return (
    <MainBody>
      <Navbar />

      <FHeader>
        <div>Flights</div>
      </FHeader>

      {/* This is to display form to search for flights where from and to are set to later be used as queries to go through available flight data */}

      <FlightSearch isSearch={isSearch}>
        <FlexOutter>
          <li>
            <label>From</label>
            <input
              placeholder="City"
              onChange={(e) => setFrom(e.target.value.toUpperCase())}
            />
          </li>
          <li>
            <label>Destination</label>
            <input
              placeholder="City"
              onChange={(e) => setTo(e.target.value.toUpperCase())}
            />
          </li>
          <li>
            <label>Passenger Name</label>
            <input
              placeholder="Name"
              onChange={(e) => setName(e.target.value.toUpperCase())}
            />
          </li>
          <li>
            <label>Flight Time</label>
          </li>
          <TimePick />
          <li>
            <button onClick={searchFlight}>Submit</button>
          </li>
          <li></li>
        </FlexOutter>
      </FlightSearch>

      {/*This portion becomes visible when available flights are to be displayed, it uses map function with key as id property of flight object */}

      <FlightsDisplay isFlight={isFlight}>
        <FlexOutter>
          {avlFlights.map((x) => {
            return (
              <li key={x.id}>
                <BlueDiv>{x.flightNumber}</BlueDiv>
                <div>{x.flightName}</div>
                <button
                  onClick={() => {
                    showticket(x.id);
                  }}
                >
                  View
                </button>
              </li>
            );
          })}
          <li>
            <button
              onClick={() => {
                setSearch(true);
              }}
            >
              Modify Search
            </button>
          </li>
        </FlexOutter>
      </FlightsDisplay>

      {/*This is to display the boarding pass when isShowTicket is set to true which is initially set to false */}

      <FlightTicket>
        <Box>
          <Ticket isShowTicket={isShowTicket}>
            {/*Top Section of Boarding pass with Airline name, Boarding pass title and a close button to close Digital Boarding Pass */}

            <Airline>{flightName}</Airline>
            <CloseButton
              onClick={() => {
                setIsShowTicket(false);
              }}
            >
              X
            </CloseButton>
            <Boarding>Boarding pass</Boarding>

            {/*This the main section with all the details of the flight with passenger name and boarding time */}

            <Content>
              <FromPlace>{from}</FromPlace>
              <Transit>TO</Transit>
              <ToPlace>{to}</ToPlace>

              <SubContent>
                <Name>
                  PASSENGER NAME
                  <div>{name}</div>
                </Name>
                <Flight>
                  FLIGHT
                  <div>{flightNumber}</div>
                </Flight>
                <Gate>
                  GATE
                  <div>11B</div>
                </Gate>
                <Seat>
                  SEAT
                  <div>45A</div>
                </Seat>
                <BoardingTime>
                  BOARDING TIME
                  <div>10:25PM ON JUNE 2021</div>
                </BoardingTime>
              </SubContent>
            </Content>
          </Ticket>
        </Box>
      </FlightTicket>
      <Footer />
    </MainBody>
  );
};
export default Flights;
