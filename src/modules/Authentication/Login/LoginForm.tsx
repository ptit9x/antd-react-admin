import { Button, Checkbox, Flex, Form, Input, Grid } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LoginParams } from '@/types';

const initialValues: LoginParams = {
  username: 'guest@gmail.com',
  password: 'guest',
  // remember: true
};
const { useBreakpoint } = Grid;

export default function LoginForm() {
  const navigate = useNavigate();
  const { t } = useTranslation('auth');
  // const location = useLocation();
  
  const screens = useBreakpoint();
  const onFinished = async (form: LoginParams) => {
    console.log('Call API with request: ', form);
    // const res = dispatch(await loginAsync(form));

    // if (!!res) {
    // const search = formatSearch(location.search);
    // const from = search.from || { pathname: '/' };

    navigate('/');
    // }
  };
  return (
    <Form<LoginParams>
      onFinish={onFinished}
      initialValues={initialValues}
      style={{
        alignItems: 'start',
        width: '100%',
      }}>
      <Form.Item
        name='username'
        label="Email"
        labelCol={{ span: 24 }}
        style={{ width: screens.lg ? '70%' : '100%' }}
        rules={[
          {
            required: true,
            message: t('please_input_your_email'),
          },
          {
            type: 'email',
            message: t('please_input_a_valid_email'),
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name='password'
        label={t('Password')}
        labelCol={{ span: 24 }}
        style={{ width: screens.lg ? '70%' : '100%' }}
        rules={[
          {
            required: true,
            message: t('please_input_your_password'),
          },
        ]}>
        <Input.Password/>
      </Form.Item>
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>{t('remember_me')}</Checkbox>
      </Form.Item>
      <Form.Item>
        <Flex justify='space-between' style={{ width: screens.lg ? '70%' : '100%'}}>
          <Button htmlType='submit' type='primary'>
            {t('Continue')}
          </Button>
          <Button type='link' href='/auth/password-reset'>
            {t('Forgot password')}?
          </Button>
        </Flex>
      </Form.Item>
    </Form>
  );
}
