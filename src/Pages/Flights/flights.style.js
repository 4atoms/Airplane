import styled from "styled-components";
import img from "./flightSample.jpg";

export const MainBody = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const FHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(25, 25, 0, 0.4);
  font-size: 50px;
`;

export const FlightSearch = styled.div`
  display: flex;
  heoght: auto;
  & > div > div {
    width: 100px;
  }
  & > div > div > input {
    justify-content: center;
  }
  & > div > button {
    margin-top: 130px;
    justify-content: center;
  }
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
  right: 220px;
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
  left: 20px;
  font-family: Arial;
  font-size: 38px;
  color: #222;
`;

export const ToPlace = styled.span`
  position: absolute;
  top: 10px;
  left: 180px;
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
  margin-left: 105px;
`;

export const FlightsDisplay = styled.div`
  display: ${(props) => (props.isFlight ? "block" : "none")};
`;

export const Fdiv = styled.div`
  margin-top: 140px;
`;

export const TimeCol = styled.div`
  width: 40px;
  height: 120px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Container = styled.div`
  display: flex;
  width: 80px;
`;

export const Cell = styled.button`
  width: 40px;
  height: 20px;
  display: flex;
`;

export const TimePicker = styled.input`
  margin-top: 140px;
  height: 40px;
  width: 100px;
`;
