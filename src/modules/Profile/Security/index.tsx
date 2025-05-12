import { ChangePasswordParams } from '@/types';
import { Card, Form, Input, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { SaveOutlined } from '@ant-design/icons';
import userServices from '@/services/user.services';
export default function SecurityModule() {
  const { t } = useTranslation('auth');
  const [form] = Form.useForm();
  const onFinished = async (formData: ChangePasswordParams) => {
    userServices
      .changePassword(formData)
      .then(() => {
        message.success(t('change_password_success'));
        form.resetFields();
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);
      });
  };

  return (
    <Card title={t('change_your_password')}>
      <Form<ChangePasswordParams> form={form} onFinish={onFinished}>
        <Form.Item
          name='oldPassword'
          label={t('old_password')}
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: t('please_input_your_old_password')
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='newPassword'
          label={t('new_password')}
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: t('please_input_your_new_password')
            }
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name='confirmPassword'
          label={t('confirm_password')}
          labelCol={{ span: 24 }}
          rules={[
            {
              required: true,
              message: t('please_input_your_confirm_password')
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('newPassword') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('require_confirm_password')));
              }
            })
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
          {t('save_changes')}
        </Button>
      </Form>
    </Card>
  );
}
