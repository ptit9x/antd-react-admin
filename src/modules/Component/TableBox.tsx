import React from 'react';
import { Flex, Pagination, Table, Tag, Badge } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  piority: string[];
  status: string[];
  address: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Age',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Piority',
    dataIndex: 'piority',
    render: (_, { piority }) => (
      <>
        {piority.map((piority) => {
          let color = piority.length > 5 ? 'geekblue' : 'cyan';
          if (piority === 'hight') {
            color = 'red';
          }
          return (
            <Tag color={color} key={piority}>
              {piority.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_, { status }) => (
      <>
        {status.map((status) => {
          let color:
            | 'success'
            | 'processing'
            | 'error'
            | 'default'
            | 'warning'
            | undefined = status.length > 9 ? 'processing' : 'success';
          if (status === 'On hold') {
            color = 'default';
          }
          let text = status;

          if (status === 'hight') {
            color = 'error';
            text = 'High';
          }
          return <Badge status={color} text={text} key={status}></Badge>;
        })}
      </>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    piority: ['medium'],
    status: ['Completed'],
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    piority: ['hight'],
    status: ['On hold'],
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    piority: ['low'],
    status: ['In progress'],
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    piority: ['medium'],
    status: ['In progress'],
    address: 'London No. 2 Lake Park',
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableBox: React.FC = () => (
  <>
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      showSorterTooltip={{ target: 'sorter-icon' }}
      pagination={false}
    />
    <Flex gap='middle' justify='end' style={{ marginTop: '20px' }}>
      <Pagination
        total={100}
        showSizeChanger
        pageSize={10}
        pageSizeOptions={[10, 20, 50, 100]}
        onChange={() => {}}
        showTotal={(total) => `Total ${total} items`}
        showQuickJumper
      />
    </Flex>
  </>
);

export default TableBox;
