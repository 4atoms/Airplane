/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
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
  Fdiv,
  TimeCol,
  Container,
  Cell,
  TimePicker,
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
    from: "Bangalore",
    to: "Goa",
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
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [name, setName] = useState("");
  //const [flightName, setFlightName] = useState("");
  const [isShowTicket, setIsShowTicket] = useState(false);
  const [isFlight, setFlight] = useState(false);
  const [hourvals, setHour] = useState("00");
  const [minutevals, setMin] = useState("00");

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

  const showticket = () => {
    setIsShowTicket(true);
  };
  var hours = ["00", "01", "03", "04", "05", "06", "07", "08", "09", "10"];
  var mins = ["00", "01", "03", "04", "05", "06", "07", "08", "09", "10"];
  for (let i = 11; i < 24; i++) {
    hours.push(i);
  }
  for (let i = 11; i < 60; i++) {
    mins.push(i);
  }

  return (
    <MainBody>
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
        <TimePicker placeholder={hourvals + ":" + minutevals}></TimePicker>
        <Fdiv>
          <Container>
            <TimeCol>
              {hours.map((x) => {
                return (
                  <Cell key={x} onClick={() => setHour(x)}>
                    {x}
                  </Cell>
                );
              })}
            </TimeCol>
            <TimeCol>
              {mins.map((x) => {
                return (
                  <Cell key={x} onClick={() => setMin(x)}>
                    {x}
                  </Cell>
                );
              })}
            </TimeCol>
          </Container>
        </Fdiv>
        <div>
          <button onClick={searchFlight}>Submit</button>
        </div>
      </FlightSearch>

      <FlightsDisplay isFlight={isFlight}>
        {avlFlights.map((x) => {
          return (
            <div key={x.id}>
              <div>{x.flightName}</div>
              {x.flightNumber}
              <button onClick={showticket}>View</button>
            </div>
          );
        })}
        {/* 
              <div>
                {x.flightNumber}
                <button planeId={x.id} onClick={viewTicket()}>
                  View
                </button>
              </div> */}
      </FlightsDisplay>

      <FlightTicket>
        <Box>
          <Ticket isShowTicket={isShowTicket}>
            <Airline>Indigo</Airline>
            <Boarding>Boarding pass</Boarding>

            <Content>
              <FromPlace>blr</FromPlace>
              <Transit>TO</Transit>
              <ToPlace>goa</ToPlace>

              <SubContent>
                <Name>
                  PASSENGER NAME
                  <div>{name}</div>
                </Name>
                <Flight>
                  FLIGHT
                  <div>X3-137C</div>
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
    </MainBody>
  );
};
export default Flights;
