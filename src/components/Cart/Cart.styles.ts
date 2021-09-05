import styled from "styled-components";

const StyledCart = styled.aside`
  width: 315px;
  background-color: #f5f5f5;
  z-index: 1;
  transition: width 0.2s;

  &.hide {
    width: 0;
  }
`;

export default StyledCart;
