import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from "@reduxjs/toolkit";
import API from "../api";

const initialState = createEntityAdapter().getInitialState({
  spy: null,
  loading: false
});

export const fetchSpy = createAsyncThunk("app/fetchSpy", () => {
  debugger;
  return API.get("/").then((res) => {
    debugger;
    return res.data.results[0];
  });
});

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpy.pending, (state, action) => {
        state.loading = true;
        state.spy = null;
      })
      .addCase(fetchSpy.fulfilled, (state, action) => {
        state.loading = false;
        state.spy = action.payload;
      });
  }
});

const { reducer } = appSlice;
export default reducer;

export const getSpy = (state: any) => state.spy;
export const getIsLoading = (state: any) => state.loading;
