import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app";
import { setDecrementValue } from "./DecrementSlice";
import "./decrement.css";

export const Decrement = () => {
  const [value, setValue] = useState(0);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log(
      "hi i am decrementus with state and new reducer!!!! Am ia working????? If not say me!"
    );
    setValue((prev) => prev + 112);
    dispatch(setDecrementValue(value));
    console.log("its current value from usestate", value);
    console.log(state.configureTools);
  };

  return (
    <button className="btn" onClick={handleClick}>
      Decrement
    </button>
  );
};
