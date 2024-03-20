// ImportNameDropdown.js
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import "../../src/style.scss";

function ImportNameDropdown({ value, onChange }) {
  return (
    <Box sx={{ minWidth: 120, marginBottom:'20px'}}>
      <FormControl fullWidth>
        <Select
          value={value}
          onChange={onChange}
          fullWidth
          displayEmpty // Add displayEmpty property
          inputProps={{ "aria-label": "Without label" }}
          sx={{ borderRadius: "20px" , color:"#293d68"}}
        >
          <MenuItem value="" disabled className="main-text-color">
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
