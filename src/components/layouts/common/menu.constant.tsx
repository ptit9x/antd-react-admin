import { DashboardOutlined, FileTextOutlined, LockOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuList } from "./menu.type";

export const menuSideBar: MenuList = [
    {
      code: 'dashboard',
      label: "Dashboard",
      icon: <DashboardOutlined />,
      path: '/dashboard',
    },
    {
      code: 'documentation',
      label: 'Documentation',
      icon: <FileTextOutlined />,
      path: '/documentation',
    },
    {
      code: 'guide',
      label: 'Guide',
      icon: <RocketOutlined />,
      path: '/guide',
    },
    {
      code: 'permission',
      label: 'Permission',
      icon: <LockOutlined />,
      path: '/permission',
      children: [
        {
          code: 'routePermission',
          label: 'Route Permission',
          path: '/permission/route',
        },
        {
          code: 'notFound',
          label: '404',
          path: '/permission/404',
        },
      ],
    },
    {
      code: 'component',
      label: 'Component',
      icon: <LockOutlined />,
      path: '/component',
      children: [
        {
          code: 'componentForm',
          label: 'Form',
          path: '/component/form',
        },
        {
          code: 'componentTable',
          label: 'Table',
          path: '/component/table',
        },
        {
          code: 'componentTabs',
          label: 'Tabs',
          path: '/component/tabs',
        },
      ],
    },
  ];