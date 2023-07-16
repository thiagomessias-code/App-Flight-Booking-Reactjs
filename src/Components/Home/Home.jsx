import React from "react";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container className="home flex ">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src="" className="video"></video>
        </div>
        <img src="" alt="img" className="plane" />
      </div>
    </Container>
  );
}
