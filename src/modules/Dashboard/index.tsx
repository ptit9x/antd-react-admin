import type { FC } from 'react';
import { useEffect, useState } from 'react';
import Overview from './overview';
import { Col, Row, Space } from 'antd';
import TimeLine from './timeLine';
import { Breadcrumb } from '@/components/breadcrumb';
import Progress from './progress';
import { useTranslation } from 'react-i18next';

const DashBoardModule: FC = () => {
  const { t } = useTranslation('common');
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

  const BreadcrumbItems = [
    {
      path: '/',
      title: t('home'),
    },
    {
      title: t('dashboard'),
    },
  ];

  return (
    <Row gutter={16}>
      <Col span={24} style={{ padding: 16 }}>
        <Space size={'small'} direction='vertical'>
          <Breadcrumb items={BreadcrumbItems} />
        </Space>
      </Col>
      <Col span={24}>
        <Overview loading={loading} />
        <Progress />
        <TimeLine loading={loading} />
      </Col>
    </Row>
  );
};

export default DashBoardModule;
