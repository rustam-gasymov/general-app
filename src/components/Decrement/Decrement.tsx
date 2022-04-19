import { useDispatch, useSelector } from "react-redux";
import styles from "./Decrement.module.css";
import "./decrement.css";

export const Decrement = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);
  console.log("dispatch");

  const handleClick = () => {
    console.log("helloccccc world");
    //@ts-ignore
    dispatch(setDecrementValue());
  };

  return (
    <button className="btn" onClick={handleClick}>
      Decrement
    </button>
  );
};

// export const Increment = () => {
//   return <button onClick={() => console.log(1111)}>Increment</button>;
// };
