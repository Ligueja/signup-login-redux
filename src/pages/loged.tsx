import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function Loged() {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      bgcolor='#f5f5f5'
    >
      <Box display='flex' alignItems='center'>
        <CheckCircleIcon sx={{ color: "green", fontSize: 40, mr: 1 }} />
        <Typography variant='h4' color='textPrimary'>
          Login realizado com sucesso!
        </Typography>
      </Box>
    </Box>
  );
}
