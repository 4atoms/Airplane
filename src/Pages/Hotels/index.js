import React, { useState, useEffect, useRef } from "react";
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
import XSlider from "../../Components/InputComponent/index";
import Navbar from "../../Components/Navbar/index";
import Footer from "../../Components/Footer/index";
import HotelBookingdisplay from "./hotelBookingDisplay";

var puneAPI = "https://run.mocky.io/v3/f13753b4-bde1-422d-aa5e-c34768e28d95";
var bangaloreAPI =
  "https://run.mocky.io/v3/56973ad0-0797-4c61-8fc8-c7a5e57ad79c";
var goaAPI = "https://run.mocky.io/v3/24c6c3ad-9d4a-4a14-8e51-05f2a9e07fcf";

/** Component to select filters and render hotels based on input selected */
const Hotels = () => {
  const [value, setValue] = useState("Bangalore");
  const [checkinValue, setCheckinValue] = useState(null);
  const [checkoutValue, setCheckoutValue] = useState(null);
  const [guestValue, setGuestValue] = useState(null);
  const [apiresult, setApiResult] = useState([]);
  const [minRating, setMinRating] = useState("1");
  const [maxRating, setMaxRating] = useState("4");
  const [displayDetails, setDisplayDetails] = useState(null);
  const [totalDays, setTotalDays] = useState(null);
  var hotelList;
  const sliderInput = useRef(null);

  useEffect(() => {
    console.log("Value changed for city : " + apiresult);
    console.log("Value changed for city : " + { sliderInput });
  }, [apiresult]);

  /**Method to set city name passed as input
   * @param event
   */
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log("city selected " + value);
    setValue(value);
  };

  /**Method to set checkin date passed as input and format it to MM/DD/YYYY
   * @param event
   */
  const handleCheckInDate = (e) => {
    const {
      target: { value },
    } = e;
    console.log("checkin selected " + value);
    let val = formatDate(value);
    console.log(val);
    setCheckinValue(val);
  };

  /**Method to set checkout date passed as input and format it to MM/DD/YYYY
   * @param event
   */
  const handleCheckOutDate = (e) => {
    const {
      target: { value },
    } = e;
    console.log("checkout selected " + value);
    let val = formatDate(value);
    setCheckoutValue(val);
  };

  /**Method to format date to MM/DD/YYYY
   * @param dateStr
   * @returns newDate
   */
  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    let newDate = `${month}/${day}/${year}`;
    return newDate;
  };

  /**Method to set guest number passed as input
   * @param event
   */
  const handleGuestChange = (e) => {
    const {
      target: { value },
    } = e;
    console.log("Guest selected " + value);
    sliderInput.current = value;
    setGuestValue(value);
  };

  /**Method to update minimum rating
   * @param minRating
   */
  const updateMinRating = (minRating) => {
    setMinRating(minRating);
  };

  /**Method to update maximum rating
   * @param maxRating
   */
  const updateMaxRating = (maxRating) => {
    setMaxRating(maxRating);
  };

  /**Method to fetch API result corresponding to the city name passed
   * @param city
   */
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
    checkDayDifference({ checkinValue, checkoutValue });
  };

  /**Method to determine the stay duration based on check in and check out date
   * @param checkinValue
   * @param checkoutValue
   */
  const checkDayDifference = ({ checkinValue, checkoutValue }) => {
    var date1 = new Date(checkinValue);
    var date2 = new Date(checkoutValue);
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var differenceInDays = Difference_In_Time / (1000 * 3600 * 24);
    setTotalDays(differenceInDays);
  };

  /**Method to display booking details for selected hotel name
   * @param name - Hotel's name
   */
  const displayBooking = (name) => {
    console.log("called for " + name);
    setDisplayDetails(name);
  };

  return (
    <>
      <Navbar />
      <OuterContainer>
        <Container>Book Domestic hotels and homestays now!</Container>
        <InputContainer>
          <InputElement>
            Select a city
            <SelectComponent id="city" onChange={(e) => handleChange(e)}>
              <OptionComponent value="Pune">Pune</OptionComponent>
              <OptionComponent value="Goa">Goa</OptionComponent>
              <OptionComponent value="Bangalore" selected="selected">
                Bangalore
              </OptionComponent>
            </SelectComponent>
          </InputElement>
          <InputElement>
            Check in date
            <InputComponent
              type="date"
              date-format="DD MMMM YYYY"
              onChange={(e) => handleCheckInDate(e)}
            />
          </InputElement>
          <InputElement>
            Check out date
            <InputComponent
              type="date"
              onChange={(e) => handleCheckOutDate(e)}
            />
          </InputElement>
          <InputElement>
            Number of guests
            <InputComponent
              type="number"
              onChange={(e) => handleGuestChange(e)}
            />
          </InputElement>
          <InputElement>
            <XSlider
              ref={sliderInput}
              defaultMinValue="1"
              defaultMaxValue="4"
              onMinRatingChange={updateMinRating}
              onMaxRatingChange={updateMaxRating}
              minId="customSelectorMin"
              maxId="customSelectorMax"
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
                <>
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
                        <input
                          id={i.name}
                          type="button"
                          value="Book now"
                          onClick={() => displayBooking(i.name)}
                        />
                      </div>
                    </div>
                  </HotelDetails>
                  <div>
                    {displayDetails == i.name && (
                      <HotelBookingdisplay
                        checkinDate={checkinValue}
                        checkoutDate={checkoutValue}
                        price={i.price}
                        guests={guestValue}
                        totalDays={totalDays}
                      />
                    )}
                  </div>
                </>
              );
            })}
        </HotelContainer>
      </OuterContainer>
      <Footer />
    </>
  );
};
export default Hotels;
