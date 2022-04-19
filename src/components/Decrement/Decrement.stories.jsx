// import { Decrement } from "./Decrement";
// import { Provider } from "react-redux";

// import { configureStore, createSlice } from "@reduxjs/toolkit";

// const slice = createSlice({
//   name: "decrement",
//   initialState: {},
//   reducers: {},
// });

// const store = configureStore({
//   user: slice.reducer,
// });
// // import { createStore } from "redux";

// // const store = createStore(() => [], {}, applyMiddleware());

// // More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// export default {
//   title: "Example/Decrement",
//   component: Decrement,
//   // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
//   argTypes: {
//     backgroundColor: { control: "color" },
//   },
// };

// // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => (
//   <Provider store={store}>
//     <Decrement {...args} />
//   </Provider>
// );

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   primary: true,
//   label: "Button",
// };

// import { Formik } from 'formik';
// import { ThemeProvider } from '../../../components';
// import { TextField } from './TextField';
// import { Provider } from "react-redux";
import { Decrement } from "./Decrement";

export default {
  title: "Decrement",
  component: Decrement,

  argTypes: {},
};

const Template = (args) => <Decrement {...args} />;

export const Example = Template.bind({});

Example.args = {
  name: "test",
  label: "Label",
  placeholder: "Placeholder...",
};
