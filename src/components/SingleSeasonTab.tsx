import Box from '@mui/material/Box/Box';
import Tab from '@mui/material/Tab/Tab';
import Tabs from '@mui/material/Tabs/Tabs';
import Typography from '@mui/material/Typography/Typography';
import React, { Component } from 'react';
import { InfoPanel } from './InfoPanel';
import { DriverStandingsApiResponse } from '../constants/types';


type SingleSeasonTabProps = {
    season: string;
}

const tabsHeadings = ["Races","Drivers","DriverStandings","Constructors","ConstructorStandings"];





function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }


export const SingleSeasonTab = (props:SingleSeasonTabProps) => {
    const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // renderInfoPanel(newValue);
    setValue(newValue);
  };

//   const renderInfoPanel =(value:number)=>{
//     if(value == 0){
//         return (<InfoPanel tabName='Race' season={props.season} />)
//     }
//     if(value == 1){
//         return (<InfoPanel tabName='Driver' season={props.season}/>)
//     }
//   }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Races" {...a11yProps(0)} />
          <Tab label="Drivers" {...a11yProps(1)} />
          <Tab label="Driver Standings" {...a11yProps(2)} />
          <Tab label="Constructors" {...a11yProps(3)} />
          <Tab label="Constructor Standings" {...a11yProps(4)} />
        </Tabs>
      </Box>
      {tabsHeadings.map((head,index)=> index===value && <InfoPanel<DriverStandingsApiResponse>  season={props.season} tabName={head}/>)}
      {/* {renderInfoPanel(value)} */}

    </Box>
  );
}