import { Flex, Grid, Typography } from 'antd';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;
const { useBreakpoint } = Grid;

export default function RegisterModule() {
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
      <Title style={{ margin: 0 }}>{t('Create an account')}</Title>
      <Flex gap={8}>
        <p>{t('Already have an account?')}</p>
        <a href='/auth/login'>{t('Sign in here')}</a>
      </Flex>
      <RegisterForm />
    </Flex>
  );
}
