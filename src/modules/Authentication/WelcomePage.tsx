import { Flex, Col, Typography, theme as antTheme } from 'antd';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { PATH_REGISTER } from '@/routes/routes.path';


const { Title, Paragraph } = Typography;

export default function LeftPage() {
  const location = useLocation();
  const token = antTheme.useToken();
  const { t } = useTranslation('auth');
  const titleName = useMemo(() => {
    return location.pathname === PATH_REGISTER
      ? t('authen_welcome_title_register')
      : t('authen_welcome_title');
  }, [location.pathname]);

  return (
    <Flex
      justify='center'
      align='center'
      vertical
      style={{
        backgroundColor: token.token.colorPrimary,
        height: '100%',
        overflow: 'hidden',
        padding: '1rem'
      }}>
      <Col style={{ textAlign: 'center', lineHeight: '20px' }}>
        <Flex
          align='center'
          justify='center'
          gap={16}
          style={{ marginBottom: '20px' }}>
          <img src='/logo-no-background.png' style={{ width: '40px' }} />
          <p style={{ color: 'white', fontSize: '20px' }}>Antd Admin</p>
        </Flex>
        <Title level={2} style={{ color: 'white' }}>
          {titleName}
        </Title>
        <Paragraph style={{ color: 'white' }}>
          {t('authen_welcome_description')}
        </Paragraph>
      </Col>
    </Flex>
  );
}
