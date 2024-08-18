import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  login: string;
  auth: boolean;
}
const initialState: User = {
  login: "",
  auth: false,
};

export const authSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    authUser: (state, action: PayloadAction<string>) => {
      state.auth = action.payload !== "";
      state.login = action.payload;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
