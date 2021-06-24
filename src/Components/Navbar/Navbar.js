import React from "react";
import { bool } from "prop-types";
import  ReactDOM  from "react-dom";
import {MainContent, Brandlogo, Navbarlinks} from "./Navbar.style";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const Navbar = ({isColorRed}) => {
    return(
   
    <MainContent>

        <Brandlogo>
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" style={{width: '50%'}}  />
        </Brandlogo>
            
        <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>

        <Navbarlinks>
                <ul>
                    <li><a href="flights" style={{color:(isColorRed? "red" : "blue")}}>Flights</a></li>
                    <li><a href="hotels" style={{color:(isColorRed? "red" : "blue")}}>Hotels</a></li>
                    <li><a href="contactus" style={{color:(isColorRed? "red" : "blue")}}>Contact Us</a></li> 
                    {/* <li><a href="#home" style={{color:color}}>Flights</a></li>
                    <li><a href="#news" style={{color:color}}>Hotels</a></li>
                    <li><a href="#contact" style={{color:color}}>Contact Us</a></li>  */}
                </ul>
        </Navbarlinks>


        {/* <BrowserRouter>
        <Switch>
            <Route  path="/Flights" component={Flights} />
        </Switch>
        </BrowserRouter> */}
        

    </MainContent>
    
    );
    
};

// Navbar.propTypes={
//     isColorRed : bool
// }

// Navbar.defaultProps = {
//      color: "blue"
// } 

export default Navbar; 