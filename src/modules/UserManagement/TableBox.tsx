import Highlighter from 'react-highlight-words';
import { UserDetailType } from '@/types';
import { Avatar, Tag } from 'antd';
import {
  Button,
  Input,
  InputRef,
  Space,
  Table,
  TableColumnType,
  TableProps,
  theme
} from 'antd';
import { useRef, useState } from 'react';
import { FilterDropdownProps } from 'antd/es/table/interface';
import useQueryUserListing from '@/queries/users/useQueryUserListing';
import { useUserStore } from '@/stores/user.store';
import { UserLabel, UserStatus } from '@/constants/user.constants';
import { NavLink } from 'react-router-dom';
import { PATH_USER_DETAIL } from '@/routes/routes.path';
import { useTranslation } from 'react-i18next';
import { UserOutlined } from '@ant-design/icons';

const { useToken } = theme;

type DataIndex = keyof UserDetailType;

export default function TableBox() {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const { t } = useTranslation();
  const { filterSearch, setFilterSearch } = useUserStore();
  const { status, data } = useQueryUserListing();
  const { token } = useToken();

  const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps['confirm'], dataIndex: DataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
    setFilterSearch({ ...filterSearch, page: 1, [dataIndex === 'name' ? 'search' : dataIndex]: selectedKeys[0] });
  };

  const handleReset = (clearFilters: () => void, confirm: FilterDropdownProps['confirm'], dataIndex: DataIndex) => {
    clearFilters();
    confirm();
    setSearchText('');
    setFilterSearch({ ...filterSearch, [dataIndex === 'name' ? 'search' : dataIndex]: '' });
  };

  const getColumnSearchProps = (dataIndex: DataIndex, placeholder: string): TableColumnType<UserDetailType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={placeholder}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type='primary'
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            size='small'
            style={{ width: 90 }}
          >
            {t('common:search')}
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters, confirm, dataIndex)}
            size='small'
            style={{ width: 90 }}
          >
            {t('common:reset')}
          </Button>
          <Button type='link' size='small' onClick={() => close()}>
            {t('common:close')}
          </Button>
        </Space>
      </div>
    ),
    onFilter: (value, record) => {
      if (typeof record[dataIndex] !== 'string') return false;
      return (record[dataIndex] as string)
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase());
    },
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 50);
      }
    },
    render: (text) =>
      (searchedColumn === dataIndex) ? (
        <Highlighter
          highlightStyle={{ backgroundColor: token.colorPrimary, color: 'white', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
  });

  const columns: TableProps<UserDetailType>['columns'] = [
    {
      title: '#',
      dataIndex: '_id',
      key: '_id',
      width: 70,
      ellipsis: true,
      align: 'center',
      render: (_value, _item, index) => (filterSearch?.page || 1) + index
    },
    {
      title: t('user:name'),
      dataIndex: 'name',
      key: 'name',
      responsive: ['md'],
      ellipsis: true,
      align: 'center',
      ...getColumnSearchProps('name', t('user:search_by_name'))
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ellipsis: true,
    },
    {
      title: t('user:avatar'),
      dataIndex: 'avatar',
      key: 'avatar',
      render: (_, record) => (
        <Avatar shape="square" size="large" icon={record?.avatar ? <img src={record.avatar} alt="" /> : <UserOutlined />} />
      )
    },
    {
      title: t('user:phone'),
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: t('user:role'),
      dataIndex: 'role',
      key: 'role',
      render: (_, record) => record?.role?.name
    },
    {
      title: t('common:status'),
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      filters: [{
        text: 'Active',
        value: UserStatus.ACTIVE
      }, {
        text: 'InActive',
        value: UserStatus.INACTIVE
      }],
      filterMultiple: false,
      render: (_, record) => (
        <Tag color={record.status === UserStatus.ACTIVE ? 'success' : 'error'}>{UserLabel[record.status]}</Tag>
      )
    },

    {
      title: t('common:action'),
      key: 'action',
      render: (_, record) => (
        <NavLink to={PATH_USER_DETAIL.replace(':id', record?.id)}>{t('common:view')}</NavLink>
      )
    }
  ];

  const handleChangeTable: TableProps<UserDetailType>['onChange'] = (pagination, filters) => {
    setFilterSearch({
      ...filterSearch,
      status: (filters?.status?.length === 1 ? filters?.status?.[0] : '') as UserStatus,
      page: pagination.current,
      pageSize: pagination.pageSize,
    });
  };

  return (
    <Table
      loading={status === 'pending'}
      size='large'
      rowKey='id'
      columns={columns}
      dataSource={data?.data || []}
      locale={{
        filterReset: t('common:reset'),
        emptyText: t('common:no_data'),
      }}
      pagination={{
        total: data?.totalItem || 0,
        pageSize: filterSearch?.pageSize || 10,
        pageSizeOptions: [10, 20, 50, 100],
        showTotal: (total) => t('common:total_n_items', { n: total }),
      }}
      scroll={{ x: 700 }}
      onChange={handleChangeTable}
    />
  );
}
