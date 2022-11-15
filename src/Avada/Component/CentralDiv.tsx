import React,{useState,useEffect} from "react";
import homehero from "./home-hero.webp";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import { Stack } from '@mui/material';
import { Stack, TextField,Typography, Button,Box } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery'
import { Variant } from "@material-ui/core/styles/createTypography";
import { Grid } from '@mui/material';

import "./central.css";
function CentralDiv() {
  const matches = useMediaQuery("(max-width:768px)");
  const matchesXS = useMediaQuery("(max-width:450px)");
  const matchesMD = useMediaQuery("(max-width:1024px)");
  return (
    <Box>
      <Box className='centralbox'>
      <Grid container spacing={0}>
        <Grid item xs={3} sm={4} md={6}>
        <Box className="homedes" component="div" sx={{ display: { xs: 'block', md: 'none', lg: 'block' } }}>
          <Typography variant="h1">
            The Ultimate Portfolio Website Builder
          </Typography>
          <Typography variant="h4">
            Trusted by beginners, marketers & professionals; Built with
            usability and performance in mind.
          </Typography>
          <Button className="changebtn" sx={{bgcolor: '#282828',mt:'20px',mb:'20px',p:'20px',fontWeight:900}} variant="contained">Start Building<ArrowForwardIcon/></Button>
          <Box className='boxsection'>
          <Stack direction="column" justifyContent="start">
            <Typography variant='h2' sx={{ fontWeight: 'bold' }}>825k+</Typography>
            <Typography variant='h5'>People Trust Avada</Typography>
          </Stack>

        <Stack direction="column" justifyContent="center"
            alignItems="center">
          <Typography variant='h2' sx={{ fontWeight: 'bold' }}>25k+</Typography>
            <Typography variant='h5'>Average 5-Star Reviews</Typography>
          </Stack>
          </Box>
        </Box>
        </Grid>
        <Grid item xs={4} sm={6} md={6}>
        <Box className="centraldiv1"><img className='homepic' src={homehero}/></Box>
        </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default CentralDiv;
