import { LaptopOutlined, MobileOutlined } from '@ant-design/icons';
import { Timeline, Typography, Flex, Card } from 'antd';

const { Text } = Typography;

export default function ActivityModule() {
  return (
    <Card>
      <Timeline
        items={[
          {
            dot: <MobileOutlined />,
            children: (
              <>
                <Flex vertical gap={8}>
                  <Text>
                    Integer ac leo. Pellentesque ultrices mattis odio. Donec
                    vitae nisi.
                  </Text>
                  <Text type='secondary'>03/02/2022</Text>
                </Flex>
              </>
            ),
          },
          {
            dot: <LaptopOutlined/>,
            children: (
              <>
                <Flex vertical gap={8}>
                  <Text>
                    Vestibulum ac est lacinia nisi venenatis tristique. Fusce
                    congue, diam id ornare imperdiet, sapien urna pretium nisl,
                    ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In
                    congue. Etiam justo. Etiam pretium iaculis justo.
                  </Text>
                  <Text type='secondary'>06/02/2022</Text>
                </Flex>
              </>
            ),
          },
          {
            dot: <MobileOutlined />,
            children: (
              <>
                <Flex vertical gap={8}>
                  <Text>
                    Nullam sit amet turpis elementum ligula vehicula consequat.
                    Morbi a ipsum. Integer a nibh. In quis justo. Maecenas
                    rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices
                    aliquet.
                  </Text>
                  <Text type='secondary'>07/26/2022</Text>
                </Flex>
              </>
            ),
          },
          {
            dot: <LaptopOutlined/>,
            children: (
              <>
                <Flex vertical gap={8}>
                  <Text>
                    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean
                    auctor gravida sem. Praesent id massa id nisl venenatis
                    lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede,
                    malesuada in, imperdiet et, commodo vulputate, justo. In
                    blandit ultrices enim. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit.
                  </Text>
                  <Text type='secondary'>04/02/2022</Text>
                </Flex>
              </>
            ),
          },
        ]}
      />
    </Card>
  );
}
