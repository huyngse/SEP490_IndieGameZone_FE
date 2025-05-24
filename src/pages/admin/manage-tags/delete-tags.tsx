import { axiosClient } from "@/lib/api/config/axios-client";
import { Tags } from "@/types/tag";
import { Modal, message } from "antd";
import { useState } from "react";


interface DeleteTagModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  tag: Tags | null;
}

const DeleteTag = ({ open, onClose, onSuccess, tag }: DeleteTagModalProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!tag) return;
    
    try {
      setLoading(true);
      await axiosClient.delete(`/tags/${tag.id}`);
      
      message.success("Tag deleted successfully!");
      onClose();
      onSuccess(); 
    } catch (error) {
      message.error("Failed to delete tag");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      title="Delete Tag"
      open={open}
      onCancel={handleCancel}
      onOk={handleDelete}
      confirmLoading={loading}
      okText="Delete"
      cancelText="Cancel"
      okButtonProps={{ danger: true }}
    >
      <p>
        Are you sure you want to delete the tag "{tag?.name}"?
      </p>
      <p style={{ color: '#ff4d4f', fontSize: '14px' }}>
        This action cannot be undone.
      </p>
    </Modal>
  );
};

export default DeleteTag;