import React, { useState } from "react";
import "./index.css";
import { Wrapper, Item, Title } from "./Accordian.style";

const accordiandata = [
  {
    title: "title 1",
    info: "#FlyLikeAStar with MakeMyTrip’s New Charter Flight Serv...",
    id: 1,
  },
  {
    title: "title 2",
    info: "6 things to do on business trip",
    id: 2,
  },
  {
    title: "title 3",
    info: "Your One-Stop Resource For Country-Wise Travel Guidelin...",
    id: 3,
  },
];

const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <Wrapper>
      <div>
        {accordiandata.map((accord, i) => (
          // eslint-disable-next-line react/jsx-key
          <Item>
            <Title onClick={() => toggle(i)}>
              <h2>{accord.title}</h2>
            </Title>
            <div className={selected === i ? "Infoshow" : "Info"}>
              {accord.info}
            </div>
          </Item>
        ))}
      </div>
    </Wrapper>
  );
};
export default Accordian;
