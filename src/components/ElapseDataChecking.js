import React from "react";
import { Box } from "@mui/material";

function ElapsedDataChecker({ elapsedDates }) {
  return (
    <div className="elapsed-data-checker">
      <Box className="elapsed-dates-box">
        <h3>Elapsed Dates:</h3>
        {elapsedDates && elapsedDates.length > 0 ? (
          <ul>
            {elapsedDates.map((date, index) => (
              <li key={index}>{date}</li>
            ))}
          </ul>
        ) : (
          <p>No Elapsed Dates!</p>
        )}
      </Box>
    </div>
  );
}

export default ElapsedDataChecker;
