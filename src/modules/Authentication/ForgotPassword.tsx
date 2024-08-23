import { Flex, Form, Input, Button, Grid } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ResetPasswordParams } from '@/types';

const { useBreakpoint } = Grid;

export default function ForgotPasswordModule() {
  const { t } = useTranslation('auth');
  const navegate = useNavigate();
  const screens = useBreakpoint();
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
      <h1
        style={{
          fontWeight: '500',
          fontSize: '38px',
        }}>
        {t('forgot_password')}
      </h1>
      <p>{t('enter_your_email_to_reset_your_password')}</p>
      <Form<ResetPasswordParams> style={{ width: '100%' }}>
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
        <Form.Item>
          <Button htmlType='submit' type='primary'>
            {t('continue')}
          </Button>
          <Button
            type='text'
            style={{ marginLeft: '20px' }}
            onClick={() => {
              navegate(-1);
            }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
}
