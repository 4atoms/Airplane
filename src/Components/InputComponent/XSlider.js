import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { string, number } from "prop-types";

const XSlider = ({ defaultValue, label, ...props }) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  // useEffect(() => {
  //     setValue(value)
  // },[value]);

  const XSliderWrapper = styled.div`
    & > input : {
      -webkit-appearance: none;
      width: 100%;
      height: 10px;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }

    & > label : {
      font-size: 10px;
    }
  `;

  const handleRating = (e) => {
    setValue(e.value);
    console.log(e.value);
    props.onRatingChange(e.value);
  };

  return (
    <XSliderWrapper>
      <label>{label}</label>
      <span>{value}</span>
      <input
        onChange={(e) => handleRating({ value: e.target.value })}
        {...props}
      ></input>
    </XSliderWrapper>
  );
};

XSlider.defaultValue = {
  defaultValue: 3,
};

XSlider.propTypes = {
  defaultValue: number,
  label: string,
};

export default XSlider;
