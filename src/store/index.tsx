import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: appSlice });

export type AppDispatch = typeof store.dispatch;
export default store;
