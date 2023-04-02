import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import Header from "./Header";

function Section(props) {
  return (
    <Wrap bgImage={props.backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtn}</LeftButton>
            {props.rightBtn && <RightButton>{props.rightBtn}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src={props.downArrow}></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-3.jpg");
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; //for vertical alignments
  align-items: center; // for horizomntal alignments
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 255px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 15px;
  @media (max-width: 480px) {
    width: 120px;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin: 20px 0px 0px 260px;
  height: 40px;
  animation: animateDown infinite 1.5s;
  @media (max-width: 480px) {
    margin-left: 50px;
  }
`;
