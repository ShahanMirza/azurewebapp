import React from 'react'
import { Stack, TextField,Typography, Button,Box } from "@mui/material";
interface TabProps{
  firstHead:string;
  secondHead:string; 
  checkImage:boolean;
  image?:string|undefined;
}
function TabDiv({firstHead,secondHead,checkImage,image}:TabProps) {
  
  return (
        <Box style={{textAlign:"center"}}>
          {checkImage &&(
            <img src={image} style={{width:"55px",height:"55px", marginTop:"90px",marginBottom:"30px"}}/>)
          }
            <Typography variant='h2' sx={{ fontWeight: 'bold',justifyContent:"center",mt:5,mb:2 }}>{firstHead}</Typography>
            <Typography variant='h5'sx={{justifyContent:"center",mt:2,mb:8}}>{secondHead}</Typography>
        </Box>
  )
}

export default TabDiv