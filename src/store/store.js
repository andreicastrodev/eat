import { configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipe-slice";
import loadingSlice from "./loading-slice";
import logger from "redux-logger";
const store = configureStore({
  reducer: { recipe: recipesSlice.reducer, loading: loadingSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
