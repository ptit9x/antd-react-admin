import { Drawer, Layout, theme as antTheme } from 'antd';
import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import HeaderComponent from './common/header';
import MenuComponent from './common/menu';
import { useMediaQuery } from '@uidotdev/usehooks';
import { menuSideBar } from './common/menu.constant';
import { useAppContext } from '@/hooks/useAppContext';
// import { LocalStorageKey } from '@/constants/local-storage.constants';
// import { PATH_LOGIN } from '@/routes/routes.path';

const { Sider, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const { collapsed, setCollapsed } = useAppContext();
  // const [accessToken] = useLocalStorage(LocalStorageKey.access_token, '');
  const token = antTheme.useToken();

  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  // TODO: uncomment when join real project
  // if (!accessToken) {
  //   return <Navigate to={PATH_LOGIN} />;
  // }

  return (
    <Layout>
      <HeaderComponent collapsed={collapsed} toggle={toggle} />
      <Layout>
        {!isMobile ? (
          <Sider
            className="layout-page-sider"
            trigger={null}
            collapsible
            style={{ backgroundColor: token.token.colorBgContainer }}
            collapsedWidth={isMobile ? 0 : 80}
            collapsed={collapsed}
            breakpoint="md"
          >
            <MenuComponent
              menuList={menuSideBar}
              openKey={openKey}
              onChangeOpenKey={k => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={k => setSelectedKey(k)}
            />
          </Sider>
        ) : (
          <Drawer
            width="200"
            placement="left"
            closable={false}
            onClose={toggle}
            open={!collapsed}
          >
            <MenuComponent
              menuList={menuSideBar}
              openKey={openKey}
              onChangeOpenKey={k => setOpenkey(k)}
              selectedKey={selectedKey}
              onChangeSelectedKey={k => setSelectedKey(k)}
            />
          </Drawer>
        )}
        <Content style={{
            padding: 16,
            margin: 0,
            height: 'calc(100vh - 64px)',
            overflowY: 'scroll',
          }}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
