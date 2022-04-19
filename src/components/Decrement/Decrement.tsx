import "./decrement.css";
import { useAppDispatch, useAppSelector } from "../../app";
import { setDecrementValue } from "../../features/counter/counterSlice";

export const Decrement = () => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("helloccccc world");
    //@ts-nocheck
    dispatch(setDecrementValue());
  };

  return (
    <button className="btn" onClick={handleClick}>
      Decrement
    </button>
  );
};
