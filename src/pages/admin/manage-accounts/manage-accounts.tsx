import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Button, 
  Space, 
  Tag, 
  Avatar, 
  Input, 
  Card, 
  Dropdown,
  Modal,
  message,
  Tooltip
} from 'antd';
import { 
  UserOutlined, 
  EditOutlined, 
  DeleteOutlined, 
  PlusOutlined,
  SearchOutlined,
  MoreOutlined,
  EyeOutlined
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { User } from '@/types/user';
import { getAllAccounts } from '@/lib/api/user-api';


const ManageAccounts: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');



  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getAllAccounts();
      
      if (response.success) {
        setUsers(response.data);
        message.success(`Loaded ${response.data.length} users successfully`);
      } else {
        message.error(`Failed to fetch users: ${response.error}`);
      }
    } catch (error) {
      message.error('An unexpected error occurred while fetching users');
      console.error('Fetch users error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user: User) => {
    message.info(`Edit user: ${user.fullname}`);
  };

  const handleDelete = (user: User) => {
    Modal.confirm({
      title: 'Are you sure?',
      content: `Do you want to delete user "${user.fullname}"?`,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        message.success(`User ${user.fullname} deleted successfully`);
      },
    });
  };

  const handleView = (user: User) => {
    message.info(`View user: ${user.fullname}`);
  };

  const columns: ColumnsType<User> = [
    {
      title: 'User',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (text: string, record: User) => (
        <div className="flex items-center gap-3">
          <Avatar 
            src={record.avatar} 
            icon={<UserOutlined />}
            size={40}
            className="shadow-sm"
          />
          <div>
            <div className="font-medium text-gray-900">{text}</div>
            <div className="text-sm text-gray-500">@{record.userName}</div>
          </div>
        </div>
      ),
      width: 250,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (email: string, record: User) => (
        <div>
          <div className="text-sm">{email}</div>
          <Tag 
            color={record.emailConfirmed ? 'green' : 'orange'} 
            className="mt-1 text-xs"
          >
            {record.emailConfirmed ? 'Verified' : 'Unverified'}
          </Tag>
        </div>
      ),
    },
    {
      title: 'Role',
      dataIndex: ['role', 'name'],
      key: 'role',
      render: (role: string) => (
        <Tag color="blue" className="font-medium">
          {role}
        </Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: boolean, record: User) => (
        <div className="space-y-1">
          <Tag color={isActive ? 'green' : 'red'}>
            {isActive ? 'Active' : 'Inactive'}
          </Tag>
          {record.twoFactorEnabled && (
            <Tag color="purple" className="text-xs">2FA</Tag>
          )}
        </div>
      ),
    },
    {
      title: 'Last Login',
      dataIndex: 'lastLogin',
      key: 'lastLogin',
      render: (date: string) => (
        <div className="text-sm text-gray-600">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: User) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 'view',
                label: 'View Details',
                icon: <EyeOutlined />,
                onClick: () => handleView(record),
              },
              {
                key: 'edit',
                label: 'Edit User',
                icon: <EditOutlined />,
                onClick: () => handleEdit(record),
              },
              {
                type: 'divider',
              },
              {
                key: 'delete',
                label: 'Delete User',
                icon: <DeleteOutlined />,
                danger: true,
                onClick: () => handleDelete(record),
              },
            ],
          }}
          trigger={['click']}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
      width: 80,
    },
  ];

  const filteredUsers = users.filter(user =>
    user.fullname.toLowerCase().includes(searchText.toLowerCase()) ||
    user.email.toLowerCase().includes(searchText.toLowerCase()) ||
    user.userName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Manage Accounts
          </h1>
         
        </div>

        <Card className="mb-6 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search users by name, email, or username..."
                prefix={<SearchOutlined className="text-gray-400" />}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full"
                size="large"
              />
            </div>
            <div className="flex gap-3">
              <Button 
                type="primary" 
                icon={<PlusOutlined />}
                size="large"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Add User
              </Button>
              <Button 
                size="large"
                onClick={fetchUsers}
                loading={loading}
              >
                Refresh
              </Button>
            </div>
          </div>
        </Card>

        
        <Card className="shadow-sm">
          <Table<User>
            columns={columns}
            dataSource={filteredUsers}
            rowKey="id"
            loading={loading}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} users`,
            }}
            className="overflow-x-auto"
            scroll={{ x: 800 }}
          />
        </Card>
      </div>
    </div>
  );
};

export default ManageAccounts;