import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  body{
    font-family: "Noto Sans KR", sans-serif;
  }
  button{
    border:none;
    outline:none;
  }
`;

export default GlobalStyle;
