import type { FC } from 'react';

import { Flex, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { MenuList } from './menu.type';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useAppContext } from '@/hooks/useAppContext';

interface MenuProps {
  menuList: MenuList;
  openKey?: string;
  onChangeOpenKey: (key?: string) => void;
  selectedKey: string;
  onChangeSelectedKey: (key: string) => void;
}

const MenuComponent: FC<MenuProps> = props => {
  const { menuList, openKey, onChangeOpenKey, selectedKey, onChangeSelectedKey } = props;
  const isMobile = useMediaQuery("only screen and (max-width : 768px)");
  const navigate = useNavigate();
  const { setCollapsed } = useAppContext();

  const getTitle = (menu: MenuList[0]) => {
    return (
      <Flex align='center'>
        {menu.icon}
        <span>{menu.label}</span>
      </Flex>
    );
  };

  const onMenuClick = (path: string) => {
    onChangeSelectedKey(path);
    navigate(path);

    if (isMobile) {
      setCollapsed(true);
    }
  };

  const onOpenChange = (keys: string[]) => {
    const key = keys.pop();
    onChangeOpenKey(key);
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[selectedKey]}
      openKeys={openKey ? [openKey] : []}
      onOpenChange={onOpenChange}
      onSelect={k => onMenuClick(k.key)}
      className="layout-page-sider-menu text-2"
      items={menuList.map(menu => {
        return menu.children
          ? {
              key: menu.code,
              label: getTitle(menu),
              children: menu.children.map(child => ({
                key: child.path,
                label: child.label,
              })),
            }
          : {
              key: menu.path,
              label: getTitle(menu),
            };
      })}
    />
  );
};

export default MenuComponent;
