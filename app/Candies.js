import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
      <ul>
      {candies && candies.length? candies.map((candy) => (
        <li key={candy.id}>{candy.name}</li>
      )) : null}
      </ul>
    </div>
  )
};

export default Candies;
