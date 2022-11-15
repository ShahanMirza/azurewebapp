import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import homehero from "./home-hero.webp";
// import { Stack } from '@mui/material';
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import "./central.css";
function CentralDiv() {
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Box>
      <Box className="centralbox">
        <Grid container>
          <Grid item md={6}>
            <Box
              className="homedes"
              component="div"
              sx={{ display: { xs: "block", md: "none", lg: "block" } }}
            >
              <Typography variant={matchesXS ? "h5" : "h1"}>
                The Ultimate Portfolio Website Builder
              </Typography>
              <Typography variant={matchesXS ? "h6" : "h4"}>
                Trusted by beginners, marketers & professionals; Built with
                usability and performance in mind.
              </Typography>
              <Button
                className="changebtn"
                sx={{
                  bgcolor: "#282828",
                  mt: "20px",
                  mb: "20px",
                  p: "20px",
                  fontWeight: 900,
                }}
                variant="contained"
              >
                Start Building
                <ArrowForwardIcon />
              </Button>
              <Box className="boxsection">
                <Stack direction="column" justifyContent="start">
                  <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    825k+
                  </Typography>
                  <Typography variant="h5">People Trust Avada</Typography>
                </Stack>

                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography variant="h2" sx={{ fontWeight: "bold" }}>
                    25k+
                  </Typography>
                  <Typography variant="h5">Average 5-Star Reviews</Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box className="centraldiv1">
              <img className="homepic" src={homehero} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CentralDiv;
