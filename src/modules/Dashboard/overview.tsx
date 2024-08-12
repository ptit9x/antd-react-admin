import type { ColProps } from 'antd/es/col';
import type { FC } from 'react';

import { CaretDownOutlined, CaretUpOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { Badge, Card, Col, Flex, Progress, Row, Tooltip } from 'antd';
import dayjs from 'dayjs';
import { Area, AreaChart, Bar, BarChart, ResponsiveContainer, Tooltip as RTooltip, XAxis } from 'recharts';

const data = new Array(14).fill(null).map((_, index) => ({
  name: dayjs().add(index, 'day').format('YYYY-MM-DD'),
  number: Math.floor(Math.random() * 8 + 1),
}));

const wrapperCol: ColProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};

interface ColCardProps {
  metaName: string;
  metaCount: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  loading: boolean;
}

const ColCard: FC<ColCardProps> = ({ metaName, metaCount, body, footer, loading }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
        }}>
          <div style={{
            height: "22px",
            fontSize: "14px",
            lineHeight: "22px",
          }}>
            {metaName}
          </div>
          <div style={{
            height: "38px",
            marginTop: "4px",
            marginBottom: 0,
            overflow: "hidden",
            fontSize: "30px",
            lineHeight: "38px",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            wordBreak: "break-all",
          }}>{metaCount}</div>
          <Tooltip title="Introduce">
            <InfoCircleOutlined style={{
                position: "absolute",
                top: "4px",
                right: 0,
                lineHeight: 1,
                cursor: "pointer"
            }} />
          </Tooltip>
        </div>
        <div style={{
            height: "46px",
            marginBottom: "12px",
            position: "relative",
        }}>{body}</div>
        <div style={{
          marginTop: "8px",
          paddingTop: "9px",
          borderTop: "1px solid #292a2d",
        }}>{footer}</div>
      </Card>
    </Col>
  );
};

interface TrendProps {
  wow: string;
  dod: string;
  style?: React.CSSProperties;
}

const Trend: FC<TrendProps> = ({ wow, dod, style = {} }) => {
  return (
    <Flex gap={16} style={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      ...style
      }}>
      <Flex gap={4}>
        <span className="trend-item-label">WoW Change</span>
        <span className="trend-item-text">{wow}</span>
        <CaretDownOutlined style={{
          color: "#f5222d"
        }} />
      </Flex>
      <Flex gap={4}>
        <span className="trend-item-label">DoD Change</span>
        <span className="trend-item-text">{dod}</span>
        <CaretUpOutlined style={{
          color: "#52c41a"
        }} />
      </Flex>
    </Flex>
  );
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomTooltip: FC<any> = ({ active, payload, label }) =>
  active && (
    <div className="customTooltip">
      <span className="customTooltip-title">
        <Badge color={payload[0].fill} /> {label} : {payload[0].value}
      </span>
    </div>
  );

interface FieldProps {
  name: string;
  number: string;
}

const Field: FC<FieldProps> = ({ name, number }) => (
  <div className="field">
    <span className="field-label">{name}</span>
    <span className="field-number">{number} </span>
  </div>
);

const Overview: FC<{ loading: boolean }> = ({ loading }) => {

  return (
    <Row gutter={[12, 12]}>
      <ColCard
        loading={loading}
        metaName="Total Sales"
        metaCount="¥ 126,560"
        body={<Trend wow="12%" dod="12%" />}
        footer={<Field name="Daily Sales" number="￥12,423" />}
      />
      <ColCard
        loading={loading}
        metaName="Visits"
        metaCount="8846"
        body={
          <ResponsiveContainer>
            <AreaChart data={data}>
              <XAxis dataKey="name" hide />
              <RTooltip content={<CustomTooltip />} />
              <Area strokeOpacity={0} type="monotone" dataKey="number" fill="#8E65D3" />
            </AreaChart>
          </ResponsiveContainer>
        }
        footer={<Field name="Daily Sales" number="1234" />}
      />
      <ColCard
        loading={loading}
        metaName="Payments"
        metaCount="6560"
        body={
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" hide />
              <RTooltip content={<CustomTooltip />} />
              <Bar strokeOpacity={0} barSize={10} dataKey="number" stroke="#3B80D9" fill="#3B80D9" />
            </BarChart>
          </ResponsiveContainer>
        }
        footer={<Field name="Conversion Rate" number="60%" />}
      />
      <ColCard
        loading={loading}
        metaName="Operational Effect"
        metaCount="8846"
        body={<Progress strokeColor="#58BFC1" percent={85} />}
        footer={<Trend style={{ position: 'inherit' }} wow="12%" dod="12%" />}
      />
    </Row>
  );
};

export default Overview;
