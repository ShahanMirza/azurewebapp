import React from 'react';
import {Box,Button,Typography,Card,CardActions,CardContent,Chip} from '@mui/material'
interface CardProps{
  head:string;
  intro:string;
  tags:string;
  image?: string|undefined;
  imagePosition:boolean;
}
function CardComp({head,intro,tags,image,imagePosition}:CardProps) {
  
  return (
    <div>
      {imagePosition &&(
         <img src={image}/>
     )}

      <CardContent sx={{ background: imagePosition ? "transparent" : "yellow"}}>
    <Typography sx={{ fontWeight:imagePosition ? 900 : 300 }} color="text.secondary" gutterBottom>
      {head}
    </Typography>
    <Typography  sx={{ fontWeight:imagePosition ? 100 : 900,variant: imagePosition? "h3":"h1",component: imagePosition? "h3":"h1" }}>
      {intro} 
    </Typography>
    {(!imagePosition) &&(
      <div>
    <img src={image}/>
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      <Chip label={tags} sx={{mt:1}}/>
    </Typography></div>)}
  </CardContent>
  </div>
  )
}

export default CardComp