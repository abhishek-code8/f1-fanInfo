import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";
import { methodType, requestMaker } from "../utils/requestMaker";
import { Race, Session, SessionApiResponse } from "../constants/types";
import RaceTable from "./RaceTable";

interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
  tabName: string;
  season: string;
}

const returnEndpointURL: (a:string,b:string)=> string = (heading:string, season:string) => {
    if(heading === "Races"){
        return `races-${season}`;
    }
    return "races";
}
export const InfoPanel = (props: TabPanelProps) => {
  const { tabName, season, ...other } = props;
  const url = tabName;
  const [data,setData] = useState<Race[]>([]);
  useEffect(() => {
    console.log("Rendered in "+props.season+tabName)
    requestMaker<SessionApiResponse>("session",methodType.GET).then((response) => setData(response.data.results));
  },[]);
  return (
    <div
      role="tabpanel"
      {...other}
    >
      {<Box sx={{ p: 3 }}><RaceTable races={data} /></Box>}
    </div>
  );
};
