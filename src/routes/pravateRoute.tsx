import { useMemo, type FC } from 'react';
import type { RouteProps } from 'react-router';

import { Button, Result } from 'antd';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocalStorage } from '@uidotdev/usehooks';
import { LocalStorageKey } from '@/constants/local-storage.constants';
import { jwtDecode } from 'jwt-decode';
import { IToken } from '@/types';
import { menuSideBar } from '@/components/layouts/common/menu.constant';
import { MenuList } from '@/components/layouts/common/menu.type';

const PrivateRoute: FC<RouteProps> = props => {
  const [accessToken] = useLocalStorage(LocalStorageKey.access_token, '');
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('common');

  const hasPermission: boolean = useMemo(() => {
    const flatMenus: MenuList = [];
    menuSideBar.forEach((menu) => {
      if (menu?.children?.length) {
        flatMenus.push(...menu.children);
      } else {
        flatMenus.push(menu);
      }
    });
    const scopeInPath = flatMenus.find(menu => menu.path === location.pathname)?.scope;
    const tokenDecode: IToken | null = accessToken ? jwtDecode(accessToken) : null;
    return tokenDecode?.role?.permissions
      .map(v => v.name)
      ?.some(scope => scope === 'all' || scope === scopeInPath) || false;
  }, [accessToken, location.pathname]);

  return hasPermission ? (
    (props.element as React.ReactElement)
  ) : (
    <Result
      status="403"
      title="403"
      subTitle={t('page_not_authorize')}
      extra={
        <Button
          type="primary"
          onClick={() => navigate(`/auth/login${'?from=' + encodeURIComponent(location.pathname)}`, { replace: true })}
        >
          {t('go_to_login')}
        </Button>
      }
    />
  );
};

export default PrivateRoute;
