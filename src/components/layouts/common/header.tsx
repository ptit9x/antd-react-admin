import type { FC } from 'react';

import { LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Layout, theme as antTheme, Tooltip, Button, Flex } from 'antd';
import { useNavigate } from 'react-router-dom';

import Avator from '@/assets/header/avator.jpeg';
import ReactSvg from '@/assets/logo/react.svg';
import { useAppContext } from '@/hooks/useAppContext';
import { useMediaQuery } from '@uidotdev/usehooks';
import { MoonIcon } from '../../icons/MoonIcon';
import { SunIcon } from '../../icons/SunIcon';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from 'react-i18next';
import { PATH_LOGIN } from '@/routes/routes.path';

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  toggle: () => void;
}

type Action = 'userInfo' | 'userSetting' | 'logout';

const HeaderComponent: FC<HeaderProps> = ({ collapsed, toggle }) => {
  const { theme, setTheme } = useAppContext();
  const navigate = useNavigate();
  const { t } = useTranslation('common');
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const token = antTheme.useToken();
  const logged = true;

  const onActionClick = async (action: Action) => {
    switch (action) {
      case 'userInfo':
        return;
      case 'userSetting':
        return;
      case 'logout':
        navigate(PATH_LOGIN);
        return;
    }
  };

  const toLogin = () => {
    navigate(PATH_LOGIN);
  };

  const onChangeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <Header className="layout-page-header bg-2" style={{ 
        padding: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9,
        boxShadow: `0 4px 10px ${token.token.colorBgTextHover}`,
        backgroundColor: token.token.colorBgContainer 
      }}>
      {!isMobile && (
        <Flex align='center' justify='center' gap={10} style={{ width: collapsed ? 80 : 200 }}>
          <img src={ReactSvg} alt="" style={{ marginRight: collapsed ? '2px' : '20px' }} />
        </Flex>
      )}
      <Flex align='center' justify='space-between' flex={1} style={{
        padding: '0 15px',
      }}>
        <Button 
          id="sidebar-trigger" type='text' icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />} onClick={toggle} />
        <Flex gap={10} align='center'>
          <Tooltip
            title={theme === 'dark' ? t('switch_to_light_theme') : t('switch_to_dark_theme')}
          >
            <Button id="theme-change" type='text' icon={theme === 'dark' 
              ? <SunIcon /> 
              : <MoonIcon /> } 
              onClick={onChangeTheme} />
          </Tooltip>
          {/* <HeaderNoticeComponent /> */}
          <LanguageDropdown />

          {logged ? (
            <Dropdown
              menu={{
                items: [
                  {
                    key: '1',
                    icon: <UserOutlined />,
                    label: (
                      <span onClick={() => navigate('/dashboard')}>
                        {t('account')}
                      </span>
                    ),
                  },
                  {
                    key: '2',
                    icon: <LogoutOutlined />,
                    label: (
                      <span onClick={() => onActionClick('logout')}>
                        {t('logout')}
                      </span>
                    ),
                  },
                ],
              }}
            >
              <img src={Avator} alt="avatar" width={40} height={40} />
            </Dropdown>
          ) : (
            <span style={{ cursor: 'pointer' }} onClick={toLogin}>
              {t('login')}
            </span>
          )}
        </Flex>
      </Flex>
    </Header>
  );
};

export default HeaderComponent;
