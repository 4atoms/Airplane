import styled from "styled-components";
export const Flexcontainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 30px;
    text-align: center;
    margin-top: 30px;
    
    & > div{
        background-color: #ffffff;
        flex: 25%;
        margin-bottom: 50px;
        font-size: 18px;
    } `;