import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Auth";

const Store = configureStore({
  reducer: { Auth: AuthSlice.reducer },
});

export default Store;