import React from "react";
import GlobalStyle from "./styles/Global";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";

export default function App() {
  return (
    <>
      <NavBar />,
      <Home />
      <GlobalStyle />
    </>
  );
}
