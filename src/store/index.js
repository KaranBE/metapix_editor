import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers"; // Your root reducer file

const store = configureStore({
  reducer: rootReducer, // Pass your root reducer
  devTools:
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__(), // Enable Redux DevTools Extension in non-production environment
});

export default store;
