import styled from "styled-components";

export const Fdiv = styled.div`
  margin: 5px;
  z-index: 99;
  position: fixed;
  flex-wrap: wrap;
  display: ${(props) => (props.isDrop ? "flex" : "none")};
`;

export const TimeCol = styled.div`
  width: 50%;
  height: 120px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Container = styled.div`
  display: inherit;
  width: 80px;
  box-shadow: 0 0 20px #595959;
`;

export const Cell = styled.button`
  width: 40px;
  height: 20px;
  display: flex;
  border: none;
`;

export const TimePicker = styled.input`
  margin-top: 10px;
  height: 40px;
  width: 80px;
  font-size: xx-large;
  justify-content: center;
  &:focus {
    box-shadow: 0 0 15px rgba(26 174 219);
  }
`;

export const OkButton = styled.button`
  width: 100%;
  color: rgba(26 174 219);
  font-color: white;
`;

export const LineBreak = styled.div`
  width: 100%;
`;
