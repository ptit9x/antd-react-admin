import { Flex, Typography, Grid } from 'antd';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function LoginModule() {
  const screens = useBreakpoint();
  const { t } = useTranslation('auth');
  const message = "Don't have an account?";
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
        <p>{t(message)}</p>
        <a href='/auth/register'>{t('Create an account here')}</a>
      </Flex>
      <LoginForm />
    </Flex>
  );
}
