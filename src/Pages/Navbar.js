import React from "react";
import { bool } from "prop-types";
import  ReactDOM  from "react-dom";
import './index.css';
const Navbar = ({isColorRed}) => {
    return(
   
    <nav class="navbar">

        <div class="brand-logo">
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" style={{width: '50%'}}  />
        </div>
            
        <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>

        <div class="navbar-links">
                <ul>
                    <li><a href="#flights" style={{color:(isColorRed? "red" : "blue")}}>Flights</a></li>
                    <li><a href="#hotels" style={{color:(isColorRed? "red" : "blue")}}>Hotels</a></li>
                    <li><a href="#contactus" style={{color:(isColorRed? "red" : "blue")}}>Contact Us</a></li> 
                    {/* <li><a href="#home" style={{color:color}}>Flights</a></li>
                    <li><a href="#news" style={{color:color}}>Hotels</a></li>
                    <li><a href="#contact" style={{color:color}}>Contact Us</a></li>  */}
                </ul>
        </div>

    </nav>
    
    );
    
};

// Navbar.propTypes={
//     isColorRed :bool
// }

// Navbar.defaultProps = {
//      color: "blue"
// } 

export default Navbar; 