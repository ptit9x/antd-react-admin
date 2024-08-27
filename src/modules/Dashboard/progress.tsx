import { FileProtectOutlined, FileSyncOutlined, SafetyCertificateOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Row, Col, Progress, Flex, Typography, Card } from 'antd';
import { useTranslation } from 'react-i18next';
const { Text, Title } = Typography;
const ProgressModule = () => {
const {t} = useTranslation('common');
  return (
    <Row gutter={[32, 32]} style={{ marginTop: 12 }}>
      <Col xs={24} lg={6}>
        <Card>
          <Flex vertical gap={16}>
            <FileSyncOutlined style={{ fontSize: 32 }} />
            <Text>{t('course_in_progess')}</Text>
            <Title level={2} style={{ margin: 0 }}>
              18
            </Title>
            <Progress percent={18} showInfo={false} />
          </Flex>
        </Card>
      </Col>
      <Col xs={24} lg={6}>
        <Card>
          <Flex vertical gap={16}>
            <FileProtectOutlined style={{ fontSize: 32 }} />
            <Text>{t('courses_completed')}</Text>
            <Title level={2} style={{ margin: 0 }}>
              97
            </Title>
            <Progress percent={90} showInfo={false} strokeColor='#52c41a' />
          </Flex>
        </Card>
      </Col>
      <Col xs={24} lg={6}>
        <Card>
          <Flex vertical gap={16}>
            <SafetyCertificateOutlined style={{ fontSize: 32 }} />
            <Text>{t('certificates_earned')}</Text>
            <Title level={2} style={{ margin: 0 }}>
              62
            </Title>
            <Progress percent={80} showInfo={false} strokeColor='#ff4d4f' />
          </Flex>
        </Card>
      </Col>
      <Col xs={24} lg={6}>
        <Card>
          <Flex vertical gap={16}>
            <UsergroupAddOutlined style={{ fontSize: 32 }} />
            <Text>{t('community_support')}</Text>
            <Title level={2} style={{ margin: 0 }}>
              245
            </Title>
            <Progress percent={70} showInfo={false} strokeColor='#1890ff' />
          </Flex>
        </Card>
      </Col>
    </Row>
  );
};
export default ProgressModule;
