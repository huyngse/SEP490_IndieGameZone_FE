import { Language } from "@/types/language";
import { Button, Space, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import AddLanguageModal from "./add-language";
import EditLanguageModal from "./edit-language";
import DeleteLanguageModal from "./delete-language";
import useLanguageStore from "@/store/use-language-store";

const ManageLanguages = () => {
  const { fetchLanguages, loading, languages } = useLanguageStore();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );

  const handleEdit = (record: Language) => {
    setSelectedLanguage(record);
    setEditModalOpen(true);
  };

  const handleDelete = (record: Language) => {
    setSelectedLanguage(record);
    setDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    fetchLanguages();
  };

  const columns: TableProps<Language>["columns"] = [
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
            type="default"
            shape={"circle"}
            onClick={() => handleEdit(record)}
          >
            <CiEdit />
          </Button>
          <Button
            type="default"
            shape={"circle"}
            danger
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
    <div className="px-5">
      <div className="">
        <div className="flex justify-between py-3">
          <h1 className="text-3xl font-bold mb-5">Manage Languages</h1>
          <Button type="primary" onClick={() => setAddModalOpen(true)}>
            Add New Languages
          </Button>
        </div>

        <Table<Language>
          columns={columns}
          dataSource={languages}
          loading={loading}
          bordered
          rowKey={(x) => x.id}
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
