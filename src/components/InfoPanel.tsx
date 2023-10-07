import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import { useEffect, useState } from "react";
import { methodType, requestMaker } from "../utils/requestMaker";
import { GenericApiResponse, Race, Session } from "../constants/types";
import RaceTable from "./RaceTable";

interface TabPanelProps {
  //   children?: React.ReactNode;
  //   index: number;
  //   value: number;
  tabName: string;
  season: string;
}

//  const tabsHeadings = ["Races","Drivers","DriverStandings","Constructors","ConstructorStandings"];
const returnEndpointURL: (a: string, b: string) => string = (
  heading: string,
  season: string
) => {
  if (heading === "Races") {
    return `races${season}`;
  }
  if (heading === "Drivers") {
    return `drivers${season}`;
  }
  if (heading === "DriverStandings") {
    return `driverstandings${season}`;
  }
  if (heading === "Constructors") {
    return `constructors${season}`;
  }
  if (heading === "ConstructorStandings") {
    return `constructorsstanding${season}`;
  }
  return "races";
};
export const InfoPanel = <T extends GenericApiResponse>(props: TabPanelProps) => {
  const { tabName, season, ...other } = props;
  const url = tabName;

  const [data, setData] = useState<T>();
  useEffect(() => {
    console.log("Rendered in " + props.season + tabName);
    if (season === "2020") {
      console.log("making request for " + season + " and " + tabName);
      requestMaker<T>(returnEndpointURL(tabName,season), methodType.GET).then(
        (response) => setData(response.data.results)
      );
    } else {
      console.log("No Data for " + season);
    }
  }, []);
  return (
    <div role="tabpanel" {...other}>
      {
        <Box sx={{ p: 3 }}>
          <RaceTable races={data} />
        </Box>
      }
    </div>
  );
};
