import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser, loginUser, forgotPassword, resetPassword, getMe } from "./authenticationApi";

const initialState = {
  user: null,
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
  successMessage: null,
  isInitialized: false, // ✅ add this
};

// ── Async Thunks ──────────────────────────────────────────

export const registerUserThunk = createAsyncThunk(
  "authentication/register",
  async (formData, { rejectWithValue }) => {
    try {
      return await registerUser(formData);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Registration failed");
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "authentication/login",
  async (formData, { rejectWithValue }) => {
    try {
      return await loginUser(formData);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const forgotPasswordThunk = createAsyncThunk(
  "authentication/forgotPassword",
  async (email, { rejectWithValue }) => {
    try {
      return await forgotPassword(email);
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Forgot password request failed");
    }
  }
);

export const resetPasswordThunk = createAsyncThunk(
  "authentication/resetPassword",
  async ({ token, password }, { rejectWithValue }) => {
    try {
      return await resetPassword({ token, password });
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Reset password request failed");
    }
  }
);

export const getMeThunk = createAsyncThunk(
  "authentication/getMe",
  async (_, { rejectWithValue }) => {
    try {
      return await getMe();
    } catch (error) {
      return rejectWithValue(error.message || "Failed to fetch user");
    }
  }
);

// ── Slice ─────────────────────────────────────────────────

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isInitialized = false; // ✅ reset on logout
      localStorage.removeItem("token");
    },
    clearMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    const handlePending = (state) => {
      state.loading = true;
      state.error = null;
      state.successMessage = null;
    };

    // Register
    builder
      .addCase(registerUserThunk.pending, handlePending)
      .addCase(registerUserThunk.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Registration successful! Please login.";
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Login
    builder
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isInitialized = true; // ✅ ready after login
      })
      .addCase(loginUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Forgot Password
    builder
      .addCase(forgotPasswordThunk.pending, handlePending)
      .addCase(forgotPasswordThunk.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Reset link sent! Check your email.";
      })
      .addCase(forgotPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Reset Password
    builder
      .addCase(resetPasswordThunk.pending, handlePending)
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.loading = false;
        state.successMessage = "Password reset successfully! Please login.";
      })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Get Me
    builder
      .addCase(getMeThunk.pending, (state) => {
        state.isInitialized = false; // ✅ verifying token
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isInitialized = true; // ✅ verified — stay on page
      })
      .addCase(getMeThunk.rejected, (state) => {
        state.user = null;
        state.token = null;
        state.isInitialized = true; // ✅ verified — but invalid token
        localStorage.removeItem("token");
      });
  },
});

export const { logout, clearMessages } = authSlice.actions;
export default authSlice.reducer;