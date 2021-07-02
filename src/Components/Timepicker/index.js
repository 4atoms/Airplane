import {
  Fdiv,
  TimeCol,
  Container,
  Cell,
  TimePicker,
  OkButton,
  LineBreak,
  MainTime,
} from "./timepicker.style";
import React, { useState, useEffect } from "react";

var hours = ["00", "01", "03", "04", "05", "06", "07", "08", "09", "10"];
var mins = ["00", "01", "03", "04", "05", "06", "07", "08", "09", "10"];
for (let i = 11; i < 24; i++) {
  hours.push(i);
}
for (let i = 11; i < 60; i++) {
  mins.push(i);
}

const TimePick = () => {
  const [hourvals, setHour] = useState("00");
  const [minutevals, setMin] = useState("00");
  const [isDrop, setDrop] = useState(false);

  useEffect(() => {
    // setValue(defaultValue);
  }, []);
  const dropTime = () => {
    console.log("droptime");
    setDrop(true);
  };
  return (
    <>
      <MainTime>
        <TimePicker
          isDrop={isDrop}
          onClickCapture={dropTime}
          value={hourvals + ":" + minutevals}
        ></TimePicker>
        <Fdiv isDrop={isDrop}>
          <Container>
            <TimeCol>
              {hours.map((x) => {
                return (
                  <Cell key={x} onClick={() => setHour(x)}>
                    {x}
                  </Cell>
                );
              })}
            </TimeCol>
            <TimeCol>
              {mins.map((x) => {
                return (
                  <Cell key={x} onClick={() => setMin(x)}>
                    {x}
                  </Cell>
                );
              })}
            </TimeCol>
          </Container>
          <LineBreak />
          <div>
            <OkButton onClick={() => setDrop(false)}>ok</OkButton>
          </div>
        </Fdiv>
      </MainTime>
    </>
  );
};
export default TimePick;
