import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

function SplitScheduleSelector({ selectedOption, onSelectOption }) {
  const handleOptionChange = (event) => {
    onSelectOption(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" className="form-label">
        Split Schedule with Social Distancing?
      </FormLabel>
      <RadioGroup
        aria-label="split-schedule"
        name="split-schedule"
        value={selectedOption}
        onChange={handleOptionChange}
        className="split-schedule-container"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
}

export default SplitScheduleSelector;
