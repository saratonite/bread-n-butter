import React from "react";
import styled from "styled-components";

const HeroStyle = styled.div`
  max-width: 1200px;
  margin: 15px auto;
  padding: 60px;
  text-align: center;
  /* background-color: #ddd; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: orangered;
    margin-bottom: 10px;
    font-size: 45px;
    font-weight: 100;
  }
  h2 {
    margin-bottom: 5px;
    color: #333;
    font-weight: 100;
  }
  p {
    margin-top: 10px;
    color: #666;
    font-size: 22px;
  }
`;
const Index = () => {
  return (
    <HeroStyle>
      <h1> &#9778; Bread & Butter</h1>
      <h2>🔥🔥🔥 Fullstack javascript boilerplate 🔥🔥🔥 </h2>
      <p> &#139; NextJS / &#9883; React / &#134; GraphQL / &#144; MongoDB</p>
    </HeroStyle>
  );
};

export default Index;
