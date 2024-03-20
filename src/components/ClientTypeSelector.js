import React from "react";
import {
  FormControl,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function ClientTypeSelector({ selectedType, onSelectType }) {
  const handleTypeChange = (event) => {
    onSelectType(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <Typography gutterBottom fontWeight="bold" className="main-text-color">
        Client:
      </Typography>
      <RadioGroup
        aria-label="client-type"
        name="client-type"
        value={selectedType}
        onChange={handleTypeChange}
        className="custom-divider"
      >
        <FormControlLabel
          value="Single"
          control={<Radio />}
          label="Single"
          className="main-text-color"
        />
        <FormControlLabel
          className="main-text-color"
          value="Multiple"
          control={<Radio />}
          label="Multiple"
        />
      </RadioGroup>
    </FormControl>
  );
}

export default ClientTypeSelector;
