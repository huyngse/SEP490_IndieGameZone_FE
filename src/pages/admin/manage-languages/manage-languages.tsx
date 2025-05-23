import { axiosClient } from "@/lib/api/config/axios-client";
import { Language } from "@/types/language";
import { Button, Space, Table, TableProps, message } from "antd";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import AddLanguageModal from "./add-language";
import EditLanguageModal from "./edit-language";
import DeleteLanguageModal from "./delete-language";

// Sử dụng type Language đã được khai báo
type DataType = Language & {
  key: string;
}

const ManageLanguages = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const fetchLanguages = async () => {
    try {
      setLoading(true);
      const response = await axiosClient.get("/languages");
      setData(
        response.data.map((item: Language) => ({
          key: item.id || item.name,
          id: item.id,
          name: item.name,
        }))
      );
    } catch (error) {
      message.error("Failed to fetch languages");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (record: DataType) => {
    setSelectedLanguage(record);
    setEditModalOpen(true);
  };

  const handleDelete = (record: DataType) => {
    setSelectedLanguage(record);
    setDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    fetchLanguages();
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
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
    fetchLanguages();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">Manage Languages</h1>
      
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
            Add New Languages
          </Button>
        </div>
        
        <Table<DataType> 
          columns={columns} 
          dataSource={data} 
          loading={loading}
          rowClassName={"border border-red-500"} 
        />
      </div>

      <AddLanguageModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSuccess={handleRefresh}
      />

      <EditLanguageModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedLanguage(null);
        }}
        onSuccess={handleRefresh}
        language={selectedLanguage}
      />

      <DeleteLanguageModal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedLanguage(null);
        }}
        onSuccess={handleRefresh}
        language={selectedLanguage}
      />
    </div>
  );
};

export default ManageLanguages;