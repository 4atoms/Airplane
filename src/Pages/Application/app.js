import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Hotels  from  '../Hotels/hotels'
import  Homepage  from '../Homepage/homepage';
import Flights from '../Flights/flights';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import ContactUs from '../ContactUs/ContactUs';
import Travelblog from '../TravelBlog/travelblog'

 const App = () => {
  return (
    <>
        
      <Router>
      <Switch>
        <Route exact path="/">
          <Navbar isColorRed={false}/>
          <Travelblog/>
          <Footer/>
        </Route>
        <Route  path="/flights" component={Flights} />
        
        <Route  path="/hotels" component={Hotels} />
      
        <Route path = "/contactus">
          <Navbar isColorRed={false} />
          <ContactUs/>
          <Footer/>
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