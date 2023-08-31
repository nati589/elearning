import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

export default function WebContent() {
  return (
    <Grid container sx={{ pl: 2, pr: 2 }}>
      {/* <Typography variant="h4">New Arrival</Typography> */}
      <Grid item xs={12}>
        <Box component="form" onSubmit={() => {}}>
          <TextField
            required
            fullWidth
            id="hero_title"
            label="Hero Title"
            name="hero_title"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="hero_detail"
            label="Hero Detail"
            name="hero_detail"
            sx={{ my: 2 }}

            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="goal_title"
            label="Goal Title"
            name="goal_title"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="goal_detail"
            label="Goal_detail"
            name="goal_detail"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="lesson_title"
            label="Lesson Title"
            name="lesson_title"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="lesson_detail"
            label="Lesson Detail"
            name="lesson_detail"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="mentor_title"
            label="Mentor Title"
            name="mentor_title"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="mentor_detail"
            label="Mentor Detail"
            name="mentor_detail"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="action_title"
            label="Action Title"
            name="action_title"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          <TextField
            required
            fullWidth
            id="action_detail"
            label="Action Detail"
            name="action_detail"
            sx={{ my: 2 }}
            // onChange={(event) => setProduct(event.target.value)}
          />
          {/* <TextareaAutosize minRows={5}/> */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
