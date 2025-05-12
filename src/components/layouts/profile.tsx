import { Suspense } from 'react';
import { Outlet } from 'react-router';
import UserInfoModule from '@/modules/Profile/UserInfo';
import { Layout } from 'antd';

const ProfileLayout = () => {
  return (
    <Layout>
      <UserInfoModule />
      <div style={{ marginTop: '1.5rem' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Layout>
  );
};
export default ProfileLayout;
