import React, { useState } from "react";
import { Typography, Card, Button, Tooltip, Box } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function SectionCard({ section }) {
  // console.log(section);
  const [edit, setEdit] = useState(false);
  return (
    <>
      {!edit && (
        <Card fullWidth sx={{ p: 2, my: 2, w: "100%" }} elevation={0}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h5" color="primary">
              {section.section_title}{" "}
            </Typography>
            <Tooltip title="Delete">
              <Button
                color="error"
                onClick={() => {
                  // deleteCourse(data);
                }}>
                <DeleteOutlineIcon />
              </Button>
            </Tooltip>
          </Box>

          <Typography>
            Type:{" "}
            {section.section_type.charAt(0).toUpperCase() +
              section.section_type.slice(1)}
          </Typography>
          {["quiz", "assignment"].includes(section.section_type) && (
            <Typography>Value: {section.section_value}</Typography>
          )}
          {["quiz"].includes(section.section_type) && (
            <Typography>Content: {section.section_content}</Typography>
          )}
          <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
            <Button
              variant="outlined"
              onClick={() => {
                setEdit(true);
                // navigate("/coursemanagement/addcourse");
              }}>
              Edit Section
            </Button>
          </Box>
        </Card>
      )}
      {edit && (
        <Card fullWidth sx={{ p: 2, my: 2, w: "100%" }} elevation={0}></Card>
      )}
    </>
  );
}
