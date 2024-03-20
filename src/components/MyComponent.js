import React, { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close"; // Corrected import path
import Divider from "@mui/material/Divider"; // Import Divider component
import ImportNameDropdown from "./ImportNameDropdown";
import FileUploader from "./FileUploader";
import ElapsedDataChecker from "./ElapseDataChecking";
import ToleranceWindow from "./ToleranceWindow";
import SplitScheduleSelector from "./SplitScheduleSelector";
import LocationChecking from "./LocationChecking";
import ClientTypeSelector from "./ClientTypeSelector";
import TestingCenter from "./TestingCenter";
import "../../src/style.scss";

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const [importName, setImportName] = useState(""); // Define importName state
  const [splitSchedule, setSplitSchedule] = useState("");
  const [clientType, setClientType] = useState("");

  const handleClientTypeChange = (type) => {
    setClientType(type);
  };
  const handleSplitScheduleChange = (option) => {
    setSplitSchedule(option);
  };
  const handleImportNameChange = (event) => {
    // Define handleImportNameChange function
    setImportName(event.target.value);
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box className="modal">
            <IconButton className="close-icon" onClick={handleClose}>
              <CloseIcon />
            </IconButton>
            <Typography
              variant="h3"
              align="center"
              gutterBottom
              className="title"
            >
              Document Upload
            </Typography>
            <Divider />
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <ImportNameDropdown
                  value={importName}
                  onChange={handleImportNameChange}
                />
                <div style={{ marginTop: "10px" }}>
                  <Divider />
                </div>
                <FileUploader />
                <div style={{ marginTop: "10px" }}>
                  <Divider />
                </div>
                <ElapsedDataChecker />
                <div style={{ marginTop: "10px" }}>
                  <Divider />
                </div>
                <ToleranceWindow />
              </Grid>
              <Grid item xs={5}>
                <SplitScheduleSelector
                  selectedOption={splitSchedule}
                  onSelectOption={handleSplitScheduleChange}
                />
                <div style={{ marginTop: "10px" }}>
                  <Divider />
                </div>
                <LocationChecking />
                <div style={{ marginTop: "10px" }}>
                  <Divider />
                </div>
                <ClientTypeSelector
                  selectedType={clientType}
                  onSelectType={handleClientTypeChange}
                />
                <div>
                  <TestingCenter centerNumber={1} />
                  <TestingCenter centerNumber={2} />
                  <TestingCenter centerNumber={3} />
                  <TestingCenter centerNumber={4} />
                </div>
              </Grid>
              <Grid item xs={12} align="center"> {/* Center align grid item */}
                <Typography variant="h6">
                  Data in the import file is correct. Please press Continue to
                  import.
                </Typography>
                <div style={{ marginTop: "10px" }}>
                  <Button variant="contained" color="primary">
                    Continue Import
                  </Button>
                  <Button variant="outlined" color="primary" onClick={handleClose} style={{ marginLeft: "10px" }}>
                    Cancel
                  </Button>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
