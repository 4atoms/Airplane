import React, { useEffect } from "react";
import {
  Flexcontainer,
  Flexcontainerlogo,
  Flexcontainerlogoinner,
} from "./travelblog.style";

import Accordian from "../../Components/Accordian/index";

var blogdata = [
  {
    image:
      "https://seoimgak.mmtcdn.com/blog/sites/default/files/hero2_28charter_1.jpg?6Aw5c27vU4CZHFxUGqPGmRfFhJZWkXek",
    detail: "#FlyLikeAStar with MakeMyTrip’s New Charter Flight Serv...",
    id: 1,
  },
  {
    image:
      "https://seoimgak.mmtcdn.com/blog/sites/default/files/hero_562.jpg?hncoThn_5OqPcZRrgDR6YqsA9qQTM8TH",
    detail: "6 things to do on business trip",
    id: 2,
  },
  {
    image:
      "https://seoimgak.mmtcdn.com/blog/sites/default/files/book-an-international-flights_0.jpg?ZXnoPWso01qBtd7QnC7zWWUQ6DEulQjg",
    detail: "Your One-Stop Resource For Country-Wise Travel Guidelin...",
    id: 3,
  },
  {
    image:
      "https://seoimgak.mmtcdn.com/blog/sites/default/files/heroq.jpg?RV9Bjige7_b1rqOt.01OrFbUgqTlRwtG",
    detail: "Protect Yourself with MakeMyTrip’s Special COVID-19",
    id: 4,
  },
];

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

const Travelblog = () => {
  useEffect(() => {}, [Accordian]);
  return (
    <>
      <Flexcontainerlogo>
        <div className="flex-item-loans">
          <Flexcontainerlogoinner>
            <img
              src="https://www.tripmoney.com/ext/static/PL/pl.png"
              alt=""
              style={{ width: "60px", height: "60px" }}
            ></img>

            <div className="flex-item-loans-desc">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontWeight: "900",
                }}
              >
                Personal Loan
              </p>
              <p style={{ fontSize: "20px", lineHeight: "20px" }}>
                Get approval for upto ₹30,00,000 at low interest rates.
              </p>
            </div>
          </Flexcontainerlogoinner>
        </div>

        <div className="flex-item-loans">
          <Flexcontainerlogoinner>
            <img
              src="https://www.tripmoney.com/ext/static/credit-card/cc@3x.png"
              alt=""
              style={{ width: "60px", height: "60px" }}
            ></img>

            <div className="flex-item-loans-desc">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontWeight: "900",
                }}
              >
                Credit Cards
              </p>
              <p style={{ fontSize: "20px", lineHeight: "20px" }}>
                Get Rewards, discounts and more
              </p>
            </div>
          </Flexcontainerlogoinner>
        </div>

        <div className="flex-item-loans">
          <Flexcontainerlogoinner>
            <img
              src="https://www.tripmoney.com/ext/static/TravelLoan/travelLoan.png"
              alt=""
              style={{ width: "60px", height: "60px" }}
            ></img>

            <div className="flex-item-loans-desc">
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "20px",
                  fontWeight: "900",
                }}
              >
                Travel Loan
              </p>
              <p style={{ fontSize: "20px", lineHeight: "20px" }}>
                Get upto 1 lakh disount
              </p>
            </div>
          </Flexcontainerlogoinner>
        </div>
      </Flexcontainerlogo>
      <div style={{ backgroundColor: "#9888b51a" }}>
        <h1 style={{ fontSize: "42px" }}>Travel Blog</h1>
        <Flexcontainer>
          {blogdata.map((item) => {
            return (
              <>
                <div className="flex-item">
                  <img src={item.image} alt="" style={{ width: "80%" }} />
                  <p>{item.detail}</p>
                </div>
              </>
            );
          })}
        </Flexcontainer>
      </div>

      <div className="container">
        <h1>Accordian Section</h1>
        {/* {accordiandata.map((accord) => {
          return <Accordian key={accord.id} {...accord}></Accordian>;
        })} */}
        <Accordian data1={[...accordiandata]} />
      </div>
    </>
  );
};
export default Travelblog;
