import React, { useState, useEffect, forwardRef } from "react";
import { string, number, func } from "prop-types";
import {
  LabelContainer,
  Label,
  XSliderWrapper,
  RangeInput,
} from "./XSlider.style";

/** Input component of slider to update minimum and maximum rating
 * @param defaultMinValue
 * @param defaultMaxValue
 * @param label
 * @param onMaxRatingChange
 * @param onMinRatingChange
 * @param minId
 * @param maxId 
 * @param ref
 */
const XSlider = forwardRef(
  (
    {
      defaultMinValue,
      defaultMaxValue,
      label,
      onMinRatingChange,
      onMaxRatingChange,
      minId,
      maxId,
    },
    ref
  ) => {
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

    /**Handles minimum rating set as input
     * @param event
     */
    const handleMinRating = (ev) => {
      const {
        target: { value },
      } = ev;
      setMinValue(value);
      console.log(ref.current);
      onMinRatingChange(value);
    };

    /**Handles maximum rating set as input
     * @param event
     */
    const handleMaxRating = (ev) => {
      console.log(ev);
      const {
        target: { value },
      } = ev;
      setMaxValue(value);
      console.log(value);
      onMaxRatingChange(value);
    };

    return (
      <XSliderWrapper>
        <LabelContainer reference={ref.current}>
          <Label>{label}</Label>
          <span>
            Between {minValue} and {maxValue}
          </span>
        </LabelContainer>
        <RangeInput
          reference={ref.current}
          type="range"
          value={minValue}
          onChange={(ev) => handleMinRating(ev)}
          id={minId}          
          min="0"
          max="5"
          step="0.5"
        ></RangeInput>
        <RangeInput
          reference={ref.current}
          type="range"
          value={maxValue}
          onChange={(ev) => handleMaxRating(ev)}
          id={maxId}          
          min="0"
          max="5"
          step="0.5"
        ></RangeInput>
      </XSliderWrapper>
    );
  }
);

XSlider.defaultValue = {
  defaultMinValue: "1",
  defaultMaxValue: "4",
  label: "Rating :",
  onMinRatingChange: () => {},
  onMaxRatingChange: () => {},
};

XSlider.propTypes = {
  defaultMinValue: number,
  defaultMaxValue: number,
  label: string,
  onMinRatingChange: func,
  onMaxRatingChange: func,
  minId: number,
  maxId: number,
};

export default XSlider;
