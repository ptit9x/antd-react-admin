import { Card, Col, Row, Descriptions, Tabs, Grid } from 'antd';
import type { DescriptionsProps } from 'antd';
import type { TabsProps } from 'antd';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import {
  PATH_PROFILE_ACTIVITY,
  PATH_PROFILE_DETAIL,
  PATH_PROFILE_PREFERENCES,
  PATH_PROFILE_SECURITY,
} from '@/routes/routes.path';


export default function UserInforModule() {
  const { useBreakpoint } = Grid;
  const screen = useBreakpoint();
  const navigate = useNavigate();
  const { t } = useTranslation('profile');

  const tabItems: TabsProps['items'] = [
    {
      key: '1',
      label: t('details'),
    },
    {
      key: '2',
      label: t('preferences'),
    },
    {
      key: '3',
      label: t('security'),
    },
    {
      key: '4',
      label: t('activity'),
    },
  ];

  const Descriptionsitems: DescriptionsProps['items'] = [
    {
      key: '1',
      label: t('name'),
      children: 'Kelvin Kiptum Kiprop',
    },
    {
      key: '2',
      label: t('job_title'),
      children: 'Software Engineer',
    },
    {
      key: '3',
      label: 'Email',
      children: (
        <a href='mailto:kelvin.kiprop96@gmail.com'>kelvin.kiprop96@gmail.com</a>
      ),
    },
    {
      key: '4',
      label: t('phone'),
      children: <a href='tel:+2547060944433'>+254 706 094 4433</a>,
    },
    {
      key: '5',
      label: 'Github',
      children: <a href='https://github.com/kelvink96'>kelvink96</a>,
    },
    {
      key: '6',
      label: 'Twitter',
      children: <a href='https://twitter.com/kelvink_96'>@kelvink_96</a>,
    },
  ];
  const onChange = (key: string) => {
    switch (key) {
      case '1':
        navigate(PATH_PROFILE_DETAIL);
        return;
      case '2':
        navigate(PATH_PROFILE_PREFERENCES);
        return;
      case '3':
        navigate(PATH_PROFILE_SECURITY);
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
          />,
        ]}>
        <Row>
          <Col xs={24} sm={8} lg={4}>
            <img
              src='/src/assets/header/avator.jpeg'
              style={{ width: '100%', height: '100%', borderRadius: '5%' }}
            />
          </Col>
          <Col
            xs={24}
            sm={16}
            lg={20}
            style={{ padding: screen.lg ? '0 16px' : '10px 0' }}>
            <Descriptions
              title={t('user_info')}
              items={Descriptionsitems}
              column={screen.lg ? 4 : 1}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
}
