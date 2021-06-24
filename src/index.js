import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from './Navbar';
import Travelblog from "./Travelblog";

ReactDOM.render(
    
    <React.StrictMode>
        {/* <div>Hello Archit</div> */}
        <Navbar isColorRed={false} />
        <Travelblog/>
    </React.StrictMode>,
    document.getElementById("app-root")
    
);