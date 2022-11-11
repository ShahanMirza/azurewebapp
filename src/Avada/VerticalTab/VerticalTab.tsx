import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import livevisual from "./live-visual.webp";
import layoutbuilder from "./layout-builder-4.webp";
import Grid from "@mui/system/Unstable_Grid";

function VerticalTab() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: any, newTabIndex: any) => {
    setTabIndex(newTabIndex);
  };
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Grid container>
          <Grid xs={3}>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              centered
              sx={{
                "& button": { fontWeight: "900" },
                "& button:hover": {
                  backgroundColor: "#f4f5f7",
                  borderRadius: "10px",
                },
                // "& button:active": { backgroundColor: "#f4f5f7" },
                "& button.Mui-selected": {
                  background: "#f4f5f7",
                  color: "black",
                  borderRadius: "10px",
                  mb: 2,
                  mt:2
                },
                textALign: "left",
              }}
              TabIndicatorProps={{
                // sx: { }
                // ,
                style: {
                  display: "none",
                  // background: "#f4f5f7"
                  bgcolor: "red",
                  float: "right",
                },
              }}
              orientation="vertical"
            >
              <Tab
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
                icon={<ViewComfyIcon sx={{ mr: "5px" }} />}
                label="Live Visual Builder"
              />
              <Tab
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
                icon={<ViewComfyIcon sx={{ mr: "5px" }} />}
                label="Layout Builder"
              />
              <Tab
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
                icon={<ViewComfyIcon sx={{ mr: "5px" }} />}
                label="Header Builder"
              />
              <Tab
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
                icon={<ViewComfyIcon sx={{ mr: "5px" }} />}
                label="Footer Buider"
              />
              <Tab
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
                icon={<ViewComfyIcon sx={{ mr: "5px" }} />}
                label="Form Builder"
              />
              <Tab
                style={{ flexDirection: "row", justifyContent: "flex-start" }}
                icon={<ViewComfyIcon sx={{ mr: "5px" }} />}
                label="Performance Wizard"
              />
            </Tabs>
          </Grid>
          <Grid xs={1}></Grid>
          <Grid xs={7}>
            <Box sx={{ margin: 2 }}>
              {tabIndex === 0 && (
                <Box>
                  {/* <Typography>The first tab</Typography> */}
                  <img
                    src={livevisual}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}
              {tabIndex === 1 && (
                <Box>
                  {/* <Typography>The second tab</Typography> */}
                  <img
                    src={layoutbuilder}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}
              {tabIndex === 2 && (
                <Box>
                  {/* <Typography>The third tab</Typography> */}
                  <img
                    src={livevisual}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}
              {tabIndex === 3 && (
                <Box>
                  {/* <Typography>The forth tab</Typography> */}
                  <img
                    src={layoutbuilder}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}
              {tabIndex === 4 && (
                <Box>
                  {/* <Typography>The fifth tab</Typography> */}
                  <img
                    src={livevisual}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}
              {tabIndex === 5 && (
                <Box>
                  {/* <Typography>The sixth tab</Typography> */}
                  <img
                    src={layoutbuilder}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default VerticalTab;
