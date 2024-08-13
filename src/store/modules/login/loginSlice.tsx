import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Login, LoginState } from "../../../configs/interfaces/loginInterfaces";
import { RootState } from "../..";

const initialState: LoginState = {
  data: { email: "", senha: "" },
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<Login>) {
      state.data = action.payload;
      state.error = null;
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearLoginError(state) {
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, clearLoginError } =
  loginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export const loginReducer = loginSlice.reducer;
