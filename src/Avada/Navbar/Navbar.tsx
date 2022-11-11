import React, { useState } from "react";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Avatar,
} from "@material-ui/core";
import Avada from "../avada-logo-svg.svg";
import PixIcon from '@mui/icons-material/Pix';
import "./navbar.css";
function Navbar() {

  return (
    <div>
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar className="toolbar">
          <div>
            <Typography variant="h3">
              <img src={Avada} />
            </Typography>
          </div>

          
          <Typography>Avada For</Typography>
          <Typography>Features</Typography>
          <Typography>Elements</Typography>
          <Typography>PreBuilt Websites</Typography>
          <Typography className="what"><p>What's New</p></Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
