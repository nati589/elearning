import { useEffect, useState } from "react";

// material-ui
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Grid,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// project import
import OrdersTable from "./OrdersTable";
import IncomeAreaChart from "./IncomeAreaChart";
import MonthlyBarChart from "./MonthlyBarChart";
import ReportAreaChart from "./ReportAreaChart";
import SalesColumnChart from "./SalesColumnChart";
import MainCard from "components/MainCard";
import AnalyticEcommerce from "components/cards/statistics/AnalyticEcommerce";
import axios from "axios";
// assets
import {
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";

// avatar style
const avatarSX = {
  width: 36,
  height: 36,
  fontSize: "1rem",
};
// Calcualte the Percentage
function getPercentage(ValueYear, ValueTotal) {
  return ((ValueYear * 100) / ValueTotal).toFixed(1).toString();
}

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: "auto",
  right: "auto",
  alignSelf: "flex-start",
  transform: "none",
};

// sales report status
const status = [
  {
    value: "today",
    label: "Today",
  },
  {
    value: "month",
    label: "This Month",
  },
  {
    value: "year",
    label: "This Year",
  },
];
//==============================||======================||================================||====================
// ==============================|| DASHBOARD - DEFAULT ||============================== //
const url1 = "http://localhost:8800/api/users/getUsers";
const url2 = "http://localhost:8800/api/books/getBooks";
const url3 = "http://localhost:8800/api/courses/getTotalCourses";
const url4 = "http://localhost:8800/api/purchases/getPurchases";
const urTl1 = "http://localhost:8800/api/users/getUsersThisYear";
const urTl2 = "http://localhost:8800/api/books/getBooksThisYear";
const urTl3 = "http://localhost:8800/api/purchases/getPurchasesThisYear";
const urTl4 = "http://localhost:8800/api/courses/getCoursesThisYear";
const DashboardDefault = () => {
  const [totalCourse, setTotalCourse] = useState(0);
  const [totalCourseYear, setTotalCourseYear] = useState(0);
  const [totalSale, setTotalSale] = useState(0);
  const [totalSaleYear, setTotalSaleYear] = useState(0);
  const [totalBook, setTotalBook] = useState(0);
  const [totalBookYear, setTotalBookYear] = useState(0);
  const [totalUser, setTotalUser] = useState(0);
  const [totalUserYear, setTotalUserYear] = useState(0);
  const [value, setValue] = useState("today");
  const [slot, setSlot] = useState("week");
  useEffect(function () {
    // Make a GET request using Axios

    // Create an array of Axios requests
    const requests = [
      axios.get(url1),
      axios.get(url2),
      axios.get(url3),
      axios.get(url4),
    ];

    // Use axios.all to send the requests concurrently
    axios
      .all(requests)
      .then(
        axios.spread((response1, response2, response3, response4) => {
          // Handle the responses here
          setTotalUser(response1.data?.length ?? 0);
          setTotalBook(response2.data?.length ?? 0);
          setTotalCourse(response3.data?.length ?? 0);
          setTotalSale(response4.data?.length ?? 0);
        })
      )
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);

  useEffect(function () {
    // Make a GET request using Axios

    // Create an array of Axios requests
    const requests = [
      axios.get(urTl1),
      axios.get(urTl2),
      axios.get(urTl3),
      axios.get(urTl4),
    ];

    // Use axios.all to send the requests concurrently
    axios
      .all(requests)
      .then(
        axios.spread((response1, response2, response3, response4) => {
          // Handle the responses here
          setTotalUserYear(response1.data?.length ?? 0);
          setTotalBookYear(response2.data?.length ?? 0);
          setTotalCourseYear(response3.data?.length ?? 0);
          setTotalSaleYear(response4.data?.length ?? 0);
        })
      )
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);
  // console.log(getPercentage(totalBookYear, totalBook));
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Users"
          count={totalUser}
          percentage={getPercentage(totalUserYear, totalUser)}
          extra={totalUserYear}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Courses"
          count={totalCourse}
          percentage={getPercentage(totalCourseYear, totalCourse)}
          extra={totalCourseYear}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Books"
          count={totalBook}
          percentage={getPercentage(totalBookYear, totalBook)}
          // isLoss
          color="warning"
          extra={totalBookYear}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <AnalyticEcommerce
          title="Total Sales"
          count={totalSale}
          percentage={getPercentage(totalSaleYear, totalSale)}
          // percentage={0}
          // isLoss
          color="warning"
          extra={totalSaleYear}
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ display: { sm: "none", md: "block", lg: "none" } }}
      />

      {/* row 2 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales</Typography>
          </Grid>
          <Grid item>
            <Stack direction="row" alignItems="center" spacing={0}>
              <Button
                size="small"
                onClick={() => setSlot("month")}
                color={slot === "month" ? "primary" : "secondary"}
                variant={slot === "month" ? "outlined" : "text"}
              >
                Month
              </Button>
              <Button
                size="small"
                onClick={() => setSlot("week")}
                color={slot === "week" ? "primary" : "secondary"}
                variant={slot === "week" ? "outlined" : "text"}
              >
                Week
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <IncomeAreaChart slot={slot} />
          </Box>
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Income Overview</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <Box sx={{ p: 3, pb: 0 }}>
            <Stack spacing={2}>
              <Typography variant="h6" color="textSecondary">
                This Week Statistics
              </Typography>
              <Typography variant="h3">$7,650</Typography>
            </Stack>
          </Box>
          <MonthlyBarChart />
        </MainCard>
      </Grid>

      {/* row 3 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Recent Orders</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <OrdersTable />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Analytics Report</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List sx={{ p: 0, "& .MuiListItemButton-root": { py: 2 } }}>
            <ListItemButton divider>
              <ListItemText primary="Company Finance Growth" />
              <Typography variant="h5">+45.14%</Typography>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemText primary="Company Expenses Ratio" />
              <Typography variant="h5">0.58%</Typography>
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Business Risk Cases" />
              <Typography variant="h5">Low</Typography>
            </ListItemButton>
          </List>
          <ReportAreaChart />
        </MainCard>
      </Grid>

      {/* row 4 */}
      <Grid item xs={12} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Sales Report</Typography>
          </Grid>
          <Grid item>
            <TextField
              id="standard-select-currency"
              size="small"
              select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              sx={{
                "& .MuiInputBase-input": { py: 0.5, fontSize: "0.875rem" },
              }}
            >
              {status.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <MainCard sx={{ mt: 1.75 }}>
          <Stack spacing={1.5} sx={{ mb: -12 }}>
            <Typography variant="h6" color="secondary">
              Net Profit
            </Typography>
            <Typography variant="h4">$1560</Typography>
          </Stack>
          <SalesColumnChart />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={5} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Transaction History</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MainCard sx={{ mt: 2 }} content={false}>
          <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              "& .MuiListItemButton-root": {
                py: 1.5,
                "& .MuiAvatar-root": avatarSX,
                "& .MuiListItemSecondaryAction-root": {
                  ...actionSX,
                  position: "relative",
                },
              },
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: "success.main",
                    bgcolor: "success.lighter",
                  }}
                >
                  <GiftOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">Order #002434</Typography>
                }
                secondary="Today, 2:00 AM"
              />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $1,430
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    78%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: "primary.main",
                    bgcolor: "primary.lighter",
                  }}
                >
                  <MessageOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">Order #984947</Typography>
                }
                secondary="5 August, 1:45 PM"
              />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $302
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    8%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  sx={{
                    color: "error.main",
                    bgcolor: "error.lighter",
                  }}
                >
                  <SettingOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">Order #988784</Typography>
                }
                secondary="7 hours ago"
              />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                    + $682
                  </Typography>
                  <Typography variant="h6" color="secondary" noWrap>
                    16%
                  </Typography>
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
          </List>
        </MainCard>
        <MainCard sx={{ mt: 2 }}>
          <Stack spacing={3}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Stack>
                  <Typography variant="h5" noWrap>
                    Help & Support Chat
                  </Typography>
                  <Typography variant="caption" color="secondary" noWrap>
                    Typical replay within 5 min
                  </Typography>
                </Stack>
              </Grid>
              <Grid item>
                <AvatarGroup
                  sx={{ "& .MuiAvatar-root": { width: 32, height: 32 } }}
                >
                  <Avatar alt="Remy Sharp" src={avatar1} />
                  <Avatar alt="Travis Howard" src={avatar2} />
                  <Avatar alt="Cindy Baker" src={avatar3} />
                  <Avatar alt="Agnes Walker" src={avatar4} />
                </AvatarGroup>
              </Grid>
            </Grid>
            <Button
              size="small"
              variant="contained"
              sx={{ textTransform: "capitalize" }}
            >
              Need Help?
            </Button>
          </Stack>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
