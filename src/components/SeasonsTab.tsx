import React, { Component, useEffect, useState } from "react";
import { methodType, requestMaker } from "../utils/requestMaker";
import { SeasonsApiResponse } from "../constants/types";
import { seasonObj } from "../constants/types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { SingleSeasonTab } from "./SingleSeasonTab";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  season: seasonObj;
}
function TabPanel(props: TabPanelProps) {
  const { season, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <SingleSeasonTab season={season.season} />
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export const SeasonsTab = (props: {seasons: seasonObj[]}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 320,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {props.seasons.map((item,index) => <Tab label={item.season} {...a11yProps(index)}></Tab>)}
      </Tabs>
      {props.seasons.map((item,index)=> <TabPanel value={value} index={index} season={item}></TabPanel>) }
    </Box>
  );
};
