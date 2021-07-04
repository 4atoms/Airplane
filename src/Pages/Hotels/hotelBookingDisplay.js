import React from "react";
import { string, number } from "prop-types";
import { HotelDetailsContainer } from "./hotels.style";

/** Component to render booking details for selected hotel and filters
 * @param checkinDate
 * @param checkoutDate
 * @param price
 * @param guests
 * @param totalDays
 */
const HotelBookingdisplay = ({
  checkinDate,
  checkoutDate,
  price,
  guests,
  totalDays,
}) => {
  return (
    <>
      <HotelDetailsContainer>
        <div>
          <div>Booking Details :</div>
          <div>Check-In Date : {checkinDate}</div>
          <div>Check-Out Date : {checkoutDate}</div>
          <div>Total Guests : {guests}</div>
        </div>
        <div>
          <div>Booking Summary :</div>
          <div>Total Days : {totalDays}</div>
          <div>
            Total Rooms : {Math.ceil(guests / 2)}
            <span>[2 person/room]</span>
          </div>
          <div>
            Total Amount : Rs.
            {Math.ceil(guests / 2) *
              totalDays *
              price.toString().substring(3, price.length)}{" "}
            /-
          </div>
        </div>
      </HotelDetailsContainer>
    </>
  );
};

HotelBookingdisplay.propTypes = {
  checkinDate: string,
  checkoutDate: string,
  price: number,
  guests: number,
  totalDays: number,
};
export default HotelBookingdisplay;
