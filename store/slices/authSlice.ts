import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/store/store";

interface AuthState {
  name: string | undefined;
  isAuthenticated: boolean;
  jwt: string | undefined;
  pixabayAPIKey: string | undefined;
}

const initialState: AuthState = {
  name: undefined,
  isAuthenticated: false,
  jwt: undefined,
  pixabayAPIKey: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.isAuthenticated = true;
      state.name = action.payload.name;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;
