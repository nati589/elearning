import {
  Box,
  Typography,
  Button,
} from "../../../node_modules/@mui/material/index";
import BookTrash from "./BookTrash";
import CourseTrash from "./CourseTrash";
import {
  Outlet,
  useNavigate,
} from "../../../node_modules/react-router/dist/index";
import { useState } from "react";

function Trash() {
  // return <CourseTrash />;
  const navigate = useNavigate();
  const [selected, setSelected] = useState(true);
  return (
    <div>
      <Box sx={{ ml: 2 }}>
        <Typography variant="h4">Trash</Typography>
        <Typography variant="p">
          This section is to modify courses and book.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
        {!selected ? (
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/trash");
              setSelected((s) => !s);
            }}
          >
            course
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => {
              navigate("/trash/book");
              setSelected((s) => !s);
            }}
          >
            book
          </Button>
        )}
      </Box>
      {/* <CourseTrash /> */}
      {/* <BookTrash /> */}
      <Outlet />
    </div>
  );
}

export default Trash;
