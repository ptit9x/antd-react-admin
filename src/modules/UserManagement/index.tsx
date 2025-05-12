import type { FC } from 'react';
import TableBox from './TableBox';
import { Breadcrumb } from '@/components/breadcrumb';
import { Row, Col, Space } from 'antd';
import i18n from '@/i18n';

const BreadcrumbItems = [
  {
    path: '/',
    title: i18n.t('common:home')
  },
  {
    title: i18n.t('common:menu_user_management')
  }
];

const UserManagement: FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Space size={'small'} direction='vertical'>
          <Breadcrumb items={BreadcrumbItems} />
        </Space>
      </Col>
      <Col span={24}>
        <TableBox />
      </Col>
    </Row>
  );
};

export default UserManagement;
