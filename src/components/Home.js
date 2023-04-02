import React from "react";
import styled from "styled-components";
import Section from "./Section";
import useScrollSnap from 'react-use-scroll-snap';
import { useRef } from "react";

function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Leasing starting ar $399/mo"
        backgroundImage="model-3.jpg"
        downArrow="/images/down-arrow.svg"
        leftBtn= "Custom Order"
        rightBtn= "Demo Drive"
      />
      <Section
        title="Model Y"
        description=""
        backgroundImage="model-y.jpg"
        downArrow=""
        leftBtn= "Custom Order"
        rightBtn= "Demo Drive"
      />
      <Section
        title="Model S"
        description=""
        backgroundImage="model-s.jpg"
        downArrow=""
        leftBtn= "Custom Order"
        rightBtn= "Demo Drive"
      />
      <Section
        title="Model X"
        description=""
        backgroundImage="model-x.jpg"
        downArrow=""
        leftBtn= "Custom Order"
        rightBtn= "Demo Drive"
      />
      <Section
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        downArrow=""
        leftBtn= "Order Now"
        rightBtn= "Learn More"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImage="solar-roof.jpg"
        downArrow=""
        leftBtn= "Order Now"
        rightBtn= "Learn More"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImage="accessories.jpg"
        downArrow=""
        leftBtn= "Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
