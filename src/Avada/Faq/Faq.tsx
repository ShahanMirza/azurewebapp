import React, { useState } from "react";

import { ExpandMore } from "@material-ui/icons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { Stack, TextField, Typography, Button, Box } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
interface FaqProps{
summary:string;
details:string|any;
}

function Faq({summary,details}:FaqProps) {
  const [expandedPanel, setExpandedPanel] = useState<string|null>(null);
  const handleAccordionChange =
    (panel: string) => (event: any, isExpanded: boolean) => {
      // console.log({ event, isExpanded });
      setExpandedPanel(isExpanded ? panel : null);
    };

  return (
    <Box>
      <Accordion
        expanded={expandedPanel === "panel1"}
        onChange={handleAccordionChange("panel1")}
      
      >
        {/* <AccordionSummary expandIcon={expandedPanel=== "panel1"?<RemoveIcon/>:<AddIcon />} style={{textAlign:"center",paddingLeft:"25%",fontWeight:"bold"}} >
          What is included with my Purchase of Avada
        </AccordionSummary> */}
        <AccordionSummary expandIcon={expandedPanel=== "panel1"?<RemoveIcon/>:<AddIcon />} style={{textAlign:"center",paddingLeft:"25%",fontWeight:"bold"}} >
         {summary}
        </AccordionSummary>
        <AccordionDetails style={{paddingLeft:"25%",fontWeight:"bold"}}>
          {details}
        {/* <ol style={{listStyleType: "none"}}> With your purchase of Avada, you will receive:
          <li><DoneIcon sx={{color:"green",fontSize:"medium"}}/> 6 months of free professional support. </li>
          <li> <DoneIcon sx={{color:"green",fontSize:"medium"}}/>8 bundled premium plugins. Your Content Goes
          Here 120+ Design and Layout Elements.</li>
          <li> <DoneIcon sx={{color:"green",fontSize:"medium"}}/> 550+ detailed help files,
          continually updated to ensure everything is current. </li>
          <li> <DoneIcon sx={{color:"green",fontSize:"medium"}}/>200+ video
          tutorials, with new videos, added regularly. </li>
          <li><DoneIcon sx={{color:"green",fontSize:"medium"}}/> Free, consistent, and
          stable updates to ensure compatibility with industry standards &
          trends. </li>
          <li> <DoneIcon sx={{color:"green",fontSize:"medium"}}/>Avada works with popular 3rd party plugins like Yoast SEO,
          WooCommerce, The Events Calendar, HubSpot, WPML, and more.
          </li>
          </ol> */}
        </AccordionDetails>
      </Accordion>

      {/* <Accordion
        expanded={expandedPanel === "panel2"}
        onChange={handleAccordionChange("panel2")}
      >
        <AccordionSummary expandIcon={expandedPanel=== "panel2"?<RemoveIcon/>:<AddIcon />} style={{textAlign:"center",paddingLeft:"25%",fontWeight:"bold"}}>
          Are there any Recurring fee?
        </AccordionSummary>

        <AccordionDetails style={{paddingLeft:"25%",fontWeight:"bold"}}>
          No, there are no recurring license fees to use Avada. It is a one-time
          purchase that provides you with lifetime updates at no extra cost and
          is valid for life. You can choose to purchase a support extension
          after the initial 6 months of support has expired. However, this is
          entirely optional.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expandedPanel === "panel3"}
        onChange={handleAccordionChange("panel3")}
      >
        <AccordionSummary expandIcon={expandedPanel=== "panel3"?<RemoveIcon/>:<AddIcon />} style={{textAlign:"center",paddingLeft:"25%",fontWeight:"900"}}>
          Where can i get support?
        </AccordionSummary>

        <AccordionDetails style={{paddingLeft:"25%",fontWeight:"bold"}}>
         <ol style={{listStyleType:"none"}}> Hands-on support with our professional team of support experts is
          accessible 24/7, and that includes an extensive library of detailed
          documentation and video tutorials. 
         <li> <ArrowForwardIosIcon sx={{color:"green",fontSize:"small"}}/>To access support you will need to
          register a support account by following these steps.</li>
          <li><ArrowForwardIosIcon  sx={{color:"green",fontSize:"small"}} />Once your support
          account is set up, you can submit support tickets here.</li>
           <li><ArrowForwardIosIcon  sx={{color:"green",fontSize:"small"}}/>Learn how to
          navigate your support account Dashboard here.</li>
           <li><ArrowForwardIosIcon  sx={{color:"green",fontSize:"small"}}/>Check to see if you are
          eligible for Grandfathered support. </li>
          <li><ArrowForwardIosIcon  sx={{color:"green",fontSize:"small"}}/>For a detailed overview of our
          support policy please go here.</li>
          </ol>
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
}

export default Faq;
