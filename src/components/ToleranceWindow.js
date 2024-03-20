import React, { useState } from "react";
import { Box, Switch, MenuItem, Select } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import the AccessTime icon

function ToleranceWindow() {
  const [toggle, setToggle] = useState(false);
  const [toleranceLevel, setToleranceLevel] = useState("");

  const handleToggleChange = (event) => {
    setToggle(event.target.checked);
  };

  const handleToleranceLevelChange = (event) => {
    setToleranceLevel(event.target.value);
  };

  return (
    <div className="tolerance-window">
      <Box className="tolerance-controls">
        <Switch
          checked={toggle}
          onChange={handleToggleChange}
          inputProps={{ "aria-label": "toggle" }}
        />
        <span>{toggle ? "Toggle ON" : "Toggle OFF"}</span>{" "}
        {/* Toggle ON/OFF text */}
        <div className="vertical-divider"></div> {/* Vertical divider */}
        <AccessTimeIcon /> {/* Use the AccessTime icon */}
        <Select
          value={toleranceLevel}
          onChange={handleToleranceLevelChange}
          displayEmpty
          className="select-element"
        >
          <MenuItem value="" disabled>
            Select Tolerance Level
          </MenuItem>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </Box>
    </div>
  );
}

export default ToleranceWindow;
