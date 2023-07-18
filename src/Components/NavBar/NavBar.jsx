import { Button, Container } from "./style";
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

export default function NavBar() {
  const [active, setAtive] = useState("navBarMenu");
  const showNavBar = () => {
    setAtive("navBarMenu showNavBar");
  };

  const [noBg, addBg] = useState("navBarTwo");
  const addBgColor = () => {
    if(window.scrollY >= 10){
      addBg("navBarTwo navBar_With_Bg");
    }else{
      addBg('navBarTwo')
    }
  };
  window.addEventListener('scroll', addBgColor)
  

  const removeNavBar = () => {
    setAtive("navBarMenu");
  };

  return (
    <Container className="flex">
      <div className="navBarOne flex  ">
        <div>
          <SiConsul className="icon" />
        </div>
        <div className="none flex">
          <li className="flex">
            {" "}
            <BsPhoneVibrate /> Support
          </li>
          <li className="flex">
            {" "}
            <AiOutlineGlobal />
            Languages
          </li>
        </div>
        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>
      </div>
      <div className={noBg}>
        <div className="logoDiv">
          <img src={logo} alt="Logo" className="Logo" />
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={removeNavBar} className="listItem">
              Home
            </li>
            <li onClick={removeNavBar} className="listItem">
              About
            </li>
            <li onClick={removeNavBar} className="listItem">
              Offers
            </li>
            <li onClick={removeNavBar} className="listItem">
              Seats
            </li>
            <li onClick={removeNavBar} className="listItem">
              Destinations
            </li>
          </ul>
          <Button>Contact</Button>
        </div>
        <Button className=" flex btnTwo">Contact</Button>
        <div onClick={showNavBar} className="toggle">
          <CgMenuGridO className="icon" />
        </div>
      </div>
    </Container>
  );
}
