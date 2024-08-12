import type { FC } from 'react';

import { useEffect, useState } from 'react';

import Overview from './overview';
import { Col, Row } from 'antd';
import TimeLine from './timeLine';

const DashBoardModule: FC = () => {
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
    <Row gutter={16}>
      <Col span={24}>
        <Overview loading={loading} />
        <TimeLine loading={loading} />
      </Col>
    </Row>
  );
};

export default DashBoardModule;
