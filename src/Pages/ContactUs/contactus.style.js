import styled from "styled-components";

export const ContactFlex = styled.div`
    display: flex;
    width: 100%;
    height: 80vh;
    align-items: center;
    background-size: auto;
    background-image: url("https://st2.depositphotos.com/1826664/5444/i/950/depositphotos_54440289-stock-photo-contact-us-background-pattern-blue.jpg");
       /* margin-bottom: 160px; */
  `;

export const Contact_item = styled.div`
    
    flex : 50%;
    padding :5%;
    /* height: 100%; */
    align-items: center;
  `;

export const Contact_content = styled.div`
    background-color: #ffffff;
    opacity: 0.7;
    border : solid;
    padding: 10px;
    border-radius: 2em;
    height: 100%;
    font-size: 0.7em;
  `;

export const Text = styled.input`
    height: 90px;
    width: 80%;
    
  `;

export const CenterAlign = styled.div`
    text-align: center
  `;

export const TopPadding = styled.div`
  padding-top : 20px;
`;

export const Font = styled.div`
  font-size: 0.5em;
`;