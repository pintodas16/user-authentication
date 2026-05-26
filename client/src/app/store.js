import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authentication/authenticationSlice";

export const store = configureStore({
  reducer: {
    authentication: authSlice, // ✅ changed "auth" to "authentication"
  },
});