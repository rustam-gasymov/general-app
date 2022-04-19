import { useSelector } from "react-redux";

export const Decrement = () => {
  const state = useSelector((state) => state);

  console.log(state);

  return <button>Decrement</button>;
};
