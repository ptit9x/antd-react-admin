import { Flex, Grid, Typography } from 'antd';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';
import { PATH_LOGIN } from '@/routes/routes.path';
import { Link } from 'react-router-dom';
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
      <Title style={{ margin: 0 }}>{t('create_an_account')}</Title>
      <Flex gap={8}>
        <p>{t('already_have_an_account')}?</p>
        <Link to={PATH_LOGIN}>{t('sign_in_here')}?</Link>
      </Flex>
      <RegisterForm />
    </Flex>
  );
}
