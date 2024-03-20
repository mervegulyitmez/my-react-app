import React, { useState } from "react";
import { Button, Box, Typography, Select, MenuItem } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // Import the AccessTime icon

function TestingCenter({ centerNumber }) {
  const [clientType, setClientType] = useState("");
  const [selectedClient, setSelectedClient] = useState("");
  const [importDataChecked, setImportDataChecked] = useState(false);

  const handleClientTypeChange = (type) => {
    setClientType(type);
  };

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleContinueClick = () => {
    // Logic for continuing import
    setImportDataChecked(true);
  };

  return (
    <div className="testing-center-container">
      <Box display="flex" alignItems="center">
      <Typography gutterBottom className="main-text-color">Testing Center {centerNumber}</Typography>
      <Box display="flex" alignItems="center">
        <div className="testing-center-client">
          <Select
            value={selectedClient}
            onChange={handleClientChange}
            displayEmpty
            className="select-element"
            sx={{ borderRadius: "16px" , color:"#293d68"}}
            >
            <MenuItem value="" disabled>
              Select Client
            </MenuItem>
            <MenuItem value="low">Client 1</MenuItem>
            <MenuItem value="medium">Client 2</MenuItem>
            <MenuItem value="high">Client 3</MenuItem>
          </Select>
          <AccessTimeIcon />
        </div>
      </Box>
      </Box>
      
    </div>
  );
}

export default TestingCenter;
