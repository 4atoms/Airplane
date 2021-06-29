import styled from "styled-components";
export const Flexcontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  text-align: center;
  margin-top: 30px;
  background-color: #9888b51a;

  & > div {
    background-color: #ffffff;
    flex: 24%;
    margin-bottom: 50px;
    font-size: 18px;
  }
`;

export const Flexcontainerlogo = styled.div`
  box-sizing: border-box;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  font-size: 30px;
  text-align: left;
  margin: 40px;
  gap: 10px;

  &> div: nth-child(n) {
    background-color: #ffffff;
    flex: 30%;
    font-size: 18px;
    border-radius: 10px;
    align-items: center;
    min-height: 80px;
    cursor: pointer;
  }

  &> div: nth-child(1) {
    border-color: rgb(58, 229, 224);
    border-style: solid;
    border-left-width: 30px;
  }
  &> div: nth-child(2) {
    border-color: rgb(241, 241, 154);
    border-style: solid;
    border-left-width: 30px;
  }
  &> div: nth-child(3) {
    border-color: rgb(255, 203, 202);
    border-style: solid;
    border-left-width: 30px;
  }
`;

export const Flexcontainerlogoinner = styled.div`
  box-sizing: border-box;
  align-items: center;
  padding: 0px 15px 0px 0px;
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  gap: 20px;

  & > div {
    flex: 49%;
  }
`;
