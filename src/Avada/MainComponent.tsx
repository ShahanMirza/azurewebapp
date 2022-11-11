import React from "react";
import Navbar from "./Navbar/Navbar";
import CentralDiv from "./Component/CentralDiv";
import CardComp from "./Cards/CardComp";
import beginner from "./Cards/for.webp";
import { Stack, TextField, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import TabDiv from "./TabDiv/TabDiv";
import VerticalTab from "./VerticalTab/VerticalTab";
import Avadalogo from "./TabDiv/Avada.png";
import MainCompImage from "./MainComp-removebg-preview.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import shapeBg from "./shape-bg-9.svg";
import worldClass from "./world-class-support.webp";
import Testimonial from "./Testimonials/Testimonial";
import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";

function MainComponent() {
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

  const faqobj = [
    {
      summary: "World-Class Support",
      details:"We build long-term professional relationships with our customers that you can rely on & trust.",
    },
    {
      summary: "Documentation & Tutorials",
      details:"Over 550 help files & 200 tutorial videos will make building websites with Avada even easier.",
    },
    {
      summary: "100% Built In-House",
      details:"Avada is not reliant on 3rd party tools to deliver a reliable & stable website building experience.",
    },
    {
      summary: "Free Lifetime Updates",
      details:"Your website will receive free & regular updates, compatible with industry standards & trends, for life.",
    },
  ];




  return (
    <Box>
      {/* <div> */}
      <Navbar />
      <Box sx={{ m: "0 20px  0 20px" }}>
        <CentralDiv />
        <Box sx={{ textAlign: "center", mt: 15 }}>
          <Grid container spacing={3}>
            {obj.map((value, index) => (
              <Grid xs={4}>
                {" "}
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
            <Grid xs={4}>
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
      
      {faqobj.map(obj=>(
<Faq {...obj} />
))};
      <Footer />
      {/* </div> */}
    </Box>
  );
}

export default MainComponent;
