import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Decrement } from "./Decrement";

const TaskBoxData = {
  tasks: [],
  status: "idle",
  error: null,
};

const TasksSlice = createSlice({
  name: "taskbox",
  initialState: TaskBoxData,
  reducers: {
    updateTaskState: (state, action) => {
      const { id, newTaskState } = action.payload;
      const task = state.tasks.findIndex((task) => task.id === id);
      if (task >= 0) {
        state.tasks[task].state = newTaskState;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    taskbox: TasksSlice.reducer,
  },
});

export default {
  title: "Decrement",
  component: Decrement,
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
};

export const Default = () => <Decrement />;
