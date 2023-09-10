import React from "react";
import { Typography, Card } from "@mui/material";

export default function SectionCard({ section }) {
  console.log(section);
  return (
    <Card fullWidth sx={{ p: 2, my: 2, w: "100%" }} elevation={0}>
      <Typography variant='h5' color="primary">{section.section_title} </Typography>
      <Typography>Type: {section.section_type.charAt(0).toUpperCase() + section.section_type.slice(1)}</Typography>
      {["quiz", "assignment"].includes(section.section_type) && (
        <Typography>Value: {section.section_value}</Typography>
      )}
      {["quiz"].includes(section.section_type) && (
        <Typography>Content: {section.section_content}</Typography>
      )}
    </Card>
  );
}
