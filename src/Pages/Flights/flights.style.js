import styled from "styled-components";

export const FHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(25, 25, 0, 0.4);
  font-size: 50px;
`;

export const FlightSearch = styled.div`
  display: flex;
  & > div > div {
    width: 50px;
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
  & > span {
    color: #555;
    font-size: 17px;
  }
`;

export const FromPlaceSlip = styled.span`
  font-size: 30px;
  top: 20px;
  left: 410px;
`;

export const ToPlaceSlip = styled.span`
  font-size: 30px;
  top: 20px;
  left: 530px;
`;

export const Flight = styled.span`
  position: absolute;
  top: 10px;
  left: 180px;
  font-family: Arial Narrow, Arial;
  font-weight: bold;
  font-size: 14px;
  color: #999;
  & > span {
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
  & > span {
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
  & > span {
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
  & > span {
    color: #555;
    font-size: 17px;
  }
`;

export const Transit = styled.span`
  position: absolute;
  margin-left: 105px;
`;

export const FlightsDisplay = styled.div`
  display: ${(props) => (props.isFlight ? "flex" : "none")};
`;
