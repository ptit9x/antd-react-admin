import { Button, Col, Row, Form, Input, Checkbox } from 'antd';
import { RegisterParams } from '@/types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function RegisterForm() {
  const navigate = useNavigate();
  const { t } = useTranslation('auth');
  // const location = useLocation();

  const onFinished = async (form: RegisterParams) => {
    console.log('Call API with request: ', form);
    // const res = dispatch(await loginAsync(form));

    // if (!!res) {
    // const search = formatSearch(location.search);
    // const from = search.from || { pathname: '/' };

    navigate('/');
    // }
  };
  return (
    <Form<RegisterParams>
      onFinish={onFinished}
      style={{
        alignItems: 'start',
        width: '100%',
      }}>
      <Row gutter={8}>
        <Col xs={24} lg={12}>
          <Form.Item
            name='firstName'
            label={t('First Name')}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: t('Please input your first name'),
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            name='lastName'
            label={t('Last Name')}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: t('Please input your last name'),
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name='username'
        label={t('Email')}
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('Please input your email'),
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
        rules={[
          {
            required: true,
            message: t('Please input your password'),
          },
        ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        name='confirmPassword'
        label={t('Confirm Password')}
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('Please input your confirm password'),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(t('The two passwords that you entered do not match!'))
              );
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>{t('I agree')}</Checkbox>
        <a>{t('terms and conditions')}</a>
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary'>
          {t('Continue')}
        </Button>
      </Form.Item>
    </Form>
  );
}
