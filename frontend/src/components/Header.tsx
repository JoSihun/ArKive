import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const GrayAppBar = styled(AppBar)({
  backgroundColor: "black",
});

const Header: React.FC = () => {
  return (
    <GrayAppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            The ArKive
          </Link>
        </Typography>
        <Typography variant="h6" component="div" sx={{ mr: 2 }}>
          <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
            About
          </Link>
        </Typography>
        <Typography variant="h6" component="div">
          <Link to="*" style={{ textDecoration: "none", color: "white" }}>
            NotFound
          </Link>
        </Typography>
        <Box textAlign={"right"} flexGrow={1}>
          <Button color="inherit">Login</Button>
        </Box>
      </Toolbar>
    </GrayAppBar>
  );
};

export default Header;
