import { Container, Link, Typography } from "@mui/material";

export function Footer() {
  return (
    <Container component='footer'>
      <Typography
        variant='body2'
        color={"GrayText"}
        textAlign='center'
        marginTop={3}
      >
        Copyright &copy;&nbsp;
        <Link href='https://google.com.br' target='_blank'>
          Meu site
        </Link>
        &nbsp;
        {new Date().getFullYear()}.
      </Typography>
    </Container>
  );
}
