import styled from "styled-components";
import img from "./vacation.jpg";

export const InputContainer = styled.div`
  position: relative;
  left: 50%;
  width: 60%;
  top: 50px;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  background-color: rgb(230, 230, 250);
  padding: 30px;
  align-items: center;
  border: solid;
  border-radius: 2em;
`;

export const Container = styled.div`
  position: relative;
  width: 20%;
  left: 50%;
  top: 50px;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  background-color: rgb(230, 230, 250);
  font-size: 10px;
  padding: 15px;
  border: solid;
  border-radius: 1em;
  align-items: center;
`;

export const ButtonComponent = styled.div`
  position: relative;
  width: 7%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  background-color: rgb(230, 230, 250);
  font-size: 10px;
  padding: 10px;
  border: solid;
  border-radius: 1em;
  align-items: center;
`;

export const InputElement = styled.div`
  width: 20%;
  font-size: 10px;
  box-sizing: border-box;
`;

export const InputComponent = styled.input`
  font-size: 10px;
  box-sizing: border-box;
  width: 100%;
`;

export const OptionComponent = styled.option`
  font-size: 10px;
`;

export const SelectComponent = styled.select`
  font-size: 10px;
`;

export const OuterContainer = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HotelDetails = styled.div`
  display: flex;
  padding: 10px;
  background-color: "lavendar";
  & > div {
    flex: 33%;
    background-color: white;
    opacity: 0.9;
    font-size: 30px;
    font-weight: bold;
  }

  & > div:nth-child(3) {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    flex: 5%;
    flex-direction: column;
  }

  & > div:nth-child(3) div {
    flex: 40%;
  }

  & > div:nth-child(1) {
    opacity: 1;
    flex: 5%;
  }

  & > div:nth-child(3) > div:nth-child(1) {
    display: flex;
    flex: 5%;
  }

  & > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) {
    flex: 60%;
    text-align: center;
  }

  & > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) {
    flex: 20%;
    background-color: ${(props) =>
      props.ratings > 4.5
        ? "green"
        : props.ratings > 3.5
        ? "yellowgreen"
        : "palegoldenrod"};
  }

  & > div:nth-child(3) > div:nth-child(2) {
    display: flex;
    justify-content: space-around;
  }

  & > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) {
    flex: 60%;
    text-align: center;
    font-size: 40px;
  }

  & > div:nth-child(3) > div:nth-child(2) > p {
    flex: 20%;
    font-size: 10px;
    bottom: 0;
  }

  & > div:nth-child(1) img {
    width: 100%;
    height: 100%;
  }

  & > div:nth-child(3) > div:nth-child(3) > input {
    border-radius: 0.3em;
  }
`;

export const HotelDetailsContainer = styled.div`
  display: flex;
  background-color: white;
  opacity: 0.9;
  margin: 0px 10px 10px;

  & > div:nth-child(1) {
    flex: 80%;
    text-align: left;
    padding-left: 40px;

    & > div {
      padding-bottom: 10px;
    }
  }

  & > div:nth-child(2) {
    flex: 20%;
    text-align: left;

    & > div {
      padding-bottom: 10px;

      & > span {
        padding-left: 10px;
        font-size: 10px;
      }
    }
  }

  & > div > div:nth-child(1) {
    font-weight: bold;
    font-size: 20px;
  }
`;
