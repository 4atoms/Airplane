import styled from "styled-components";

export const MainTime = styled.div`
  flex-direction: column;
`;

export const Fdiv = styled.div`
  top: 187px;
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
  width: 73px;
  font-size: 28px;
  justify-content: center;
  &:focus {
    box-shadow: 0 0 15px rgba(26 174 219);
  }
`;

export const OkButton = styled.button`
  width: 80px;
  background-color: rgba(26 174 219);
  color: white;
`;

export const LineBreak = styled.div`
  width: 100%;
`;
