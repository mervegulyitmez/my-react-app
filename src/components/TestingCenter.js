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
      <Typography variant="h6">Testing Center {centerNumber}</Typography>
      <Box display="flex" alignItems="center">
        <div className="">
          <Select
            value={selectedClient}
            onChange={handleClientChange}
            displayEmpty
            className="select-element"
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
    </div>
  );
}

export default TestingCenter;
