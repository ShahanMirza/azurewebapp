import React from 'react'
import { Stack, TextField,Typography, Button,Box, Grid } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import livevisual from "../VerticalTab/live-visual.webp";
import Avadalogo from '../TabDiv/Avada.png'
const Footer = () => {
  return (
    <Box sx={{mt:10,position:"relative"}}>
        <Box sx={{display:"flex",backgroundClip: "content-box",p:10,backgroundColor:"#b7f598",flexDirection:"cloumn",borderRadius: 21,zIndex: 0,position:"absolute",bottom:0}}>
        <Grid container alignItems={"center"} >
        <Grid item xs={6} md={6} >
        <Box sx={{ flex:"1 0 auto",alignSelf: "center",p:10}}>
            <Typography variant='h3' sx={{fontWeight:"900"}}>Build Successful Websites With Avada</Typography>
            <Typography variant='h5' sx={{textAlign: "center",mt:2}}>Whether you are a beginner, marketer, or professional, Avada has the tools & resources you can rely on to succeed.</Typography>
            <Button variant="contained" sx={{bgcolor: '#282828',mt:'20px',mb:'20px',p:'15px',fontWeight:900,borderRadius: "4px"}}>Buy Avada for 69$ <ArrowForwardIcon/></Button>
        </Box>
        </Grid>
        <Grid item xs={6} md={6} >
        <Box sx={{ flex:"1 0 auto",ml:10,alignItems: "center"}}>
            <img src={livevisual} style={{width:"100%",height:"auto"}}/>
        </Box>
        </Grid>
        </Grid>
        </Box>
        <Grid item xs={12} md={12}>
        <Box sx={{display: 'flex', position:"absolute",bottom:1,left:0,zIndex:1,flexDirection:"column",bgcolor:"#1a1a1a" ,justifyItems: "stretch",width:'100%',mb:1}}>
            <img src={Avadalogo} style={{width:"55px",height:"55px", marginTop:"90px",marginBottom:"30px",marginLeft:"600px",opacity: 1}}/>
            <Typography variant='h4' sx={{fontWeight:900,alignCenter:"center",alignSelf: "center",color:"white"}}>The Avada Website Builder is brought to you by ThemeFusion.</Typography>
            <Typography sx={{alignSelf: "center",color:"white"}}>© Copyright 2012 – 2022 | Avada Website Builder by ThemeFusion | All rights reserved | Powered by WordPress</Typography>
        </Box>
        </Grid>
       
    </Box>
  )
}

export default Footer