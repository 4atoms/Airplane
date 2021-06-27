import React, {useState, useEffect} from "react";
import { InputContainer, Container,InputComponent,SelectComponent,OptionComponent,OuterContainer,ButtonComponent,InputElement } from "./hotels.style";
import Navbar from '../Homepage/Navbar/Navbar';
import Footer from "../Homepage/Footer/footer";
const Hotels=()=>
{

    var puneAPI = "https://run.mocky.io/v3/dcb0a868-1e85-407e-9055-8fcc22bda502";
    var bangaloreAPI = "https://run.mocky.io/v3/f0904fd1-78a1-4a5f-943d-e5775469660d";

    const [value, setValue] = useState("Pune");
    const [apiresult, setApiResult] = useState([]);

    useEffect(() => {
        console.log("Value changed for city : "+value);
    }, [apiresult]);

    const handleChange = (e) =>{        
        console.log("city selected " +e.value)
        setValue(e.value)

    }

    var hotelList;
    const getHotels = async(city) => {
        console.log("city name "+city.value)
        var api;
        switch(city.value){
            case "Pune":
                api = puneAPI;
                break;
            case "Bangalore":
                api = bangaloreAPI;
                break;
        }
        const response = await fetch(api)
        const jsonArray = await response.json()
                
        hotelList = jsonArray.hotels;
        console.log("api response",{hotelList});
        const modifiedHotelArray = hotelList.map(hotel =>{
            return{"name":hotel.name,"rating":hotel.rating}
        });
        setApiResult(modifiedHotelArray)    
        console.log("changed value",{apiresult})
        
    }
    
    return(
        <>
            <Navbar/>
            <OuterContainer>
                <Container>
                    Book Domestic hotels and homestays now!
                </Container>
                <InputContainer> 
                    <InputElement>
                        Select a city
                        <SelectComponent id = "city" onChange = {(e) => handleChange({value : e.target.value})}> 
                            <OptionComponent value = "Pune">Pune</OptionComponent>
                            <OptionComponent value = "Mumbai">Mumbai</OptionComponent>
                            <OptionComponent value = "Bangalore" selected = "selected">Bangalore</OptionComponent>
                        </SelectComponent>
                    </InputElement>
                    <InputElement>
                        Check in date
                        <InputComponent type="date"/>
                    </InputElement>
                    <InputElement>
                        Check out date
                        <InputComponent type="date"/>
                    </InputElement>
                    <InputElement>
                        Number of guests
                        <InputComponent type="number"/>
                    </InputElement>
                </InputContainer>
                <ButtonComponent>
                    <InputComponent type="button" value = "Search!" onClick = {() => getHotels({value})}/>
                </ButtonComponent>
            </OuterContainer>
            <Footer/>
        </>        
    );
};
export default Hotels;