import { useState, useEffect } from "react";
import { TextField, Button, Typography, Alert, Box } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  isValidEmail,
  isValidPassword,
} from "../configs/utils/signupValidations";
import {
  signupFailure,
  signupSuccess,
  clearMessages,
} from "../store/modules/signup/signupSlice";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const dispatch = useAppDispatch();
  const { error, successMessage } = useAppSelector((state) => state.signup);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const navigate = useNavigate();

  // efeito para limpar as mensagens
  useEffect(() => {
    return () => {
      dispatch(clearMessages());
    };
  }, [dispatch]);

  // efeito para fazer a navegação até a página de login após o cadastro com sucesso
  useEffect(() => {
    if (successMessage) {
      navigate("/login");
    }
  }, [successMessage, navigate]);

  //limpar as mensagens quando o usuário inciar novamente a digitação
  const handleInputChange = () => {
    if (error) {
      dispatch(clearMessages());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      dispatch(signupFailure("Email inválido"));
      return;
    }

    if (!isValidPassword(senha)) {
      dispatch(
        signupFailure(
          "Senha inválida. A senha deve ter pelo menos 5 caracteres e não pode ter sequência de numeros e letras."
        )
      );
      return;
    }

    if (senha !== confirmarSenha) {
      dispatch(signupFailure("As senhas não correspondem"));
      return;
    }

    dispatch(signupSuccess({ email, senha, confirmarSenha }));

    // limpar os campos do formulário
    setEmail("");
    setSenha("");
    setConfirmarSenha("");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
    >
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          border: "1px solid #ccc",
          borderRadius: 4,
          boxShadow: 3,
          maxWidth: 400,
          width: "100%",
        }}
      >
        <Typography variant='h4' align='center' gutterBottom>
          Signup
        </Typography>
        {error && <Alert severity='error'>{error}</Alert>}
        {successMessage && <Alert severity='success'>{successMessage}</Alert>}
        <TextField
          label='Email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            handleInputChange();
          }}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Senha'
          type='password'
          value={senha}
          onChange={(e) => {
            setSenha(e.target.value);
            handleInputChange();
          }}
          fullWidth
          margin='normal'
        />
        <TextField
          label='Confirmar Senha'
          type='password'
          value={confirmarSenha}
          onChange={(e) => {
            setConfirmarSenha(e.target.value);
            handleInputChange();
          }}
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
          Sign Up
        </Button>
        <Button
          variant='text'
          color='secondary'
          onClick={handleLoginRedirect}
          fullWidth
          sx={{ mt: 2 }}
        >
          Se já tem cadastro, clique aqui!
        </Button>
      </Box>
    </Box>
  );
}
