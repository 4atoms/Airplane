import React, { Component } from "react";
// import { bool } from "prop-types";
import  ReactDOM  from "react-dom";
import './index.css';
const Navbar = ({isColorRed}) => {
    return(
   
    <nav className="navbar">

        <div className="brand-logo">
            <img src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" style={{width: '50%'}}  />
        </div>
            
        <a href="#" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>

        <div className="navbar-links">
                <ul>
                    <Link to="/flights" style={{color:(isColorRed? "red" : "blue")}}>Flights</a></li>
                    <Link><a href="#hotels" style={{color:(isColorRed? "red" : "blue")}}>Hotels</a></li>
                    <Link><a href="#contactus" style={{color:(isColorRed? "red" : "blue")}}>Contact Us</a></li> 
                    {/* <li><a href="#home" style={{color:color}}>Flights</a></li>
                    <li><a href="#news" style={{color:color}}>Hotels</a></li>
                    <li><a href="#contact" style={{color:color}}>Contact Us</a></li>  */}
                </ul>
        </div>

    </nav>
    
    );
    
};
// Navbar.propTypes = {
//     isColorRed: bool
// } 

// Navbar.defaultProps = {
//      color: "blue"
// } 


export default Navbar; 