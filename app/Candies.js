import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { fetchCandiesAsync, selectCandies } from "./candiesSlice";

const Candies = () => {
  const candies = useSelector(selectCandies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandiesAsync());
  }, [dispatch]);

  return (
    <div>
      {candies && candies.length? candies.map((candy) => (
        <NavLink key={candy.id} to={`/candies/${candy.id}`} >{candy.name}</NavLink>
      )) : null}
    </div>
  )
};

export default Candies;
