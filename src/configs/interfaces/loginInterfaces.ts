export interface Login {
  email: string;
  senha: string;
}

export interface LoginState {
  data: Login;
  error: string | null;
}
