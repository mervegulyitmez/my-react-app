import React from "react";
import { Box, Typography } from "@mui/material";

function ElapsedDataChecker({ elapsedDates }) {
  return (
    <div className="elapsed-data-checker">
      <Box className="elapsed-dates-box">
      <Typography gutterBottom fontWeight="bold" className="main-text-color">
          Elapsed Data Checking
        </Typography>
        {elapsedDates && elapsedDates.length > 0 ? (
          <ul>
            {elapsedDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        ) : (
          <p className="elapsed-date">No Elapsed Dates!</p>
        )}
      </Box>
    </div>
  );
}

export default ElapsedDataChecker;
