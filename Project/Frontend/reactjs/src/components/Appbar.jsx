import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Logo from "../images/images.png";
import { NavLink } from "react-router-dom";
import { blue } from "@mui/material/colors";
import "./Appbar.css";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: blue[700],
  },
  marginRight: "10px",
  color: blue[700],
}));

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#2a9df4", position: "relative" }}
      >
        <Toolbar>
          <img
            src={Logo}
            alt="logo"
            style={{ width: "35px", height: "40px", borderRadius: "20%" }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quiz App
          </Typography>

          <NavLink to="/" style={{ textDecoration: "none" }}>
            <ColorButton variant="contained">Home</ColorButton>
          </NavLink>
          <NavLink to="/Login" style={{ textDecoration: "none" }}>
            <ColorButton variant="contained">Login</ColorButton>
          </NavLink>
          <NavLink to="/Register" style={{ textDecoration: "none" }}>
            <ColorButton variant="contained">Register</ColorButton>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
}