export interface Signup {
  email: string;
  senha: string;
  confirmarSenha: string;
}

export interface SignupState {
  data: Signup;
  error: string | null;
  successMessage: string | null;
}
