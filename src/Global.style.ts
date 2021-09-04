import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
 
  body {
    padding: 0;
    background-color: black;
  }
`;

export default GlobalStyle;
