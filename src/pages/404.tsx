import { Button, Result } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('common');

  return (
    <Result
      status="404"
      title="404"
      subTitle={t('page_not_found_title')}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          {t('back_home')}
        </Button>
      }
    />
  );
};

export default NotFoundPage;
