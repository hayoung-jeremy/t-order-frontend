import React from "react";
import StyledFooter from "./Footer.style";
import Button from "components/@share/Button/Button";

const icon_cart = "assets/icon/icon_cart.png";

const Footer = () => {
  return (
    <StyledFooter>
      <Button color="WHITE" withIcon iconUrl={icon_cart}>
        장바구니
      </Button>
    </StyledFooter>
  );
};

export default Footer;
