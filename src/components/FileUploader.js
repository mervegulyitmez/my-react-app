import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

function FileUploader({ onFileUpload }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      // Do something with the accepted files
      const updatedFiles = [...files, ...acceptedFiles]; // Concatenate new files with existing files
      setFiles(updatedFiles);
      onFileUpload(updatedFiles);
    },
    [files, onFileUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: true }); // Set multiple attribute to true

  return (
    <div className="file-uploader">
      <Typography variant="body1" className="main-text-color" fontWeight="bold" sx={{paddingBottom:'5px'}}>
            Select a manifest you'd like to Import
          </Typography>
      <Box className="big-rectangle">
        <Box className="nested-dashed-rectangle" {...getRootProps()}>
          <input {...getInputProps()} multiple /> {/* Add multiple attribute here */}
          <InsertDriveFileIcon className="document-icon" />
          <p className="main-text-color">Drag & Drop Here Or <strong>Browse</strong></p>
        </Box>
        <Button variant="contained" className="upload-button">
          Upload Manifest
        </Button>
      </Box>
      <div className="file-list">
        <h4 className="main-text-color">Uploaded Files:</h4>
        <ul>
          {files.map((file) => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FileUploader;
