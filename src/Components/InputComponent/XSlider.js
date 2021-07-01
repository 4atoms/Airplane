import React, { useState, useEffect } from "react";
import { string, number, func } from "prop-types";
import { Label, XSliderWrapper, RangeInput } from "./XSlider.style";

const XSlider = ({
  defaultMinValue,
  defaultMaxValue,
  label,
  onMinRatingChange,
  onMaxRatingChange,
  minId,
  maxId,
  minName,
  maxName,
}) => {
  const [minValue, setMinValue] = useState(defaultMinValue);
  const [maxValue, setMaxValue] = useState(defaultMaxValue);

  useEffect(() => {
    console.log("called", { defaultMinValue }, { defaultMaxValue });
    setMinValue(defaultMinValue);
    setMaxValue(defaultMaxValue);
  }, []);

  useEffect(() => {
    setMinValue(minValue);
  }, [minValue]);

  useEffect(() => {
    setMaxValue(maxValue);
  }, [maxValue]);

  const handleMinRating = (ev) => {
    const {
      target: { value },
    } = ev;
    setMinValue(value);
    console.log(value);
    onMinRatingChange(value);
  };

  const handleMaxRating = (ev) => {
    const {
      target: { value },
    } = ev;
    setMaxValue(value);
    console.log(value);
    onMaxRatingChange(value);
  };

  return (
    <XSliderWrapper>
      <div>
        <Label>{label}</Label>
        <span>
          Between {minValue} and {maxValue}
        </span>
      </div>
      <RangeInput
        type="range"
        value={minValue}
        onChange={(ev) => handleMinRating(ev)}
        id={minId}
        name={minName}
        min="0"
        max="5"
        step="0.5"
      ></RangeInput>
      <RangeInput
        type="range"
        value={maxValue}
        onChange={(ev) => handleMaxRating(ev)}
        id={maxId}
        name={maxName}
        min="0"
        max="5"
        step="0.5"
      ></RangeInput>
    </XSliderWrapper>
  );
};

XSlider.defaultValue = {
  defaultMinValue: "1",
  defaultMaxValue: "4",
  onRatingChange: () => {},
};

XSlider.propTypes = {
  defaultMinValue: number,
  defaultMaxValue: number,
  label: string,
  onRatingChange: func,
};

export default XSlider;
