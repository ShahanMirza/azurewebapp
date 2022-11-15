import { Toolbar, Typography } from "@material-ui/core";
import { AppBar, useMediaQuery, useTheme } from "@mui/material";
import Avada from "../avada-logo-svg.svg";
import "./navbar.css";
function Navbar() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <div>
      <AppBar
        position="static"
        sx={{ marginBottom: 10 }}
        color="default"
        elevation={1}
      >
        <Toolbar className="toolbar">
          <img src={Avada} />
          {!matchesXS && (
            <>
              <Typography>Avada For</Typography>
              <Typography>Features</Typography>
              <Typography>Elements</Typography>
              <Typography>PreBuilt Websites</Typography>
              <Typography className="what">
                <p>What's New</p>
              </Typography>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
