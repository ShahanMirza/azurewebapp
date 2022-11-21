import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import CardComp from "./Cards/CardComp";
import beginner from "./Cards/for.webp";
import CentralDiv from "./Component/CentralDiv";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import MainCompImage from "./MainComp-removebg-preview.png";
import Navbar from "./Navbar/Navbar";
import shapeBg from "./shape-bg-9.svg";
import Avadalogo from "./TabDiv/Avada.png";
import TabDiv from "./TabDiv/TabDiv";
import Testimonial from "./Testimonials/Testimonial";
import VerticalTab from "./VerticalTab/VerticalTab";
import worldClass from "./world-class-support.webp";
import DoneIcon from '@mui/icons-material/Done';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {toast} from "./Toast";
import { useEffect, useState } from "react";
import ModalTest from "./Navbar/ModalTest";
function MainComponent() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const [modalBool,setModalBool]=useState<any>(false)
  const obj = [
    {
      head: "FOR BEGINNERS",
      intro: "Launch Your First WebSite",
      image: beginner,
      tags: "Visual Builder",
      imagePosition: false,
    },
    {
      head: "FOR BEGINNERS",
      intro: "Launch Your First WebSite",
      image: beginner,
      tags: "Visual Builder",
      imagePosition: false,
    },
    {
      head: "FOR BEGINNERS",
      intro: "Launch Your First WebSite",
      image: beginner,
      tags: "Visual Builder",
      imagePosition: false,
    },
  ];
  const tabdivData1 = {
    firstHead: "Design Anything, Build Everything",
    secondHead:
      "Design and launch your website fast & no coding knowledge is required.",
    checkImage: true,
    image: Avadalogo,
  };
  const tabdivData2 = {
    firstHead: "All-In-One Website Builder",
    secondHead: "Experience total control over your website creation process.",
    checkImage: false,
    image: Avadalogo,
  };

  const obj1 = [
    {
      head: "89 Prebuilt Websites",
      intro:
        "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
      image: MainCompImage,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "89 Prebuilt Websites",
      intro:
        "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
      image: MainCompImage,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "89 Prebuilt Websites",
      intro:
        "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
      image: MainCompImage,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "89 Prebuilt Websites",
      intro:
        "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
      image: MainCompImage,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "89 Prebuilt Websites",
      intro:
        "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
      image: MainCompImage,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "89 Prebuilt Websites",
      intro:
        "Prebuilt websites are designed to save you time. Import with a few clicks & customize it to suit your requirements.",
      image: MainCompImage,
      tags: "Visual Builder",
      imagePosition: true,
    },
  ];

  const obj2 = [
    {
      head: "World-Class Support",
      intro:
        "We build long-term professional relationships with our customers that you can rely on & trust.",
      image: worldClass,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "Documentation & Tutorials",
      intro:
        "Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.",
      image: worldClass,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "100% Built In-House",
      intro:
        "Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.",
      image: worldClass,
      tags: "Visual Builder",
      imagePosition: true,
    },
    {
      head: "Free Lifetime Updates",
      intro:
        "Your website will receive free & regular updates, compatible with industry standards & trends, for life.",
      image: worldClass,
      tags: "Visual Builder",
      imagePosition: true,
    },
  ];
  let AccordItem1 =  () =>( <ol style={{listStyleType: "none"}}> With your purchase of Avada, you will receive:
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
  </ol>);


let AccordItem2 = () =>( <ol style={{listStyleType:"none"}}> Hands-on support with our professional team of support experts is
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
          </ol>);

  const faqobj = [
    {
      summary: "World-Class Support",
      details:<AccordItem1/>,
    },
    {
      summary: "Documentation & Tutorials",
      details:"  No, there are no recurring license fees to use Avada. It is a one-time purchase that provides you with lifetime updates at no extra cost and is valid for life. You can choose to purchase a support extension after the initial 6 months of support has expired. However, this is entirely optional.",
    },
    {
      summary: "100% Built In-House",
      details:
        <AccordItem2/>,
    },
    {
      summary: "Free Lifetime Updates",
      details:
        "Your website will receive free & regular updates, compatible with industry standards & trends, for life.",
    },
  ];
  
useEffect(()=>{
  toast ('data has been loaded','success') 
},[])
  return (
    <Box>
     
      {/* <div> */}
      <Navbar />
      <Box sx={{ m: "0 20px  0 20px" }}>
        <CentralDiv />
        <Box sx={{ textAlign: "center", mt: 15 }}>
          <Grid
            container
            spacing={3}
            justifyContent={matchesSM ? "center" : "flex-start"}
          >
            {obj.map((value, index) => (
              <Grid md={4}>
                <CardComp {...value} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <TabDiv {...tabdivData1} />
        <VerticalTab />
        <TabDiv {...tabdivData2} />
      </Box>
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Grid container spacing={3}>
          {obj1.map((value, index) => (
            <Grid md={4}>
              <CardComp {...value} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Button
          sx={{
            bgcolor: "#65bd7d",
            mt: "20px",
            mb: "20px",
            p: "20px",
            fontWeight: 900,
          }}
          variant="contained"
        >
          Discover More
          <ArrowForwardIcon />
        </Button>
      </Box>
      <Box
        sx={{
          height: "300px",
          minWidth: window.innerWidth,
          backgroundImage: `url(${shapeBg})`,
          backgroundRepeat: "no-repeat",
          mt: 12,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            padding: "70px 0",
            wordWrap: "break-word",
            fontWeight: 900,
            textAlign: "center",
            display: "list-item",
            mt: -2,
          }}
        >
          841,321 Website Owners
        </Typography>
        <Typography
          variant="h3"
          sx={{
            padding: "70px 0",
            fontWeight: 900,
            textAlign: "center",
            display: "list-item",
            mt: -17,
          }}
        >
          Trust Avada
        </Typography>
        <Typography
          variant="h5"
          sx={{
            padding: "70px 0",
            textAlign: "center",
            display: "list-item",
            mt: -16,
          }}
        >
          The #1 selling Website Builder on Themeforest for 9+ years.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Grid container spacing={3}>
          {obj2.map((value, key) => (
            <Grid xs={3}>
              <CardComp {...value} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Testimonial />
      {/* <Faq {...faqobj[0]}/> */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          display: "flex",
          justifyContent: "center",
          mt: 12,
          mb: 8,
        }}
      >
        Frequently Asked Questions
      </Typography>
      {faqobj.map((obj) => (
        <Faq {...obj} />
      ))}
      ;
      <Footer />
      <ModalTest open={modalBool} setOpen={(value:boolean)=>setModalBool(value)}/>
     
      {/* </div> */}
    </Box>
  );
}

export default MainComponent;
