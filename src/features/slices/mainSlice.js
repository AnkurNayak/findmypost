import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: true,
  deviceType: window.innerWidth,
  searchInputs: { textInput: "", category: "All" },
  searchDone: false,
};

// nv slice
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    toggleVisibility: (state, action) => {
      state.isVisible = action.payload;
    },
    setDeviceType: (state, action) => {
      state.deviceType = action.payload;
    },
    setSearchInput: (state, action) => {
      state.searchInputs = { ...state.searchInputs, ...action.payload };
    },
    setSearchDone: (state, action) => {
      state.searchDone = action.payload;
    },
  },
});

export const {
  toggleVisibility,
  setDeviceType,
  setSearchInput,
  setSearchDone,
} = mainSlice.actions;

export default mainSlice.reducer;
