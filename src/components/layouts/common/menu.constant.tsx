import { DashboardOutlined, FileTextOutlined, LockOutlined, RocketOutlined, UserOutlined } from "@ant-design/icons";
import { MenuList } from "./menu.type";
import { PATH_DOCUMENTATION, PATH_GUIDE, PATH_HOME, PATH_PERMISSION_ROUTE, PATH_USER_MANAGEMENT } from "@/routes/routes.path";
import i18n from "@/i18n";

export const menuSideBar: MenuList = [
    {
      code: 'dashboard',
      label: i18n.t('common:menu_dashboard'),
      icon: <DashboardOutlined />,
      path: PATH_HOME,
    },
    {
      code: 'user_management',
      label: i18n.t('common:menu_user_management'),
      icon: <UserOutlined />,
      path: PATH_USER_MANAGEMENT,
      scope: 'user:read'
    },
    {
      code: 'documentation',
      label: i18n.t('common:menu_documentation'),
      icon: <FileTextOutlined />,
      path: PATH_DOCUMENTATION,
    },
    {
      code: 'guide',
      label: i18n.t('common:menu_guide'),
      icon: <RocketOutlined />,
      path: PATH_GUIDE,
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
          path: PATH_PERMISSION_ROUTE,
          scope: 'permission:read'
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