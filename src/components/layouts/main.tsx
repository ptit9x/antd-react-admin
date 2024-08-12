import { Drawer, Layout, theme as antTheme } from 'antd';
import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import HeaderComponent from './header';
import MenuComponent from './menu';
import { useMediaQuery } from '@uidotdev/usehooks';
import { mockMenuList } from './menu.mock';
import { useAppContext } from '@/hooks/useAppContext';

const { Sider, Content } = Layout;

const MainLayout = () => {
  const location = useLocation();
  const [openKey, setOpenkey] = useState<string>();
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);
  const { collapsed, setCollapsed } = useAppContext();
  const token = antTheme.useToken();

  const isMobile = useMediaQuery("only screen and (max-width : 768px)");

  const toggle = () => {
    setCollapsed(!collapsed);
  };

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
              menuList={mockMenuList}
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
              menuList={mockMenuList}
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
            minHeight: 500,
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
