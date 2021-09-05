import PALETTE from "constants/palette";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./Global.style";

ReactDOM.render(
  <ThemeProvider theme={PALETTE}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
