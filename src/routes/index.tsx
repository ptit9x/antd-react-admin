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

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const Documentation = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/documentation'));
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '@/pages/guide'));
const TablePage = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/components/table'));
const TabPage = lazy(() => import(/* webpackChunkName: "route-permission"*/ '@/pages/components/tabs'));

const routeList: RouteObject[] = [
  {
    path: '/auth',
    element: <WrapperRouteComponent element={<AuthenticationLayout />} />,
    children: [
      {
        path: 'login',
        element: <WrapperRouteComponent element={<LoginPage />} />,
      },
      {
        path: 'register',
        element: <WrapperRouteComponent element={<RegisterPage />} />,
      },
      {
        path: 'password-reset',
        element: <WrapperRouteComponent element={<ForgotPasswordPage />} />,
      },
    ]
  },
  {
    path: '/',
    element: <WrapperRouteComponent element={<MainLayout />} />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<DashBoardPage />} />,
      },
      {
        path: 'documentation',
        element: <WrapperRouteComponent element={<Documentation />} />,
      },
      {
        path: 'guide',
        element: <WrapperRouteComponent element={<Guide />} />,
      },
      {
        path: 'permission/route',
        element: <WrapperRouteComponent element={<TabPage />} auth />,
      },
      {
        path: 'component/tabs',
        element: <WrapperRouteComponent element={<TabPage />} />,
      },
      {
        path: 'component/table',
        element: <WrapperRouteComponent element={<TablePage />} />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = createBrowserRouter(routeList);

  return <RouterProvider router={element} />;
};

export default RenderRouter;
