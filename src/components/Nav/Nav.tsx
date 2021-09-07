import React, { useEffect, useState } from "react";
import StyledNav from "./Nav.style";
import { CategoryProps } from "types";

const Nav = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCategoryList(data);
      });
  }, []);

  return (
    <StyledNav>
      <ul>
        {categoryList.map((item: CategoryProps) => {
          return <li key={item.categoryId}>{item.categoryName}</li>;
        })}
      </ul>
    </StyledNav>
  );
};

export default Nav;
