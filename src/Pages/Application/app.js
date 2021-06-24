import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Hotels  from  '../Hotels/hotels'
import  Homepage  from '../Homepage/homepage';
import Flights from '../Flights/flights';

 const App = () => {
  return (
    <>
        
      <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route  path="/Flights" component={Flights} />
        
        <Route  path="/Hotels" component={Hotels} />
        
      </Switch>
    </Router>
    <Router>
        <div>
        <ul>
            <Link to="/Flights" >Flights  </Link>
            <Link to="/Hotels" >Hotels  </Link>
        </ul>
      </div>
      </Router>
      <div>Hi welcome to App</div>
    </>
  );
};
export default App;