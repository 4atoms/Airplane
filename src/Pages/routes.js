import React from 'react';
import  Homepage  from '../Pages/homepage';
import  Aboutus  from '../Pages/aboutus';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
 const Routes = () => {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path="/Home" component={Homepage} />
        <Route exact path="/About" component={Aboutus} />
      </Switch>
    </Router>
    </>
  );
};
export default Routes;