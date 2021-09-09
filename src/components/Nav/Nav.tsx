import React, { useEffect, useState } from "react";
import StyledNav from "./Nav.style";
import { CategoryProps } from "types";
import useFetch from "hooks/useFeth";

const Nav = () => {
  // const [categoryList, setCategoryList] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3001/categories")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setCategoryList(data);
  //     });
  // }, []);

  const [data] = useFetch("http://localhost:3001/categories");

  return (
    <StyledNav>
      <ul>
        {data!.map((item: CategoryProps) => {
          return <li key={item.categoryId}>{item.categoryName}</li>;
        })}
      </ul>
    </StyledNav>
  );
};

export default Nav;
