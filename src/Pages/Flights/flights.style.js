import styled from "styled-components";
import img from "./flightSample2.jpg";

export const MainBody = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const FHeader = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  background-color: rgba(25, 25, 0, 0.4);
  font-size: 50px;
`;

export const FlightTicket = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Box = styled.div`
  position: absolute;
  top: calc(50% - 125px);
  top: -webkit-calc(50% - 125px);
  left: calc(50% - 300px);
  left: -webkit-calc(50% - 300px);
`;

export const Content = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: 170px;
  background: #eee;
`;

export const Airline = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  color: rgb(0, 0, 0);
`;

export const Boarding = styled.span`
  position: absolute;
  top: 10px;
  right: 250px;
  font-family: Arial;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
`;

export const SubContent = styled.div`
  background: #e5e5e5;
  width: 100%;
  height: 100px;
  position: absolute;
  top: 70px;
`;

export const FromPlace = styled.span`
  position: absolute;
  top: 10px;
  left: 135px;
  font-family: Arial;
  font-size: 38px;
  color: #222;
`;

export const ToPlace = styled.span`
  position: absolute;
  top: 10px;
  left: 400px;
  font-family: Arial;
  font-size: 38px;
  color: #222;
`;

export const Name = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  & > div {
    color: #555;
    font-size: 17px;
  }
`;

export const Flight = styled.span`
  position: absolute;
  top: 10px;
  left: 180px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  & > div {
    color: #555;
    font-size: 17px;
  }
`;

export const Gate = styled.span`
  position: absolute;
  top: 10px;
  left: 280px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  & > div {
    color: #555;
    font-size: 17px;
  }
`;

export const Ticket = styled.div`
  display: ${(props) => (props.isShowTicket ? "flex" : "none")};
  width: 600px;
  height: 250px;
  background: #0a90d0;
  border-radius: 10px;
  box-shadow: 0 0 100px #aaa;
`;

export const Seat = styled.div`
  position: absolute;
  top: 10px;
  left: 350px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  & > div {
    color: #555;
    font-size: 17px;
  }
`;

export const BoardingTime = styled.div`
  position: absolute;
  top: 10px;
  left: 430px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  & > div {
    color: #555;
    font-size: 17px;
  }
`;

export const Transit = styled.span`
  position: absolute;
  top: 20px;
  left: 285px;
  font-family: Arial;
  font-size: 20px;
  color: #222;
`;

export const FlightsDisplay = styled.div`
  display: ${(props) => (props.isFlight ? "block" : "none")};
`;

export const FlexOutter = styled.ul`
  top: 500px;
  max-width: 800px;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
  & > li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  & > li:not(:last-child) {
    margin-bottom: 20px;
  }
  & > li > label:not(:last-child) {
    flex: 1 0 250px;
    background-color: rgba(184, 131, 165);
  }
  max-width: 220px;
  & > li > label + * {
    flex: 1 0 220px;
  }
  & > li > div {
    padding: 15px;
    border: none;
    background-color: white;
  }
  & > li > input {
    padding: 15px;
    border: none;
  }
  & > li > button {
    margin-left: auto;
    padding: 8px 16px;
    border: none;
    background: #333;
    color: #f2f2f2;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    border-radius: 2px;
  }
`;

export const FlightSearch = styled.div`
  display: ${(props) => (props.isSearch ? "flex" : "none")};
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  & > * {
    box-sizing: border-box;
  }
`;

export const BlueDiv = styled.div`
  padding: 15px;
  border: none;
  background-color: white;
`;

export const CloseButton = styled.button`
  top: 7px;
  border-radius: 3px;
  height: auto;
  position: absolute;
  right: 10px;
  font-family: Arial;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  background-color: red;
`;
