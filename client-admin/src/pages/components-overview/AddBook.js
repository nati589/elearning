import {
  Typography,
  Grid,
  TextField,
  Box,
  Button,
  Card,
  // ButtonBase,
} from "@mui/material";
import { useNavigate } from "../../../node_modules/react-router/dist/index";

export default function AddCourse() {
  const navigate = useNavigate("/coursemanagement");
  return (
    <Grid container sx={{ pl: 2, pr: 2 }}>
      <Box>
        <Typography variant="h4">Add Book</Typography>
        <Typography variant="p">This section is to add a book.</Typography>
      </Box>
      <Grid item xs={12}>
        <Box component="form" onSubmit={() => {}}>
          <TextField
            required
            fullWidth
            id="book_title"
            label="Book Title"
            name="book_title"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="book_author"
            label="Author Name"
            name="book_author"
            sx={{ my: 2 }}

            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="book_details"
            label="Book Description "
            name="book_details"
            multiline
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            type="number"
            id="book_price"
            label="Book Price"
            name="book_price"

            // onChange={(event) => setProduct(event.target.value)}
          />
          <Box sx={{ my: 2, ml: 0.2 }}>
            <Typography>Book Thumbnail</Typography>
            <TextField
              required
              fullWidth
              type="file"
              // helperText=" please upload your course thumnail "
              id="book_thumbnail"
              // label="Lesson Detail"
              name="book_thumbnail"
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 1.5,
              mt: 2,
            }}
          >
            <Button
              variant="outlined"
              type="submit"
              onClick={() => {
                navigate("/coursemanagement");
              }}
            >
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Card fullWidth></Card>
      </Grid>
    </Grid>
  );
}
