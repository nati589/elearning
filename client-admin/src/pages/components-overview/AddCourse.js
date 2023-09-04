import {
  Typography,
  Grid,
  TextField,
  Box,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useNavigate } from "../../../node_modules/react-router/dist/index";
import SectionCard from "components/SectionCard";
import { useState } from "react";

export default function AddCourse() {
  const navigate = useNavigate("/coursemanagement");
  const [sections, setSections] = useState([]);
  console.log(sections.length);
  return (
    <>
      <Grid container sx={{ px: 2 }}>
        <Box>
          <Typography variant="h4">Add Course</Typography>
          <Typography variant="p">
            This section is to create a course.
          </Typography>
        </Box>
        <Grid item xs={12}>
          <Box component="form" onSubmit={() => {}}>
            <TextField
              required
              fullWidth
              id="course_title"
              label="Course Title"
              name="course_title"
              sx={{ my: 2 }}
              // onChange={(event) => setProduct(event.target.value)}
            />
            <TextField
              required
              fullWidth
              id="course_instructor"
              label="Instructor Name"
              name="course_instructor"
              sx={{ my: 2 }}

              // onChange={(event) => setProduct(event.target.value)}
            />
            <TextField
              required
              fullWidth
              id="course_details"
              label="Course Description "
              name="course_details"
              multiline
              sx={{ my: 2 }}
              // onChange={(event) => setProduct(event.target.value)}
            />
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Select
                // sx={{ m: 2, minWidth: 220 }}

                labelId="course_level_label"
                id="course_level"
                value="all"
                label="Level"
                // onChange={handleChange}
              >
                <MenuItem value="all">All Level</MenuItem>
                <MenuItem value="beginner">beginner</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="advance">Advance</MenuItem>
              </Select>
              <TextField
                required
                type="number"
                id="course_price"
                label="Course Price"
                name="course_price"

                // onChange={(event) => setProduct(event.target.value)}
              />
              <TextField
                required
                type="number"
                id="course_total_hour"
                label="Course Total Hour"
                name="course_price"

                // onChange={(event) => setProduct(event.target.value)}
              />
            </Box>
            <Box sx={{ my: 2, ml: 0.2 }}>
              <Typography>Course Thumbnail</Typography>
              <TextField
                required
                fullWidth
                type="file"
                // helperText=" please upload your course thumnail "
                id="course_thumbnail"
                // label="Lesson Detail"
                name="course_thumbnail"
                sx={{ my: 0.5 }}
                // onChange={(event) => setProduct(event.target.value)}
              />
              {/* <Stack direction="row" alignItems="center" spacing={2}>
              <Button variant="outlined"  component="label">
                Upload Thumbnail
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </Stack> */}
            </Box>
            {/* <TextareaAutosize minRows={5}/> */}
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ px: 2 }}>
        <Typography variant="h6">Sections</Typography>
      </Box>
      <Box sx={{ w: "100%", px: 2 }}>
        {sections?.map((section) => (
          <SectionCard key={section} />
        ))}
      </Box>
      <Box
        sx={{
          px: 2,
          //  display: 'flex', justifyContent: 'end'
        }}>
        <Button
          variant="contained"
          color="error"
          onClick={() => setSections([...sections, {}])}>
          Add +
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1.5,
          mt: 2,
          px: 2,
        }}>
        <Button
          variant="outlined"
          type="submit"
          onClick={() => {
            navigate("/coursemanagement");
          }}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          Next
        </Button>
      </Box>
    </>
  );
}
