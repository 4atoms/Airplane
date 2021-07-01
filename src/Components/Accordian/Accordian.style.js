import styled from "styled-components";
export const Wrapper = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
  background-color: #9888b51a;
`;

export const Item = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
  background-color: #9888b51a;
`;

export const Title = styled.div`
  color: #855662b;
  cursor: pointer;
`;

export const Info = styled.div`
  max-height: "0px";
  overflow: hidden;
  ${({ isShow }) => isShow && `max-height: unset; overflow: visible`}
`;
