import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice"
import gptReducer from "../utils/gptSlice"

const appStore = configureStore({
  reducer: {
    user : userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
