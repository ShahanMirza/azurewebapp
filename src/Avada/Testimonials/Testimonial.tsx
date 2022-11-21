import { Box, Typography,Grid } from "@mui/material";
import squarebird from "./squarebird-logo.webp";
import testimonialImg from "./testimonial.webp";
function Testimonial() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", mt: 10 }}>
      <Grid container >
      <Grid item md={6}>
      <Box sx={{ flex: "1 0 auto", }}>
        <img src={testimonialImg} style={{ width: "100%", height: "720px" }} />
      </Box>
      </Grid>
      <Grid item md={6}>
      <Box
        sx={{
          flex: "1 0 auto",
          // width: "50%",
          height: "720px",
          backgroundColor: "#fee979",
          flexFlow: "column",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            p: 10,
            fontWeight: 600,
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          “We choose to specialise in Avada because it is both functional and
          practical, and our clients simply love it! It has stood the test of
          time and continues to evolve – an excellent solution for our talented
          design team, who continue to push the boundaries.”
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 6 }}>
          <img
            src={squarebird}
            style={{ justifyContent: "flex-start", marginRight: "10px" }}
          />
          <Typography variant="h5" sx={{ fontWeight: "900" }}>
            Squarebird
          </Typography>
        </Box>
        <Typography>https://www.squarebird.co.uk</Typography>
      </Box>
      </Grid>
      </Grid>
    </Box>
  );
}

export default Testimonial;
