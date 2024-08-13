import { combineReducers } from "@reduxjs/toolkit";
import { signupReducer } from "./signup/signupSlice";
import { loginReducer } from "./login/loginSlice";

export const rootReducer = combineReducers({
  signup: signupReducer,
  login: loginReducer,
});
