import { Suspense } from 'react';
import { Outlet } from 'react-router';
import UserInforModule from '@/modules/Profile/UserInfor';
import { Layout } from 'antd';

const ProfileLayout = () => {
  return (
    <Layout>
      <UserInforModule />
      <div style={{ marginTop: '1.5rem' }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </Layout>
  );
};
export default ProfileLayout;
