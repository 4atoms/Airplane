import React from "react";
import {ContactFlex, Contact_content, Contact_item, CenterAlign, Text, TopPadding} from "./contactus.style"

const ContactUs = () => {
  return (
    <ContactFlex>
      <Contact_item>
        <Contact_content>
          <h2>Contact Us</h2>
          <p>MakeMyTrip India Pvt. Ltd.,</p>
          <p>DLF Building No. 5 Tower B DLF Cyber City</p>
          <p> DLF Phase 2 Sector 25, Gurugram, Haryana 122002, India</p>
          <h3>Fixed Line :</h3>
          <p>(0124) 4628747</p>
          <p>(0124) 5045105</p>
          <p>(0124) 2898000</p>
        </Contact_content>
      </Contact_item>
      <Contact_item>
        <Contact_content>
          <h2>Write us an email !</h2>
          <CenterAlign>
            <Text type="text" id="email" />
          </CenterAlign>
          <CenterAlign>
            <TopPadding>
              <input  type="button" value="Send email" />
            </TopPadding>
          </CenterAlign>
        </Contact_content>
      </Contact_item>
    </ContactFlex>
  );
};
export default ContactUs;
