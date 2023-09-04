import React, { useState } from "react";
import {
  Typography,
  TextField,
  Card,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
} from "@mui/material";

export default function SectionCard() {
  const [type, setType] = useState("");
  return (
    <Card fullWidth sx={{ p: 2, my: 2, w: '100%' }} elevation={0} >
      <Typography>Section 1</Typography>
      <TextField
        required
        fullWidth
        id="title"
        label="Title"
        name="title"
        sx={{ my: 1 }}
        onChange={() => {}}
      />
      <TextField
        required
        fullWidth
        id="description"
        label="Description"
        name="description"
        multiline
        sx={{ my: 1 }}
        onChange={() => {}}
      />
      <FormControl fullWidth sx={{ my: 1 }}>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          value={type}
          label="Type"
          onChange={(e) => setType(e.target.value)}>
          <MenuItem value="text">Text</MenuItem>
          <MenuItem value="video">Video</MenuItem>
          <MenuItem value="quiz">Quiz</MenuItem>
          <MenuItem value="assignment">Assignment</MenuItem>
        </Select>
      </FormControl>
      {type === "quiz" ? (
        <TextField
          required
          fullWidth
          id="link"
          label="Link"
          name="link"
          sx={{ my: 1 }}
          onChange={() => {}}
        />
      ) : type === "" ? (
        <></>
      ) : (
        <Box>
          <InputLabel id="upload">File upload</InputLabel>
          <TextField
            required
            fullWidth
            type="file"
            // helperText=" please upload your course thumnail "
            id="file_upload"
            // label="Lesson Detail"
            name="file_upload"
            sx={{ my: 1 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
        </Box>
      )}
    </Card>
  );
}
