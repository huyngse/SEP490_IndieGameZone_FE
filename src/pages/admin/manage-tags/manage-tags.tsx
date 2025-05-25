import { Tag } from "@/types/tag";
import { Button, Space, Table, TableProps } from "antd";
import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import AddTag from "./add-tags";
import EditTag from "./edit-tags";
import DeleteTag from "./delete-tags";
import useTagStore from "@/store/use-tag-store";

const ManageTags = () => {
  const { loading, fetchTags, tags } = useTagStore();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);

  const handleEdit = (record: Tag) => {
    setSelectedTag(record);
    setEditModalOpen(true);
  };

  const handleDelete = (record: Tag) => {
    setSelectedTag(record);
    setDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    fetchTags();
  };

  const columns: TableProps<Tag>["columns"] = [
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
          <Button shape="circle" onClick={() => handleEdit(record)}>
            <CiEdit />
          </Button>
          <Button shape="circle" onClick={() => handleDelete(record)} danger>
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
    <div className="px-5">
      <div className="mb-3 flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-5">Manage Tags</h1>
        <Button type="primary" onClick={() => setAddModalOpen(true)}>
          Add New Tags
        </Button>
      </div>
      <div className="">
        <Table<Tag>
          columns={columns}
          dataSource={tags}
          loading={loading}
          bordered
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
