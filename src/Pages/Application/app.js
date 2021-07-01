import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hotels from "../Hotels";
import Homepage from "../Homepage/index";
import Flights from "../Flights";
import Footer from "../../Components/Footer/footer";
import Navbar from "../../Components/Navbar/Navbar";
import ContactUs from "../ContactUs";
// import Travelblog from '../Homepage/TravelBlog/travelblog';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/flights" component={Flights} />
          <Route path="/hotels" component={Hotels} />
          <Route path="/contactus">
            <Navbar isColorRed={false} />
            <ContactUs />
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* <Router>
        <div>
        <ul>
            <Link to="/Flights" >Flights  </Link>
            <Link to="/Hotels" >Hotels  </Link>
        </ul>
      </div>
      </Router>
      <div>Hi welcome to App</div> */}
    </>
  );
};
export default App;
