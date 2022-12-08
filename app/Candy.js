import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCandyAsync,
  increment,
  decrement,
  selectCandy,
} from "./candySlice";

const Candy = () => {
  const { candyId } = useParams();

  const candy = useSelector(selectCandy);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandyAsync(candyId));
  }, [dispatch]);

  return (
    <div>
      <p>{candy.name}</p>
      <p>{candy.description}</p>
      <p>{candy.quantity}</p>
      <button type="button" onClick={() => dispatch(increment())}>MORE!</button>
      <button type="button" onClick={() => dispatch(decrement())}>less...</button>
      <img src={candy.imageUrl} />
    </div>
  );
};

export default Candy;
