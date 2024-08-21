import type { FC } from 'react';
import type { RouteProps } from 'react-router';

import { Button, Result } from 'antd';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivateRoute: FC<RouteProps> = props => {
  const logged = !!localStorage.getItem("token")
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('common');

  return logged ? (
    (props.element as React.ReactElement)
  ) : (
    <Result
      status="403"
      title="403"
      subTitle={t('page_not_found_title')}
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
