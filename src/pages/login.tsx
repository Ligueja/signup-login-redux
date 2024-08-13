import { useState } from "react";
import { TextField, Button, Typography, Alert, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  loginFailure,
  loginSuccess,
  clearLoginError,
} from "../store/modules/login/loginSlice";
import { useNavigate } from "react-router-dom";

export function Login() {
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.login);
  const { email: storedEmail, senha: storedSenha } = useAppSelector(
    (state) => state.signup.data
  );

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== storedEmail || senha !== storedSenha) {
      dispatch(loginFailure("Email ou senha incorretos"));
      return;
    }

    // direcionar para pagina de "logado" caso login ocorrer com sucesso
    dispatch(loginSuccess({ email, senha }));
    navigate("/loged");
  };

  const handleSignupRedirect = () => {
    navigate("/");
  };

  // se usuário digitar novamente o e-mail para arrumar o e-mail errado a mensagem de erro apaga
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) dispatch(clearLoginError());
  };

  // se usuário digitar novamente a senha para arrumar a que estava errada a mensagem de erro apaga
  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
    if (error) dispatch(clearLoginError());
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      flexGrow={1}
    >
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          p: 5,
          border: "1px solid #ccc",
          borderRadius: 4,
          boxShadow: 3,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant='h4' align='center' gutterBottom>
          Login
        </Typography>
        {error && <Alert severity='error'>{error}</Alert>}
        <TextField
          label='Email'
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Senha'
          type='password'
          value={senha}
          onChange={handleSenhaChange}
          fullWidth
          margin='normal'
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
        <Button
          variant='text'
          color='secondary'
          onClick={handleSignupRedirect}
          fullWidth
          sx={{ mt: 1 }}
        >
          Ainda não é cadastrado?
        </Button>
      </Box>
    </Box>
  );
}
