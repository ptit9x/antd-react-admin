import { ChangePasswordParams } from '@/types';
import { Card, Form, Input, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { SaveOutlined } from '@ant-design/icons';
export default function SecurityModule() {
    const { t } = useTranslation('auth');
  return (
    <Card title={t('change_your_password')}>
     <Form<ChangePasswordParams> >
     <Form.Item
        name='currentPassword'
        label={t('current_password')}
        labelCol={{ span: 24 }}
        rules={[
          {
            required: true,
            message: t('please_input_your_current_password'),
          },
        ]}>
        <Input.Password />
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
      <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
            {t('save_changes')}
          </Button>
     </Form>
    </Card>
  );
}
