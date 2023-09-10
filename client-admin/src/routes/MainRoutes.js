import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";
import AddCourse from "pages/components-overview/AddCourse";
import EditCourse from "pages/components-overview/EditCourse";
import CourseList from "pages/components-overview/CourseList";
import AddBook from "pages/components-overview/AddBook";
import EditBook from "pages/components-overview/EditBook";
import BookList from "pages/components-overview/BookList";
import CourseSections from "pages/components-overview/CourseSections";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - sample page
const SamplePage = Loadable(lazy(() => import("pages/extra-pages/SamplePage")));

// render - management
const CourseManagement = Loadable(
  lazy(() => import("pages/components-overview/CourseManagement"))
);
const WebContent = Loadable(
  lazy(() => import("pages/components-overview/WebContent"))
);
const BookManagement = Loadable(
  lazy(() => import("pages/components-overview/BookManagement"))
);
const AntIcons = Loadable(
  lazy(() => import("pages/components-overview/AntIcons"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "/webcontent",
      element: <WebContent />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "sample-page",
      element: <SamplePage />,
    },
    {
      path: "bookmanagement",
      element: <BookManagement />,
      children: [
        {
          path: "",
          element: <BookList />,
        },
        {
          path: "addbook",
          element: <AddBook />,
        },
        {
          path: "edit/:id",
          element: <EditBook />,
        },
        // Update or add more routes here
      ],
    },
    {
      path: "coursemanagement",
      element: <CourseManagement />,
      children: [
        {
          path: "",
          element: <CourseList />,
        },
        {
          path: "addcourse",
          element: <AddCourse />,
        },
        {
          path: "editcourse/:id",
          element: <EditCourse />,
        },
        {
          path: "coursesections/:id",
          element: <CourseSections />,
        },
        // Update or add more routes here
      ],
    },
    {
      path: "icons/ant",
      element: <AntIcons />,
    },
  ],
};

export default MainRoutes;
