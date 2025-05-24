import { axiosClient } from "@/lib/api/config/axios-client";
import { Tags } from "@/types/tag";
import { Button, Space, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import AddTag from "./add-tags";
import EditTag  from "./edit-tags";
import DeleteTag  from "./delete-tags";

type DataType = Tags & {
  key: string;
}

const ManageTags = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<Tags | null>(null);

  const fetchTags = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get("/tags");
      setData(
        response.data.map((item: Tags) => ({
          key: item.id || item.name,
          id: item.id,
          name: item.name,
        }))
      );
    } catch (error) {
      message.error("Failed to fetch tags");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record: DataType) => {
    setSelectedTag(record);
    setEditModalOpen(true);
  };

  const handleDelete = (record: DataType) => {
    setSelectedTag(record);
    setDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    fetchTags();
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Tag Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Space size="small">
          <Button
            style={{
              borderRadius: 5,
              paddingBlock: 20,
              boxShadow: "0 0 10px rgba(96, 84, 84, 0.2)",
              backgroundColor: "#0066FF",
            }}
            type="primary"
            onClick={() => handleEdit(record)}
          >
            <CiEdit />
          </Button>
          <Button
            style={{
              borderRadius: 5,
              paddingBlock: 20,
              boxShadow: "0 0 10px rgba(96, 84, 84, 0.2)",
              backgroundColor: "#FF3333",
            }}
            type="primary"
            onClick={() => handleDelete(record)}
          >
            <MdOutlineDeleteForever />
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Manage Tags</h1>
      
      <div className="">
        <div className="flex justify-end py-3">
          <Button
            style={{ 
              borderRadius: 5, 
              paddingBlock: 20, 
              boxShadow: "0 0 10px rgba(96, 84, 84, 0.2)" 
            }}
            type="primary"
            onClick={() => setAddModalOpen(true)}
          >
            Add New Tags
          </Button>
        </div>
        
        <Table<DataType> 
          columns={columns} 
          dataSource={data} 
          loading={loading}
          rowClassName={"border border-red-500"} 
        />
      </div>

      <AddTag
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSuccess={handleRefresh}
      />

      <EditTag
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedTag(null);
        }}
        onSuccess={handleRefresh}
        tag={selectedTag}
      />

      <DeleteTag
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedTag(null);
        }}
        onSuccess={handleRefresh}
        tag={selectedTag}
      />
    </div>
  );
};

export default ManageTags;