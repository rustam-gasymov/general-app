import { createSlice } from "@reduxjs/toolkit";

export const configureToolsSlice = createSlice({
  name: "configureTools",
  initialState: {
    isLoading: false,
    isModalVisible: false,
    value: 0,
  },
  reducers: {
    changeVisibilityOfConfigureForm: (state, { payload }) => {
      state.isModalVisible = payload;
    },
    setDecrementValue: (state) => {
      console.log(11111111);

      state.value = state.value - 1;
    },
  },
  extraReducers: {},
});

export const { changeVisibilityOfConfigureForm, setDecrementValue } = configureToolsSlice.actions;

export default configureToolsSlice.reducer;
