import { Button, Space, Table, TableProps } from "antd";

interface DataType {
  key: string;
  name: string;
}
const ManageLanguages = () => {
  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
    },
  ];
  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },

    {
      title: "Action",
      key: "action",
      render: (_) => <Space size="middle"></Space>,
    },
  ];

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Manage Languages</h1>

      <div className="">
        <div className="flex justify-end py-3 ">
          <Button
            style={{ borderRadius: 5, paddingBlock: 20, boxShadow: "   0 0 10px rgba(96, 84, 84, 0.2)" }}
            type="primary"
          >
            Add New Languages
          </Button>
        </div>
        <Table<DataType> columns={columns} dataSource={data} rowClassName={"border border-red-500"} />
      </div>
    </div>
  );
};

export default ManageLanguages;
