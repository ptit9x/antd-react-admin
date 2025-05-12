import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

// import LoginPage from '@/pages/login';

import WrapperRouteComponent from './config';
import MainLayout from '@/components/layouts/main';
import AuthenticationLayout from '@/components/layouts/authentication';
import DashBoardPage from '@/pages/dashboard';
import LoginPage from '@/pages/authentication/login';
import RegisterPage from '@/pages/authentication/register';
import ForgotPasswordPage from '@/pages/authentication/forgotPassword';
import UserManagementPage from '@/pages/user-management';
import ProfileLayout from '@/components/layouts/profile';
import DetailPage from '@/pages/profile/DetailPage';
import PreferencesPage from '@/pages/profile/PreferencesPage';
import SecurityPage from '@/pages/profile/SecurityPage';
import ActivityPage from '@/pages/profile/ActivityPage';
import {
  PATH_GUIDE,
  PATH_HOME,
  PATH_PROFILE,
  PATH_USER_MANAGEMENT,
  PATH_USER_DETAIL,
  PATH_LIBRARY_CATEGORY_LISTING,
  PATH_LIBRARY_BLOG_LISTING
} from './routes.path';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const UserDetailPage = lazy(() => import('@/pages/user-management/detail'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '@/pages/guide'));
const TablePage = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/components/table'));
const TabPage = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/components/tabs'));
const CategoryListingPage = lazy(() => import('@/pages/categories'));
const BlogListingPage = lazy(() => import('@/pages/blogs'));

const routeList: RouteObject[] = [
  {
    path: '/auth',
    element: <WrapperRouteComponent element={<AuthenticationLayout />} />,
    children: [
      {
        path: 'login',
        element: <WrapperRouteComponent element={<LoginPage />} />
      },
      {
        path: 'register',
        element: <WrapperRouteComponent element={<RegisterPage />} />
      },
      {
        path: 'password-reset',
        element: <WrapperRouteComponent element={<ForgotPasswordPage />} />
      }
    ]
  },

  {
    path: '/',
    element: <WrapperRouteComponent element={<MainLayout />} />,
    children: [
      {
        path: '',
        element: <Navigate to='dashboard' />
      },
      {
        path: PATH_HOME,
        element: <WrapperRouteComponent element={<DashBoardPage />} />
      },
      {
        path: PATH_USER_MANAGEMENT,
        element: <WrapperRouteComponent element={<UserManagementPage />} auth />
      },
      {
        path: PATH_USER_DETAIL,
        element: <WrapperRouteComponent element={<UserDetailPage />} auth />
      },
      {
        path: PATH_LIBRARY_CATEGORY_LISTING,
        element: <WrapperRouteComponent element={<CategoryListingPage />} auth />
      },
      {
        path: PATH_LIBRARY_BLOG_LISTING,
        element: <WrapperRouteComponent element={<BlogListingPage />} auth />
      },
      {
        path: PATH_GUIDE,
        element: <WrapperRouteComponent element={<Guide />} />
      },
      {
        path: 'permission/route',
        element: <WrapperRouteComponent element={<TabPage />} auth />
      },
      {
        path: 'component/tabs',
        element: <WrapperRouteComponent element={<TabPage />} />
      },
      {
        path: 'component/table',
        element: <WrapperRouteComponent element={<TablePage />} />
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} />
      },
      {
        path: PATH_PROFILE,
        element: <WrapperRouteComponent element={<ProfileLayout />} />,
        children: [
          {
            path: 'details',
            element: <WrapperRouteComponent element={<DetailPage />} />
          },
          {
            path: 'preferences',
            element: <WrapperRouteComponent element={<PreferencesPage />} />
          },
          {
            path: 'security',
            element: <WrapperRouteComponent element={<SecurityPage />} />
          },
          {
            path: 'activity',
            element: <WrapperRouteComponent element={<ActivityPage />} />
          }
        ]
      }
    ]
  }
];

const RenderRouter: FC = () => {
  const element = createBrowserRouter(routeList);

  return <RouterProvider router={element} />;
};

export default RenderRouter;
