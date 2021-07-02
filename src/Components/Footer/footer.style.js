import styled from "styled-components";

export const Footer_tag = styled.div`
  bottom: 0;
  position: relative;
  height: 100px;
  background-color: black;
  width: 100%;
  display: flex;
`;
export const Flex_footer = styled.div`
  flex: 50%;
  background-color: black;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Flex_icon_container = styled.div`
  display: flex;
  flex: 10%;
  justify-content: space-between;
  align-items: center;
  margin-left: 2%;
`;

export const Message = styled.div`
  flex: 90%;
  text-align: right;
  font-weight: bold;
  margin-right: 2%;
  font-size: 1export const 5em;
`;
export const Icon = styled.div`
  width: 30%;
  justify-content: space-around;

  & > a > img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const Footer_text = styled.div`
  color: #ffffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
