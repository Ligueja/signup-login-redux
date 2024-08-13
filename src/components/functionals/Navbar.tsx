import HomeIcon from "@mui/icons-material/Home";

import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position='static' sx={{ backgroundColor: "blue" }}>
      <Toolbar component='nav'>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={() => navigate("/")}
        >
          <HomeIcon />
        </IconButton>

        <Typography
          variant='h6'
          sx={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "35px",
            paddingTop: "10px",
          }}
        >
          SigUp e Login
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
