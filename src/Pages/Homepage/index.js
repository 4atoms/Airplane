import React from "react"; 
import Travelblog from "./TravelBlog/travelblog";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/footer";
const Homepage=()=>
{
    return(
        <div> <Navbar isColorRed={false} />
        <Travelblog/>
        <Footer/>
        </div>       
    );
};
export default Homepage;