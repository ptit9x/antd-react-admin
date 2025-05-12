import { DashboardOutlined, FileTextOutlined, RocketOutlined, UserOutlined } from '@ant-design/icons';
import { MenuList } from './menu.type';
import {
  PATH_GUIDE,
  PATH_HOME,
  PATH_USER_MANAGEMENT,
  PATH_LIBRARY_CATEGORY_LISTING,
  PATH_LIBRARY_BLOG_LISTING
} from '@/routes/routes.path';
import i18n from '@/i18n';

export const menuSideBar: MenuList = [
  {
    code: 'dashboard',
    label: i18n.t('common:menu_dashboard'),
    icon: <DashboardOutlined />,
    path: PATH_HOME
  },
  {
    code: 'guide',
    label: i18n.t('common:menu_guide'),
    icon: <RocketOutlined />,
    path: PATH_GUIDE
  },
  {
    code: 'user_management',
    label: i18n.t('common:menu_user_management'),
    icon: <UserOutlined />,
    path: PATH_USER_MANAGEMENT,
    scope: 'user:read'
  },
  {
    code: 'library',
    label: i18n.t('library:library'),
    icon: <FileTextOutlined />,
    path: '',
    children: [
      {
        code: 'category_listing',
        label: i18n.t('library:categories'),
        path: PATH_LIBRARY_CATEGORY_LISTING,
        scope: 'library:manager'
      },
      {
        code: 'lesson_listing',
        label: i18n.t('library:blogs'),
        path: PATH_LIBRARY_BLOG_LISTING,
        scope: 'library:manager'
      }
    ]
  }
];
