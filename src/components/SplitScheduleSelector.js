import React from "react";
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Typography
} from "@mui/material";

function SplitScheduleSelector({ selectedOption, onSelectOption }) {
  const handleOptionChange = (event) => {
    onSelectOption(event.target.value);
  };

  return (
    <FormControl component="fieldset">
  
      <Typography gutterBottom fontWeight="bold" className="main-text-color">
      Split schedule using social distancing?
      </Typography>
      <RadioGroup
        aria-label="split-schedule"
        name="split-schedule"
        value={selectedOption}
        onChange={handleOptionChange}
        className="split-schedule-container custom-divider"
      >
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" className="main-text-color"/>
        <FormControlLabel value="No" control={<Radio />} label="No" className="main-text-color" />
      </RadioGroup>
    </FormControl>
  );
}

export default SplitScheduleSelector;
