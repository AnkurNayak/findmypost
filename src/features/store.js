import { configureStore } from "@reduxjs/toolkit";
import { blogApi } from "./api/blogApi";
import mainSliceReducer from "./slices/mainSlice";

export const store = configureStore({
  reducer: {
    [blogApi.reducerPath]: blogApi.reducer,
    main: mainSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(blogApi.middleware),
});
