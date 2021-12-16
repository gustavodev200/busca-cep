import { createGlobalStyle } from "styled-components";
import bg from '../img/conect.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: url(${bg});
    background-size: cover;
  }
`;

export default GlobalStyle;
