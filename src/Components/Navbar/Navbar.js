/* eslint-disable react/prop-types */
import React from "react";
import { MainContent, Brandlogo, Navbarlinks } from "./navbar.style";

const Navbar = ({ isColorRed }) => {
  return (
    <MainContent>
      <Brandlogo>
        <img
          alt="alt"
          src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
          style={{ width: "50%" }}
        />
      </Brandlogo>

      <Navbarlinks>
        <ul>
          <li>
            <a href="flights" style={{ color: isColorRed ? "red" : "blue" }}>
              Flights
            </a>
          </li>
          <li>
            <a href="hotels" style={{ color: isColorRed ? "red" : "blue" }}>
              Hotels
            </a>
          </li>
          <li>
            <a href="contactus" style={{ color: isColorRed ? "red" : "blue" }}>
              Contact Us
            </a>
          </li>
        </ul>
      </Navbarlinks>
    </MainContent>
  );
};

export default Navbar;
