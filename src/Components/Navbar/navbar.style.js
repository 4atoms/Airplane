import styled from "styled-components";


export const MainContent= styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: rgb(115, 98, 161);
    border: 3px solid black;
    position: sticky;
    top: 0;
    width: 100%;
    `;


export const Brandlogo= styled.div`
    margin-left: 2rem;
    margin-top: 1rem;
    }
    `;

export const Navbarlinks= styled.div`
   & > ul { 
    margin: 0;
    padding: 0;
    display: flex;
    }
    & >ul> li{
        list-style: none;
    }
    & >ul > li > a{
        text-decoration: none;
        color: rgb(115, 98, 161);
        padding: 1rem;
       display: block;
    }
    `; 

//   .navbar-links ul {
//     margin: 0;
//     padding: 0;
//     display: flex;
  
//   .navbar-links li {
//     list-style: none;
//   }
//   .navbar-links li a {
//     text-decoration: none;
//     color: rgb(115, 98, 161);
//     padding: 1rem;
//     display: block;
//   }
  
//   .navbar-links li a:hover {
//     color: tomato;
//   }
  

// export const Practice= styled.nav`
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background-color: white;
//     color: rgb(115, 98, 161);
//     border: 3px solid black;
//     position: sticky;
//     top: 0;
//     width: 100%;
//     `;