import React from "react";
import Travelblog from "./travelblog";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
const Homepage = () => {
  return (
    <div>
      {" "}
      <Navbar isColorRed={false} />
      <Travelblog />
      <Footer />
    </div>
  );
};
export default Homepage;
