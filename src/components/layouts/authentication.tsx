import LeftPage from '@/modules/Authentication/LeftPage';
import { Layout, Row, Col } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

const AuthenticationLayout = () => {
  return (
    <Layout>
      <Row style={{ minHeight: '100vh' }}>
        <Col sm={24} lg={12}>
          <LeftPage />
        </Col>
        <Col sm={24} lg={12}>
          <Content style={{ height: '100%' }}>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Content>
        </Col>
      </Row>
    </Layout>
  );
};

export default AuthenticationLayout;
