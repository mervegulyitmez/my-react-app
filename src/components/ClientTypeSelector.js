import React from "react";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

function ClientTypeSelector({ selectedType, onSelectType }) {
  const handleTypeChange = (event) => {
    onSelectType(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className="form-label">Client:</FormLabel>
      <RadioGroup
        aria-label="client-type"
        name="client-type"
        value={selectedType}
        onChange={handleTypeChange}

      >
        <FormControlLabel value="Single" control={<Radio />} label="Single" />
        <FormControlLabel value="Multiple" control={<Radio />} label="Multiple" />
      </RadioGroup>
    </FormControl>
  );
}

export default ClientTypeSelector;
