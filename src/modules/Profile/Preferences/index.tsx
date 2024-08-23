import { Card, Row, Col, Switch, Flex, Typography } from 'antd';

const { Text } = Typography;
export default function PreferencesModule() {
  return (
    <Card title='Manage Notifications'>
      <Row gutter={32}>
        <Col sm={24} lg={12}>
          <Card title='Activities'>
            <Flex gap={16} vertical>
              <Flex justify='space-between'>
                <Text>Someone comments on my content</Text>
                <Switch defaultChecked />
              </Flex>
              <Flex justify='space-between'>
                <Text>Someone comments on my content</Text>
                <Switch defaultChecked />
              </Flex>
              <Flex justify='space-between'>
                <Text>Someone comments on my content</Text>
                <Switch defaultChecked />
              </Flex>
            </Flex>
          </Card>
        </Col>
        <Col sm={24} lg={12}>
          <Card title='Newsletters'>
            <Flex gap={16} vertical>
              <Flex justify='space-between' align='center'>
                <Flex gap={4} vertical>
                  <Text>General newsletter</Text>
                  <Text type='secondary'>
                    News, announcements & product updates
                  </Text>
                </Flex>
                <Switch defaultChecked />
              </Flex>
              <Flex justify='space-between' align='center'>
                <Flex gap={4} vertical>
                  <Text>General newsletter</Text>
                  <Text type='secondary'>
                    News, announcements & product updates
                  </Text>
                </Flex>
                <Switch defaultChecked />
              </Flex>
              <Flex justify='space-between' align='center'>
                <Flex gap={4} vertical>
                  <Text>General newsletter</Text>
                  <Text type='secondary'>
                    News, announcements & product updates
                  </Text>
                </Flex>
                <Switch defaultChecked />
              </Flex>
            </Flex>
          </Card>
        </Col>
      </Row>
    </Card>
  );
}
