import React from "react";
import './index.css';

const Travelblog = () => {
    return(
       <>
       <h1 style={{fontSize: '42px'}}>Travel Blog</h1>
        <div class="flex-container">
            
            <div class="flex-item">
                <img src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero2_28charter_1.jpg?6Aw5c27vU4CZHFxUGqPGmRfFhJZWkXek" style={{width: '80%'}} />
                <h3>Image1</h3>
                <p>#FlyLikeAStar with MakeMyTrip’s New Charter Flight Serv...</p>
            </div>

            <div class="flex-item">
                <img src="https://seoimgak.mmtcdn.com/blog/sites/default/files/hero_562.jpg?hncoThn_5OqPcZRrgDR6YqsA9qQTM8TH" style={{width: '80%'}} />
                <h3>Image2</h3>
                <p>6 things to do on business trip</p>
            </div>

           <div class="flex-item">
                <img src="https://seoimgak.mmtcdn.com/blog/sites/default/files/book-an-international-flights_0.jpg?ZXnoPWso01qBtd7QnC7zWWUQ6DEulQjg" style={{width: '80%'}} />
                <h3>Image3</h3>
                <p>Your One-Stop Resource For Country-Wise Travel Guidelin...</p>
            </div>

            <div class="flex-item">
                <img src="https://seoimgak.mmtcdn.com/blog/sites/default/files/heroq.jpg?RV9Bjige7_b1rqOt.01OrFbUgqTlRwtG" style={{width: '80%'}} />
                <h3>Image4</h3>
                <p>Protect Yourself with MakeMyTrip’s Special COVID-19  In...</p>
            </div>

        </div>
        </>
    );
    
};
{/* // Navbar.propTypes = {
//     isColorRed: bool
// } 

// Navbar.defaultProps = {
//      color: "blue"
// }  */}


export default Travelblog;