import React from "react";
import './index.css';
const ContactUs = () => {
    return (
        <div className = "contactFlex">
            <div className = "contact-item">
                <div className = "contact-content font">
                    <h2>Contact Us</h2>
                    <p>MakeMyTrip India Pvt. Ltd.,</p>
                        <p>DLF Building No. 5 Tower B DLF Cyber City</p>
                        <p> DLF Phase 2 Sector 25, Gurugram, Haryana 122002, India</p>
                    <h3>Fixed Line :</h3>
                    <p>(0124) 4628747</p>
                    <p>(0124) 5045105</p>
                    <p>(0124) 2898000</p>
                </div>
            </div>
            <div className = "contact-item">
                <div className = "contact-content font">
                    <h2>Write us an email !</h2>
                    <div className = "centerAlign">
                        <input className = "text" type = "text" id = "email"/>
                    </div>
                    <div className = "centerAlign topPadding">
                    <input className = "font" type = "button" value = "Send email"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactUs;