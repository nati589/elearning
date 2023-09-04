import React from "react";
import { styled } from "@mui/system";
import MUIDataTable from "mui-datatables";
import {
  Typography,
  Box,
  Button,
  // ButtonBase,
} from "@mui/material";
import { useNavigate } from "../../../node_modules/react-router/dist/index";

export default function CourseList() {
  const navigate = useNavigate();
  const productList = [];
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
      name: "Products",
      options: {
        filter: false,
      },
    },
    {
      name: "Unit",
      options: {
        filter: false,
      },
    },
    {
      name: "Quantity",
      options: {
        filter: false,
      },
    },
    {
      name: "Unit Price",
      options: {
        filter: false,
      },
    },
    {
      name: "ID",
      options: {
        display: false,
        filter: false,
        sort: false,
      },
    },
    {
      name: "DAY",
      options: {
        display: false,
        filter: true,
      },
    },
    {
      name: "MONTH",
      options: {
        display: false,
        filter: true,
      },
    },
    {
      name: "YEAR",
      options: {
        display: false,
        filter: true,
      },
    },
    {
      name: "Date Added",
      options: {
        filter: false,
      },
    },
    "Category",
    {
      label: "ACTION",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, rowData, tableMeta, updateValue) => {
          // let data = rowData.rowData;
          return (
            <Button variant="outlined" onClick={() => {}}>
              Update
            </Button>
          );
        },
      },
      name: "update",
    },
  ];
  return (
    <>
      <Box sx={{ ml: 2 }}>
        <Typography variant="h4">Books</Typography>
        <Typography variant="p">
          This section is to create and modify Books.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "end", my: 2 }}>
        <Button
          variant="outlined"
          onClick={() => {
            navigate("/bookmanagement/addbook");
          }}
        >
          Add Book
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
