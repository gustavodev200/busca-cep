import React from "react";
import styled from "styled-components";
import BuscaCep from "./components/BuscaCep";

function App() {
  return (
    <Body>
      <BuscaCep />
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
`;

export default App;
