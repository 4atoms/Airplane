import React, { useState } from "react";

// import  {AiOutlineMinus, AiOutlinePlus} from 'react-icons/fa';

const Accordian = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="singleaccord">
      <header>
        <h2>{title}</h2>

        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {/* {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
        </button>
      </header>

      {showInfo && (
        <p
          style={{
            fontSize: "20px",
            color: "#7c795d",
            fontFamily: "Arial",
            backgroundColor: "#fed8b1",
          }}
        >
          {info}
        </p>
      )}
    </div>
  );
};

export default Accordian;
