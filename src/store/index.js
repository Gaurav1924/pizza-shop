import { configureStore } from "@reduxjs/toolkit"; // object destructing req when multiple files might be exported n needs to import
import orderSlice from "./orderSlice";        // for default export {} is not required.
const store = configureStore({
  reducer: {
    order : orderSlice
  },
});
export default store;
