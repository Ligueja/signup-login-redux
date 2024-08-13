import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  Signup,
  SignupState,
} from "../../../configs/interfaces/signupInterfaces";
import { RootState } from "../..";

const initialState: SignupState = {
  data: { email: "", senha: "", confirmarSenha: "" },
  error: null,
  successMessage: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    signupSuccess(state, action: PayloadAction<Signup>) {
      state.data = action.payload;
      state.error = null;
      state.successMessage = "Cadastro realizado com sucesso!";
    },
    signupFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    clearMessages(state) {
      state.error = null;
      state.successMessage = null;
    },
  },
});

export const { signupSuccess, signupFailure, clearMessages } =
  signupSlice.actions;

export const selectSignup = (state: RootState) => state.signup;

export const signupReducer = signupSlice.reducer;
