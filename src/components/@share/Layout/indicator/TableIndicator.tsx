import React from "react";

import {
  StyledTableIndicator,
  StyledTableNumber,
} from "./TableIndicator.style";

const TableIndicator = () => {
  return (
    <StyledTableIndicator>
      <p className="table-description">테이블 명</p>
      <StyledTableNumber>12</StyledTableNumber>
    </StyledTableIndicator>
  );
};

export default TableIndicator;
