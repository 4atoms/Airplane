import React, {useState, useEffect} from "react";
import { InputContainer, Container,InputComponent,SelectComponent,OptionComponent,OuterContainer,ButtonComponent,InputElement } from "./hotels.style";
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/footer";
const Hotels=()=>
{

  const [value, setValue] = useState("Bangalore");
  const [apiresult, setApiResult] = useState([]);

  useEffect(() => {
    console.log("Value changed for city : " + apiresult);
  }, [apiresult]);

  const handleChange = (e) => {
    console.log("city selected " + e.value);
    setValue(e.value);
  };

  var hotelList;
  const getHotels = async (city) => {
    console.log("city name " + city.value);
    var api;
    switch (city.value) {
      case "Pune":
        api = puneAPI;
        break;
      case "Bangalore":
        api = bangaloreAPI;
        break;
      case "Goa":
        api = goaAPI;
        break;
    }
    const response = await fetch(api);
    const jsonArray = await response.json();

    hotelList = jsonArray.hotels;
    console.log("api response", { hotelList });
    const modifiedHotelArray = hotelList.map((hotel) => {
      return {
        name: hotel.name,
        rating: hotel.rating,
        image: hotel.image,
        price: hotel.price,
      };
    });
    setApiResult(modifiedHotelArray);
    console.log("changed value", { apiresult });
    return <div>{apiresult}</div>;
  };

  return (
    <>
      <Navbar />
      <OuterContainer>
        <Container>Book Domestic hotels and homestays now!</Container>
        <InputContainer>
          <InputElement>
            Select a city
            <SelectComponent
              id="city"
              onChange={(e) => handleChange({ value: e.target.value })}
            >
              <OptionComponent value="Pune">Pune</OptionComponent>
              <OptionComponent value="Goa">Goa</OptionComponent>
              <OptionComponent value="Bangalore" selected="selected">
                Bangalore
              </OptionComponent>
            </SelectComponent>
          </InputElement>
          <InputElement>
            Check in date
            <InputComponent type="date" />
          </InputElement>
          <InputElement>
            Check out date
            <InputComponent type="date" />
          </InputElement>
          <InputElement>
            Number of guests
            <InputComponent type="number" />
          </InputElement>
        </InputContainer>
        <ButtonComponent>
          <InputComponent
            type="button"
            value="Search!"
            onClick={() => getHotels({ value })}
          />
        </ButtonComponent>
        <HotelContainer>
          {apiresult.map((i) => {
            return (
              <HotelDetails ratings={i.rating}>
                <div>
                  <img src={i.image} />
                </div>
                <div>{i.name}</div>
                <div>
                  <div>
                    <div>Rating </div>
                    <div>{i.rating}</div>
                  </div>
                  <div>
                    <div>{i.price}</div>
                    <p>Per night</p>
                  </div>
                  <div>
                    <input type="button" value="Book now" />
                  </div>
                </div>
              </HotelDetails>
            );
          })}
        </HotelContainer>
      </OuterContainer>
      <Footer />
    </>
  );
};
export default Hotels;
