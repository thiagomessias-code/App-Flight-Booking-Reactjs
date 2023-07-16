
import { Container } from "./styles";

import video from '../../assets/video/video.mp4'
import aeroplane from '../../assets/img/aerplane.png'

export default function Home() {
  return (
    <Container className="home flex ">
      <div className="mainText">
        <h1>Create Ever-lasting Memories With Us</h1>
      </div>
      <div className="homeImages flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop className="video"></video>
        </div>
        <img src={aeroplane} alt="img" className="plane" />
      </div>
    </Container>
  );
}
