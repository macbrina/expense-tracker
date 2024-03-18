import { configureStore } from "@reduxjs/toolkit";
import expenseReducers from "./expense";

export const store = configureStore({
  reducer: {
    expenseCtx: expenseReducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
