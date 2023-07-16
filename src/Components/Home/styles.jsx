import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10rem;
  text-align: center;
  gap: 2rem;
  flex-direction: column;
  .mainText {
    color: var(--blackColor);
    font-weight: 700;
    font-size: 15px;
    line-height: 2.5rem;
  }
  .homeImages {
    width: 100%;
    margin: 1rem auto 0;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5rem;
  }
  .videoDiv {
    width: 100%;
    .video {
      border-radius: 10rem;
    }
  }
  .plane{
    position: absolute;
    width: 100%;
    top: 10%;
  }
`;
