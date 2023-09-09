import React, { useEffect, useState } from "react";
import { styled } from "@mui/system";
import MUIDataTable from "mui-datatables";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import {
  Typography,
  Box,
  Button,
  // ButtonBase,
} from "@mui/material";
import { useNavigate } from "../../../node_modules/react-router/dist/index";
import axios from "axios";

export default function CourseList() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("/courses/getCourses")
      .then((res) => {
        setProductList(
          res.data.map((item) => [
            item.course_title,
            item.course_instructor,
            item.course_level,
            item.course_price,
            item.course_rating,
            item.course_sections,
            item.course_students,
            item.course_id,
          ])
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const deleteCourse = (data) => {
    console.log(data);
    axios
      .delete("/courses/deleteCourse", { data: { id: data } })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const navigate = useNavigate();
  const options = {
    // filterType: "checkbox",
    elevation: 0,
    selectableRows: "none",
  };
  const StyledMUIDataTable = styled(MUIDataTable)(({ theme }) => ({
    background: theme.palette.background.default,
  }));
  const columns = [
    {
      name: "Title",
      options: {
        filter: false,
      },
    },
    {
      name: "Instructor",
      options: {
        filter: false,
      },
    },
    {
      name: "Level",
      options: {
        filter: true,
      },
    },
    {
      name: "Price",
      options: {
        filter: false,
        
      },
    },
    {
      name: "Rating",
      options: {
        display: true,
        filter: false,
      },
    },
    {
      name: "Sections",
      options: {
        display: true,
        filter: false,
        sort: false,
      },
    },
    {
      name: "Students",
      options: {
        display: true,
      },
    },
    {
      label: "ACTION",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          let data = value;
          return (
            <>
              <Button
                onClick={() => {
                  // console.log(data);
                  navigate(`/coursemanagement/editcourse/${data}`)
                }}>
                <EditIcon />
              </Button>
              <Button
                color="error"
                onClick={() => {
                  deleteCourse(data);
                }}>
                <DeleteOutlineIcon />
              </Button>
            </>
          );
        },
      },
      name: "update",
    },
  ];
  return (
    <>
      <Box sx={{ ml: 2 }}>
        <Typography variant="h4">Courses</Typography>
        <Typography variant="p">
          This section is to create and modify courses.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/coursemanagement/addcourse");
          }}>
          Add Course
        </Button>
      </Box>
      <Box>
        <StyledMUIDataTable
          title={""}
          data={productList}
          columns={columns}
          options={options}
        />
      </Box>
    </>
  );
}
