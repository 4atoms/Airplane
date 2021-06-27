import styled from "styled-components";
import img from "./vacation.jpg";

export const InputContainer=styled.div`
position: fixed;
  top: 30% ;
  left: 50%;
  transform: translate(-50%, -50%);
display:flex;
justify-content:space-around;
background-color:rgb(230, 230, 250);
padding : 30px;
align-items: center;
border : solid;
border-radius: 2em;
`;


export const Container=styled.div`
position: fixed;
  top: 20% ;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index : 2;
display:flex;
background-color:rgb(230, 230, 250);
font-size:10px;
padding : 15px;
border : solid;
border-radius: 1em;
align-items: center;
`;

export const ButtonComponent=styled.div`
position: fixed;
  top: 38% ;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index : 2;
display:flex;
background-color:rgb(230, 230, 250);
font-size:10px;
padding : 10px;
border : solid;
border-radius: 1em;
align-items: center;
`;

export const InputElement=styled.div`
width : 20%;
font-size:10px;
box-sizing : border-box;
`;

export const InputComponent=styled.input`

font-size:10px;
box-sizing : border-box;
width:100%;
`;

export const OptionComponent=styled.option`

font-size:10px;
`;

export const SelectComponent=styled.select`

font-size:10px;
`;

export const OuterContainer = styled.div`
background-image: url(${img});
width : 100%;
height : 100vh;
background-size: contain;
`;