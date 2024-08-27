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
            label={t('first_name')}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: t('please_input_your_first_name'),
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item
            name='lastName'
            label={t('last_name')}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: t('please_input_your_last_name'),
              },
            ]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name='email'
        label={t('email')}
        labelCol={{ span: 24 }}
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
        label={t('password')}
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('please_input_your_password'),
          },
        ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item
        name='confirmPassword'
        label={t('confirm_password')}
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('please_input_your_confirm_password'),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error(t('the_two_passwords_that_you_entered_do_not_match!'))
              );
            },
          }),
        ]}>
        <Input.Password />
      </Form.Item>
      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>{t('i_agree')}</Checkbox>
        <a>{t('terms_and_conditions')}</a>
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' type='primary'>
          {t('continue')}
        </Button>
      </Form.Item>
    </Form>
  );
}
