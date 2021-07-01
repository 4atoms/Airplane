import styled from "styled-components";

export const XSliderWrapper = styled.div`
  margin: auto;

  position: relative;
`;

export const Label = styled.label`
  font-size: 10px;
`;

export const RangeInput = styled.input.attrs({ type: "range" })`
  position: absolute;
  -webkit-appearance: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  &:focus {
    outline: none;
  }

  &:focus::-ms-fill-lower {
    background: #2497e3;
  }

  &:focus::-ms-fill-upper {
    background: #2497e3;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    animate: 0.2s;
    background: #2497e3;
    border-radius: 1px;
    box-shadow: none;
    border: 0;
  }

  &::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    box-shadow: 0px 0px 0px #000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -7px;
  }
`;
