import React, { useState } from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import the AccessTime icon
import { Switch } from "antd"; 

function ToleranceWindow() {
  const [toggle, setToggle] = useState(false);
  const [toleranceLevel, setToleranceLevel] = useState("");

  const handleToggleChange = (checked) => {
    setToggle(checked);
  };
  

  const handleToleranceLevelChange = (event) => {
    setToleranceLevel(event.target.value);
  };

  return (
    <div className="tolerance-window">
      <Typography gutterBottom fontWeight="bold" className="main-text-color ">
        Tolerance Window:
      </Typography>
      <Box className="tolerance-controls custom-divider">
        {/* <Switch
          checked={toggle}
          onChange={handleToggleChange}
          inputProps={{ "aria-label": "toggle" }}
        /> */}
        <Switch
          checked={toggle}
          onChange={handleToggleChange}
          aria-label="toggle"
        />
        <span className="main-text-color">{toggle ? "Toggle ON" : "Toggle OFF"}</span>{" "}
        {/* Toggle ON/OFF text */}
        <div className="vertical-divider"></div> {/* Vertical divider */}
        <Box display="flex" alignItems="center">
          <AccessTimeIcon /> {/* Use the AccessTime icon */}
          <Typography variant="body1" marginLeft={1} className="main-text-color">Select Tolerance Level</Typography>
        </Box>
      </Box>
    </div>
  );
}

export default ToleranceWindow;
