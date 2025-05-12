import { Col, Row, Space } from 'antd';
import CardInfo from '@/modules/UserManagement/UserDetail/CardInfo';
import { Breadcrumb } from '@/components/breadcrumb';
import i18n from '@/i18n';
import { PATH_USER_MANAGEMENT } from '@/routes/routes.path';
import { useEffect, useState } from 'react';

const BreadcrumbItems = [
  {
    path: '/',
    title: i18n.t('common:home')
  },
  {
    path: PATH_USER_MANAGEMENT,
    title: i18n.t('common:menu_user_management')
  },
  {
    title: i18n.t('user:user_detail')
  }
];

const UserDetail = () => {
  const [loading, setLoading] = useState(true);

  // mock timer to mimic dashboard data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space size={'small'} direction='vertical'></Space>
          <Breadcrumb items={BreadcrumbItems} />
        </Col>
        <Col span={24}>
          <CardInfo loading={loading} />
        </Col>
      </Row>
    </>
  );
};

export default UserDetail;
