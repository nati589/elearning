import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AddCourse from 'pages/components-overview/AddCourse';
import EditCourse from 'pages/components-overview/EditCourse';
import CourseList from 'pages/components-overview/CourseList';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - management
const CourseManagement = Loadable(lazy(() => import('pages/components-overview/CourseManagement')));
const WebContent = Loadable(lazy(() => import('pages/components-overview/WebContent')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: '/webcontent',
      element: <WebContent />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'coursemanagement',
      element: <CourseManagement />,
      children: [
        {
          path: '',
          element: <CourseList />
        },
        {
          path: 'addcourse',
          element: <AddCourse />
        },
        {
          path: 'edit/:id',
          element: <EditCourse />
        },
        // Update or add more routes here
      ]
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
