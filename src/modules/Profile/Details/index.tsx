import { Card, Form, Input, Row, Col, Button, message } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserDetailType, updateInfoParams } from '@/types';
import { SaveOutlined } from '@ant-design/icons';
import { useUserStore } from '@/stores/user.store';
import userServices from '@/services/user.services';
import { useEffect } from 'react';

export default function DetailsModule() {
  const { t } = useTranslation('user');
  const { profile } = useUserStore();
  const [form] = Form.useForm();

  useEffect(() => {
    if (profile) {
      form.setFieldsValue({
        id: profile?.id,
        name: profile?.name,
        phone: profile?.phone,
        email: profile?.email
      });
    }
  }, [profile, form]);
  const onFinished = async (formData: UserDetailType) => {
    const data: updateInfoParams = {
      name: formData.name,
      phone: formData.phone || ''
    };
    userServices
      .updateInfo(data)
      .then(() => {
        message.success(t('common:update_success'));
      })
      .catch((err) => {
        message.error(err?.response?.data?.message);
      });
  };
  return (
    <Card>
      <Form<UserDetailType> form={form} onFinish={onFinished}>
        <Row gutter={16}>
          <Col sm={24} lg={12}>
            <Form.Item name='id' label={t('user_id')} labelCol={{ span: 24 }}>
              <Input disabled />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
            <Form.Item
              name='name'
              label={t('name')}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: t('please_input_name')
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
            <Form.Item name='email' label={t('email')} labelCol={{ span: 24 }}>
              <Input disabled />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
            <Form.Item
              name='phone'
              label={t('phone')}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: t('please_input_phone')
                }
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row style={{ marginTop: 16 }}>
          <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
            {t('save_changes')}
          </Button>
        </Row>
      </Form>
    </Card>
  );
}
