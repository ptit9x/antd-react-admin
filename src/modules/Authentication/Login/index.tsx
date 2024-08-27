import { Flex, Typography, Grid } from 'antd';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next';
import { PATH_REGISTER } from '@/routes/routes.path';
import { Link } from 'react-router-dom';
const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function LoginModule() {
  const screens = useBreakpoint();
  const { t } = useTranslation('auth');
  return (
    <Flex
      justify='center'
      align={screens.lg ? 'start' : 'center'}
      vertical
      style={{
        height: '100%',
        lineHeight: '50px',
        padding: '2rem',
      }}>
      <Title style={{ margin: 0 }}>{t('login')}</Title>
      <Flex gap={8}>
        <p>{t('do_not_have_an_account')}?</p>
        <Link to={PATH_REGISTER}>{t('create_an_account_here')}</Link>
      </Flex>
      <LoginForm />
    </Flex>
  );
}
