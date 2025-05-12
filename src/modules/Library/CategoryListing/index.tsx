import type { FC } from 'react';
import i18n from '@/i18n';
import { Breadcrumb } from '@/components/breadcrumb';
import { Row, Col, Space } from 'antd';
import { PATH_HOME } from '@/routes/routes.path';

const BreadcrumbItems = [
  {
    path: PATH_HOME,
    title: i18n.t('common:home')
  },
  {
    title: i18n.t('library:categories')
  }
];
const CategoryListing: FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Space size={'small'} direction='vertical'>
            <Breadcrumb items={BreadcrumbItems} />
          </Space>
        </Col>
        <Col span={24}>{/* <TableBox /> */}</Col>
      </Row>
      {/* <ModalCategory /> */}
    </>
  );
};

export default CategoryListing;
