import { HiOutlineLocationMarker } from "react-icons/hi";
import {RiAccountCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";
import { Container } from "./styles";

export default function Search() {
  return (
    <Container>
      <div className="sectionContainer grid">
        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>
          <div className="singleBtn">
            <span>Business Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
        </div>
        {/* Single Input*/}
        <div className="searchInput flex">
          <div className="singleInput flex">
            <div className="iconsDiv">
              <HiOutlineLocationMarker className="icon"/>
            </div>
            <div className="texts">
                <h4>Locations</h4>
                <input type="text" placeholder="Where-do-you-want- to-go?"/>
            </div>
          </div>
        </div>
        {/* Single Input*/}
        <div className="searchInput flex">
          <div className="singleInput flex">
            <div className="iconsDiv">
              <RiAccountCircleLine className="icon"/>
            </div>
            <div className="texts">
                <h4>Travel</h4>
                <input type="text" placeholder="|Add guests"/>
            </div>
          </div>
        </div>
        {/* Single Input*/}
        <div className="searchInput flex">
          <div className="singleInput flex">
            <div className="iconsDiv">
              <RxCalendar  className="icon"/>
            </div>
            <div className="texts">
                <h4>Check-in</h4>
                <input type="text" placeholder="Add Date"/>
            </div>
          </div>
        </div>
        <div className="searchInput flex">
          <div className="singleInput flex">
            <div className="iconsDiv">
              <RxCalendar  className="icon"/>
            </div>
            <div className="texts">
                <h4>Check-Out</h4>
                <input type="text" placeholder="Add Date"/>
            </div>
          </div>
          <button className="btn btnBlock flex">
            Search Flight
          </button>
        </div>
      </div>
    </Container>
  );
}
