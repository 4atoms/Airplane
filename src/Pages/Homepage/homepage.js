import Travelblog from "./TravelBlog/travelblog";
import Navbar from "./Navbar/Navbar"
const Homepage=()=>
{
    return(
        <div> <Navbar isColorRed={false} />
        <Travelblog/></div>        
    );
};
export default Homepage;