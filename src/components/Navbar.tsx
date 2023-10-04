import { Button, ListItem } from "@mui/material";
import Stack from "@mui/material/Stack/Stack";
import * as React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import logo from "../resources/F1_logo_PNG8.png";
import "./Navbar.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div
        style={{
          padding: "10px 13px",
          color: "black",
          margin: "0px auto",
        }}
      >
        {/* <Stack direction="row" spacing={2}>
          <Button variant="outlined">Home</Button>
          <Button variant="outlined">About</Button>
        </Stack> */}
      </div>
    </div>
    
  );
};
