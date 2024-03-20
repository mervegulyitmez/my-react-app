import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Box } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "./FileUploader.css"; // Import CSS file for styling

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
      <Box className="big-rectangle">
        <Box className="nested-dashed-rectangle" {...getRootProps()}>
          <input {...getInputProps()} multiple /> {/* Add multiple attribute here */}
          <InsertDriveFileIcon className="document-icon" />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag & drop here or browse</p>
          )}
        </Box>
        <Button variant="contained" className="upload-button">
          Upload Manifest
        </Button>
      </Box>
      <div className="file-list">
        <h4>Uploaded Files:</h4>
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
