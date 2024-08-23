import {
  Card,
  Form,
  Input,
  Select,
  Row,
  Col,
  Radio,
  Button,
  Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserParams } from '@/types';
import type { RadioChangeEvent } from 'antd';
import { useState } from 'react';
import { SaveOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const initialValues: UserParams = {
  userId: '474e2cd2-fc79-49b8-98fe-dab443facede',
  firstName: 'Kelvin',
  middleName: 'Kiptum',
  lastName: 'Kiprop',
  email: 'kelvin.kiprop96@gmail.com',
  userName: 'kelvink96',
  company: 'Design Sparx',
  subscription: 'Pro',
  status: true,
};

export default function DetailsModule() {
  const navigate = useNavigate();
  const { t } = useTranslation('profile');
  // const location = useLocation();
  const [value, setValue] = useState(initialValues.status);
  const userId = initialValues.userId;

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const onFinished = async (form: UserParams) => {
    console.log('Call API with request: ', form);
    // const res = dispatch(await loginAsync(form));

    // if (!!res) {
    // const search = formatSearch(location.search);
    // const from = search.from || { pathname: '/' };

    navigate('/');
    // }
  };
  return (
    <Card>
      <Form<UserParams> onFinish={onFinished} initialValues={initialValues}>
        <Col sm={24} lg={24}>
          <Form.Item
            name='userId'
            label={t('user_id')}
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: t('please_input_your_user_id'),
              },
            ]}>
            <Input
              readOnly
              suffix={
                <Paragraph
                  copyable={{ text: userId }}
                  style={{ margin: 0 }}></Paragraph>
              }
            />
          </Form.Item>
        </Col>
        <Row gutter={16}>
          <Col sm={24} lg={8} style={{ width: '100%' }}>
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
          <Col sm={24} lg={8} style={{ width: '100%' }}>
            <Form.Item
              name='middleName'
              label={t('middle_name')}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: t('please_input_your_middle_name'),
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24} lg={8} style={{ width: '100%' }}>
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
        <Row gutter={16}>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
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
          </Col>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
            <Form.Item
              name='userName'
              label={t('user_name')}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: t('please_input_your_user_name'),
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
            <Form.Item
              name='company'
              label={t('company')}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: t('please_input_your_company'),
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col sm={24} lg={12} style={{ width: '100%' }}>
            <Form.Item
              name='subscription'
              label={t('subcription')}
              labelCol={{ span: 24 }}
              rules={[
                {
                  required: true,
                  message: t('please_input_your_subscription'),
                },
              ]}>
              <Select />
            </Form.Item>
          </Col>
        </Row>
        <Radio.Group name='status' onChange={onChange} value={value}>
          <Radio value={true}>{t('active')}</Radio>
          <Radio value={false}>{t('inactive')}</Radio>
        </Radio.Group>
        <Row style={{ marginTop: 16 }}>
          <Button type='primary' htmlType='submit' icon={<SaveOutlined />}>
            {t('save_changes')}
          </Button>
        </Row>
      </Form>
    </Card>
  );
}
