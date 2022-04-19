// import { useDispatch, useSelector } from "react-redux";

export const Decrement = () => {
  // const state = useSelector((state) => state);
  // const dispatch = useDispatch();

  // console.log(state);
  // console.log("dispatch");

  const handleClick = () => {
    console.log("hello world");
    //@ts-ignore
    // dispatch(setDecrementValue());
  };

  return <button onClick={handleClick}>Decrement</button>;
};

// export const Increment = () => {
//   return <button onClick={() => console.log(1111)}>Increment</button>;
// };
