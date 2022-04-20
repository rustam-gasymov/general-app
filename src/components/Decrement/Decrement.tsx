import "./decrement.css";
import { useAppDispatch, useAppSelector } from "../../app";
import { setDecrementValue, setNumber } from "../../features/counter/counterSlice";
import React from "react";

export const Decrement = () => {
  const [value, setValue] = React.useState(0);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("hi i am decrementus with state and new reducer!!!! Am ia working?????");
    setValue((prev) => prev + 112);
    dispatch(setDecrementValue());
    dispatch(setNumber(100));
    console.log("its current value from usestate", value);
    console.log(state.configureTools);
  };

  return (
    <button className="btn" onClick={handleClick}>
      Decrement
    </button>
  );
};
