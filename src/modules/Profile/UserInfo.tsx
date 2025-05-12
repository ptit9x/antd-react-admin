import { Card, Col, Row, Descriptions, Tabs, Grid, Image, Button, Avatar } from 'antd';
import type { DescriptionsProps } from 'antd';
import type { TabsProps } from 'antd';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
  PATH_PROFILE_ACTIVITY,
  PATH_PROFILE_DETAIL,
  PATH_PROFILE_PREFERENCES,
  PATH_PROFILE_SECURITY
} from '@/routes/routes.path';
import { useUserStore } from '@/stores/user.store';
import { EditOutlined, UserOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

export default function UserInfoModule() {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const navigate = useNavigate();
  const { t } = useTranslation('user');
  const { profile } = useUserStore();

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: t('details')
    },
    {
      key: '2',
      label: t('security')
    }
    // {
    //   key: '3',
    //   label: t('preferences')
    // },
    // {
    //   key: '4',
    //   label: t('activity')
    // }
  ];

  const DescriptionItems: DescriptionsProps['items'] = [
    {
      key: '1',
      label: t('name'),
      children: profile?.name
    },
    {
      key: '2',
      label: t('user:role'),
      children: profile?.name
    },
    {
      key: '4',
      label: 'Email',
      children: <a href={`mailto:${profile?.email}`}>{profile?.email}</a>
    },
    {
      key: '5',
      label: t('phone'),
      children: <a href={`tel:${profile?.phone}`}>{profile?.phone}</a>
    },

    {
      key: '6',
      label: t('created_at'),
      children: dayjs(profile?.createdAt).format('DD-MM-YYYY')
    }
  ];
  const onChange = (key: string) => {
    switch (key) {
      case '1':
        navigate(PATH_PROFILE_DETAIL);
        return;
      case '2':
        navigate(PATH_PROFILE_SECURITY);
        return;
      case '3':
        navigate(PATH_PROFILE_PREFERENCES);
        return;
      case '4':
        navigate(PATH_PROFILE_ACTIVITY);
        return;
    }
  };

  return (
    <>
      <Card
        className='user-profile-card-nav'
        actions={[
          <Tabs
            className='user-profile-tabs'
            title={t('user_profiles')}
            defaultActiveKey='1'
            items={tabItems}
            onChange={onChange}
            style={{ padding: '0 20px' }}
          />
        ]}
      >
        <Row>
          <Col xs={24} sm={8} lg={4} style={{ position: 'relative' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {profile?.avatar ? (
                <Image src={profile.avatar} width={200} style={{ borderRadius: '10px' }} />
              ) : (
                <Avatar shape='square' size={200} icon={<UserOutlined />} />
              )}
              <Button
                type='default'
                icon={<EditOutlined />}
                onClick={() => {}}
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  padding: '5px'
                }}
              />
            </div>
          </Col>
          <Col xs={24} sm={16} lg={20} style={{ padding: screen.lg ? '0 16px' : '10px 0' }}>
            <Descriptions title={t('user_info')} items={DescriptionItems} column={screen.lg ? 3 : 1} />
          </Col>
        </Row>
      </Card>
    </>
  );
}
