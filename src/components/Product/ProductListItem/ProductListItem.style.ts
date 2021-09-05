import styled from "styled-components";
import PALETTE from "./../../../constants/palette";

const StyledProductListItem = styled.li`
  min-height: 250px;
  max-height: 334px;
  display: grid;
  grid-template-rows: 12.5vw auto;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  color: ${PALETTE.WHITE};

  & .product-img {
    width: 100%;
    height: 12.5vw;
    min-height: 160px;
    max-height: 212px;
    overflow: hidden;
    text-align: center;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .soldout-cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    left: 0;
  }

  & .product-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;

    & .product-name {
      font-size: 1.25vw;
    }
  }
`;

export { StyledProductListItem };
