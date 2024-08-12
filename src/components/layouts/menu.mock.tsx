import { DashboardOutlined, FileTextOutlined, LockOutlined, RocketOutlined } from "@ant-design/icons";
import { MenuList } from "./menu.type";

export const mockMenuList: MenuList = [
    {
      code: 'dashboard',
      label: {
        zh_CN: '首页',
        en_US: 'Dashboard',
      },
      icon: <DashboardOutlined />,
      path: '/dashboard',
    },
    {
      code: 'documentation',
      label: {
        zh_CN: '文档',
        en_US: 'Documentation',
      },
      icon: <FileTextOutlined />,
      path: '/documentation',
    },
    {
      code: 'guide',
      label: {
        zh_CN: '引导',
        en_US: 'Guide',
      },
      icon: <RocketOutlined />,
      path: '/guide',
    },
    {
      code: 'permission',
      label: {
        zh_CN: '权限',
        en_US: 'Permission',
      },
      icon: <LockOutlined />,
      path: '/permission',
      children: [
        {
          code: 'routePermission',
          label: {
            zh_CN: '路由权限',
            en_US: 'Route Permission',
          },
          path: '/permission/route',
        },
        {
          code: 'notFound',
          label: {
            zh_CN: '404',
            en_US: '404',
          },
          path: '/permission/404',
        },
      ],
    },
    {
      code: 'component',
      label: {
        zh_CN: '组件',
        en_US: 'Component',
      },
      icon: <LockOutlined />,
      path: '/component',
      children: [
        {
          code: 'componentForm',
          label: {
            zh_CN: '表单',
            en_US: 'Form',
          },
          path: '/component/form',
        },
        {
          code: 'componentTable',
          label: {
            zh_CN: '表格',
            en_US: 'Table',
          },
          path: '/component/table',
        },
        {
          code: 'componentTabs',
          label: {
            zh_CN: '选项卡',
            en_US: 'Tabs',
          },
          path: '/component/tabs',
        },
      ],
    },
  ];