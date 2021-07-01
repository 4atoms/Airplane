import React, { useState, useEffect } from "react";
import {
  InputContainer,
  Container,
  InputComponent,
  SelectComponent,
  OptionComponent,
  OuterContainer,
  ButtonComponent,
  InputElement,
  HotelContainer,
  HotelDetails,
} from "./hotels.style";
import XSlider from "../../Components/InputComponent/XSlider";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/footer";

var puneAPI = "https://run.mocky.io/v3/f13753b4-bde1-422d-aa5e-c34768e28d95";
var bangaloreAPI =
  "https://run.mocky.io/v3/56973ad0-0797-4c61-8fc8-c7a5e57ad79c";
var goaAPI = "https://run.mocky.io/v3/24c6c3ad-9d4a-4a14-8e51-05f2a9e07fcf";
const Hotels = () => {
  const [value, setValue] = useState("Bangalore");
  const [apiresult, setApiResult] = useState([]);
  const [minRating, setMinRating] = useState("1");
  const [maxRating, setMaxRating] = useState("4");

  useEffect(() => {
    console.log("Value changed for city : " + apiresult);
  }, [apiresult]);

  const handleChange = (e) => {
    console.log("city selected " + e.value);
    setValue(e.value);
  };

  const updateMinRating = (minRating) => {
    setMinRating(minRating);
  };

  const updateMaxRating = (maxRating) => {
    setMaxRating(maxRating);
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
    console.log("changed value", { maxRating });
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
          <InputElement>
            <XSlider
              defaultMinValue="1"
              defaultMaxValue="4"
              onMinRatingChange={updateMinRating}
              onMaxRatingChange={updateMaxRating}
              minId="customSelectorMin"
              maxId="customSelectorMax"
              minName="rating-input-min"
              maxName="rating-input-max"
              label="Rating : "
              min="0"
              max="5"
              step="0.5"
            />
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
          {apiresult
            .filter(
              (hotel) => hotel.rating > minRating && hotel.rating < maxRating
            )
            .map((i) => {
              return (
                <HotelDetails key={i.name} ratings={i.rating}>
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
