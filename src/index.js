import React from "react";
import  ReactDOM  from "react-dom";
import Navbar from './Pages/Navbar';
import Travelblog from './Pages/Travelblog';

ReactDOM.render(
    
    <React.StrictMode>
        {/* <div>Hello Archit</div> */}
        <Navbar isColorRed={false} />
        <Travelblog/>
    </React.StrictMode>,
    document.getElementById("app-root")
    
);