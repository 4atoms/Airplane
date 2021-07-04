import React, { useState } from "react";
import "./index.css";
import { Wrapper, Item, Title } from "./Accordian.style";

const Accordian = ({ data1 }) => {
  const [selected, setSelected] = useState(null);
  const [data, setData] = useState(data1);

  const addItem = () => {
    console.log(data);
    const newItem = {
      title: "title new",
      info: "New Info",
    };
    setData([...data, newItem]);
  };

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <button onClick={addItem}>Add new Item</button>
      <Wrapper>
        {data.map((accord, i) => (
          // eslint-disable-next-line react/jsx-key
          <Item key={i}>
            <Title onClick={() => toggle(i)}>
              <h2>{accord.title}</h2>
            </Title>
            <div className={selected === i ? "Infoshow" : "Info"}>
              {accord.info}
            </div>
          </Item>
        ))}
      </Wrapper>
    </>
  );
};
export default Accordian;
