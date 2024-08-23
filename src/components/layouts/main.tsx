import { Suspense } from 'react';
import { Outlet } from 'react-router';
import BaseLayout from '@/components/layouts/baseLayout';

const MainLayout = () => {
  return (
    <BaseLayout>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </BaseLayout>
  );
};

export default MainLayout;
