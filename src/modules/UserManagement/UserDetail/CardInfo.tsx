import { Card, Col, Row, Descriptions, Grid, Image, Tag, Avatar } from 'antd';
import type { DescriptionsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { UserLabel, UserStatus } from '@/constants/user.constants';
import useQueryUserDetail from '@/queries/users/useQueryUserDetail';
import { UserOutlined } from '@ant-design/icons';
import { formatDateTime } from '@/utils';

const CardInfo = ({ loading }: { loading: boolean }) => {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const { t } = useTranslation('user');
  const { data } = useQueryUserDetail();

  const DescriptionItems: DescriptionsProps['items'] = [
    {
      key: '1',
      label: t('name'),
      children: data?.name
    },
    {
      key: '2',
      label: t('user:role'),
      children: data?.role?.name
    },
    {
      key: '3',
      label: t('status'),
      children: (
        <Tag style={{ cursor: 'pointer' }} color={data?.status === UserStatus.ACTIVE ? 'success' : 'error'}>
          {UserLabel[data?.status as UserStatus]}
        </Tag>
      )
    },
    {
      key: '4',
      label: 'Email',
      children: <a href={`mailto:${data?.email}`}>{data?.email}</a>
    },
    {
      key: '5',
      label: t('phone'),
      children: <a href={`tel:${data?.phone}`}>{data?.phone}</a>
    },

    {
      key: '6',
      label: t('created_at'),
      children: data?.createdAt ? formatDateTime(data?.createdAt) : ''
    }
  ];

  const staticItems: DescriptionsProps['items'] = [
    {
      key: '7',
      label: t('total_point'),
      children: data?.userStatistics?.point || '0'
    },
    {
      key: '8',
      label: t('exp'),
      children: data?.userStatistics?.exp || '0'
    },
    {
      key: '10',
      label: t('streak'),
      children: data?.userStatistics?.streak || '0'
    },
    {
      key: '11',
      label: t('lives'),
      children: data?.userStatistics?.lives || '0'
    },
    {
      key: '13',
      label: t('kyc_level'),
      children: data?.kycLevel || '0'
    }
  ];

  return (
    <>
      <Card loading={loading} className='user-profile-card-nav'>
        <Row>
          <Col xs={24} sm={8} lg={4} style={{ position: 'relative' }}>
            {data?.avatar ? (
              <Image src={data.avatar} width={200} style={{ borderRadius: '10px' }} />
            ) : (
              <Avatar shape='square' size={200} icon={<UserOutlined />} />
            )}
          </Col>
          <Col xs={24} sm={16} lg={20} style={{ padding: screen.lg ? '0 16px' : '10px 0' }}>
            <Descriptions
              title={t('user_info')}
              items={data?.role?.name === 'User' ? [...DescriptionItems, ...staticItems] : DescriptionItems}
              column={screen.lg ? 3 : 1}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CardInfo;
