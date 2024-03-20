// ImportNameDropdown.js
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";

function ImportNameDropdown({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <Select
          value={value}
          onChange={onChange}
          fullWidth
          displayEmpty  // Add displayEmpty property
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="" disabled>
            Select Import Name:
          </MenuItem>
          <MenuItem value="option1">Option 1</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          {/* Add your options */}
        </Select>
      </FormControl>
    </Box>
  );
}

export default ImportNameDropdown;
